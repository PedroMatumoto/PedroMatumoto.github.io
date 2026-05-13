"use client";

import { useEffect, useRef, useState } from "react";
import Map, { Marker, Popup, NavigationControl, Source, Layer } from "react-map-gl/mapbox";
import type { MapRef } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";
import type { Trail, TrailDifficulty } from "@/data/hobbies";

const TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN ?? "";

const diffColor: Record<TrailDifficulty, string> = {
  "FÁCIL": "#22c55e",
  "MODERADO": "#f59e0b",
  "DIFÍCIL": "#ef4444",
};

/** Parse a GPX string → array of [lon, lat] pairs */
function parseGpx(text: string): [number, number][] {
  if (typeof window === "undefined") return [];
  const doc = new DOMParser().parseFromString(text, "application/xml");

  // Support GPX with or without XML namespaces and both track/route points.
  const points = [
    ...Array.from(doc.getElementsByTagName("trkpt")),
    ...Array.from(doc.getElementsByTagNameNS("*", "trkpt")),
    ...Array.from(doc.getElementsByTagName("rtept")),
    ...Array.from(doc.getElementsByTagNameNS("*", "rtept")),
  ];

  return points
    .map((pt) => {
      const lon = Number(pt.getAttribute("lon"));
      const lat = Number(pt.getAttribute("lat"));
      return Number.isFinite(lon) && Number.isFinite(lat) ? ([lon, lat] as [number, number]) : null;
    })
    .filter((c): c is [number, number] => c !== null);
}

interface Props {
  trails: Trail[];
  activeSlug?: string | null;
  onTrailClick?: (slug: string) => void;
}

export default function TrailMap({ trails, activeSlug, onTrailClick }: Props) {
  const mapRef = useRef<MapRef | null>(null);
  const [popupSlug, setPopupSlug] = useState<string | null>(null);
  // slug → coordinate array (loaded from GPX)
  const [routes, setRoutes] = useState<Record<string, [number, number][]>>({});

  const onMapLoad = () => {
    const map = mapRef.current?.getMap();
    if (!map) return;
    if (!map.getSource('mapbox-dem')) {
      map.addSource('mapbox-dem', {
        type: 'raster-dem',
        url: 'mapbox://mapbox.mapbox-terrain-dem-v1',
        tileSize: 512,
        maxzoom: 14,
      });
    }
    if (!map.getLayer('hillshading')) {
      map.addLayer({
        id: 'hillshading',
        source: 'mapbox-dem',
        type: 'hillshade',
        paint: {
          'hillshade-shadow-color': '#2a1a0a',
          'hillshade-highlight-color': '#f4eed8',
          'hillshade-illumination-direction': 335,
          'hillshade-exaggeration': 0.45,
        },
      } as Parameters<typeof map.addLayer>[0]);
    }
    map.setTerrain({ source: 'mapbox-dem', exaggeration: 1.8 });
  };

  // Fetch all GPX files on mount
  useEffect(() => {
    const withGpx = trails.filter((t) => t.gpx);
    if (withGpx.length === 0) return;

    Promise.all(
      withGpx.map(async (t) => {
        try {
          const res = await fetch(t.gpx!);
          if (!res.ok) return null;
          const coords = parseGpx(await res.text());
          return coords.length ? ([t.slug, coords] as const) : null;
        } catch {
          return null;
        }
      })
    ).then((results) => {
      const map: Record<string, [number, number][]> = {};
      for (const r of results) if (r) map[r[0]] = r[1];
      setRoutes(map);
    });
  }, [trails]);

  // Focus map on selected trail (from list click or marker click)
  useEffect(() => {
    if (!activeSlug) return;
    const trail = trails.find((t) => t.slug === activeSlug);
    if (!trail) return;
    const target = routes[activeSlug]?.[0] ?? trail.coords;

    mapRef.current?.flyTo({
      center: target,
      zoom: 11.5,
      duration: 800,
      essential: true,
    });
  }, [activeSlug, routes, trails]);

  const popupTrail = trails.find((t) => t.slug === popupSlug);

  // Build a single GeoJSON FeatureCollection for all loaded routes
  const routesGeoJSON = {
    type: "FeatureCollection" as const,
    features: Object.entries(routes).map(([slug, coords]) => {
      const trail = trails.find((t) => t.slug === slug);
      return {
        type: "Feature" as const,
        properties: {
          slug,
          color: diffColor[trail?.difficulty ?? "FÁCIL"],
          active: slug === activeSlug ? 1 : 0,
        },
        geometry: { type: "LineString" as const, coordinates: coords },
      };
    }),
  };

  const hasRoutes = routesGeoJSON.features.length > 0;

  return (
    <div className="w-full h-[480px] rounded-2xl overflow-hidden border border-[#c4b89a]/50 relative">
      {!TOKEN && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-stone-100 text-stone-500 text-sm text-center px-6">
          Adicione{" "}
          <code className="mx-1 font-mono bg-stone-200 px-1 rounded">NEXT_PUBLIC_MAPBOX_TOKEN</code>{" "}
          no{" "}
          <code className="mx-1 font-mono bg-stone-200 px-1 rounded">.env.local</code>{" "}
          para ativar o mapa.
        </div>
      )}
      <Map
        ref={mapRef}
        initialViewState={{ longitude: -48, latitude: -26, zoom: 4.5, pitch: 40, bearing: 0 }}
        mapStyle="mapbox://styles/mapbox/outdoors-v12"
        mapboxAccessToken={TOKEN}
        style={{ width: "100%", height: "100%" }}
        attributionControl={false}
        onLoad={onMapLoad}
      >
        <NavigationControl position="top-right" visualizePitch />

        {/* ── GPX route lines ─────────────────────────────────────────── */}
        {hasRoutes && (
          <Source id="routes" type="geojson" data={routesGeoJSON}>
            {/* Inactive routes — thin, semi-transparent */}
            <Layer
              id="routes-inactive"
              type="line"
              filter={["==", ["get", "active"], 0]}
              layout={{ "line-join": "round", "line-cap": "round" }}
              paint={{
                "line-color": ["get", "color"],
                "line-width": 2,
                "line-opacity": 0.35,
              }}
            />
            {/* Active route — thick, full opacity with glow */}
            <Layer
              id="routes-active-shadow"
              type="line"
              filter={["==", ["get", "active"], 1]}
              layout={{ "line-join": "round", "line-cap": "round" }}
              paint={{
                "line-color": ["get", "color"],
                "line-width": 10,
                "line-opacity": 0.15,
              }}
            />
            <Layer
              id="routes-active"
              type="line"
              filter={["==", ["get", "active"], 1]}
              layout={{ "line-join": "round", "line-cap": "round" }}
              paint={{
                "line-color": ["get", "color"],
                "line-width": 4,
                "line-opacity": 1,
              }}
            />
          </Source>
        )}

        {/* ── Start-point markers ──────────────────────────────────────── */}
        {trails.map((trail) => {
          const isActive = trail.slug === activeSlug;
          const color = diffColor[trail.difficulty];
          const markerCoords = routes[trail.slug]?.[0] ?? trail.coords;
          return (
            <Marker
              key={trail.slug}
              longitude={markerCoords[0]}
              latitude={markerCoords[1]}
              anchor="center"
              onClick={(e) => {
                e.originalEvent.stopPropagation();
                setPopupSlug(trail.slug);
                onTrailClick?.(trail.slug);
              }}
            >
              <div
                style={{
                  width: isActive ? 20 : 13,
                  height: isActive ? 20 : 13,
                  borderRadius: "50%",
                  backgroundColor: trail.done ? color : "white",
                  border: `3px solid ${color}`,
                  cursor: "pointer",
                  boxShadow: isActive
                    ? `0 0 0 5px ${color}33, 0 2px 6px rgba(0,0,0,.3)`
                    : "0 1px 4px rgba(0,0,0,.25)",
                  transition: "all 0.15s ease",
                }}
              />
            </Marker>
          );
        })}

        {/* ── Popup ──────────────────────────────────────────────────────── */}
        {popupTrail && (
          (() => {
            const popupCoords = routes[popupTrail.slug]?.[0] ?? popupTrail.coords;
            return (
          <Popup
            longitude={popupCoords[0]}
            latitude={popupCoords[1]}
            anchor="bottom"
            offset={16}
            closeOnClick={false}
            onClose={() => setPopupSlug(null)}
          >
            <div className="p-1 min-w-[160px]">
              <p className="font-semibold text-stone-900 text-sm leading-snug mb-1">
                {popupTrail.name}
              </p>
              <p className="text-xs text-stone-400 mb-2">{popupTrail.region}</p>
              <div className="flex gap-3 text-xs text-stone-600">
                <span>{popupTrail.distanceKm} km</span>
                <span>+{popupTrail.elevationM} m</span>
              </div>
              <div className="mt-2 flex items-center gap-2 flex-wrap">
                <span
                  className="text-xs font-semibold px-2 py-0.5 rounded-full"
                  style={{
                    backgroundColor: `${diffColor[popupTrail.difficulty]}20`,
                    color: diffColor[popupTrail.difficulty],
                  }}
                >
                  {popupTrail.difficulty}
                </span>
                {popupTrail.done && (
                  <span className="text-xs text-green-600">✓ Feita</span>
                )}
              </div>
            </div>
          </Popup>
            );
          })()
        )}
      </Map>

      {/* ── Legend ─────────────────────────────────────────────────────── */}
      <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-xl border border-stone-200 px-3 py-2 flex gap-4 text-xs text-stone-600">
        {(Object.entries(diffColor) as [TrailDifficulty, string][]).map(([label, color]) => (
          <span key={label} className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full inline-block border-2" style={{ borderColor: color }} />
            {label}
          </span>
        ))}
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full inline-block bg-green-500" />
          Feita
        </span>
      </div>
    </div>
  );
}
