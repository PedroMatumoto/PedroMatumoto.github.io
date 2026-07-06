"use client";

import { useMemo, useRef, useState } from "react";
import MapboxMap, { Marker, NavigationControl, Popup } from "react-map-gl/mapbox";
import type { MapRef } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";
import type { TripPointOfInterest } from "@/data/hobbies";

const TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN ?? "";

const pointColors: Record<NonNullable<TripPointOfInterest["category"]>, string> = {
  food: "#ea580c",
  culture: "#7c3aed",
  nature: "#16a34a",
  shopping: "#2563eb",
  transport: "#ca8a04",
  stay: "#dc2626",
  other: "#475569",
};

const pointLabels: Record<NonNullable<TripPointOfInterest["category"]>, string> = {
  food: "Comida",
  culture: "Cultura",
  nature: "Natureza",
  shopping: "Compras",
  transport: "Transporte",
  stay: "Hospedagem",
  other: "Outros",
};

interface Props {
  points: TripPointOfInterest[];
}

export default function TripInterestMap({ points }: Props) {
  const mapRef = useRef<MapRef | null>(null);
  const [popupIndex, setPopupIndex] = useState<number | null>(null);

  const pointsByDay = useMemo(() => {
    const groups = new globalThis.Map<string, Array<{ point: TripPointOfInterest; idx: number }>>();

    points.forEach((point, idx) => {
      const key = point.day || "Sem dia";
      const list = groups.get(key) ?? [];
      list.push({ point, idx });
      groups.set(key, list);
    });

    return Array.from(groups.entries()).sort(([a], [b]) => a.localeCompare(b, "pt-BR"));
  }, [points]);

  const initialView = useMemo(() => {
    if (points.length === 0) return { longitude: -46.65, latitude: -23.55, zoom: 4 };

    const avgLon = points.reduce((sum, point) => sum + point.coords[0], 0) / points.length;
    const avgLat = points.reduce((sum, point) => sum + point.coords[1], 0) / points.length;

    return {
      longitude: avgLon,
      latitude: avgLat,
      zoom: points.length > 1 ? 5.5 : 10,
    };
  }, [points]);

  const popupPoint = popupIndex === null ? null : points[popupIndex];

  const focusPoint = (idx: number) => {
    const selected = points[idx];
    if (!selected) return;

    setPopupIndex(idx);

    const map = mapRef.current;
    if (!map) return;

    const currentZoom = map.getZoom();
    map.flyTo({
      center: selected.coords,
      zoom: currentZoom < 11 ? 11 : currentZoom,
      duration: 850,
      essential: true,
    });
  };

  return (
    <div className="w-full h-[560px] lg:h-[72vh] rounded-2xl overflow-hidden border border-stone-200 relative">
      {!TOKEN && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-stone-100 text-stone-500 text-sm text-center px-6">
          Adicione{" "}
          <code className="mx-1 font-mono bg-stone-200 px-1 rounded">NEXT_PUBLIC_MAPBOX_TOKEN</code>{" "}
          no{" "}
          <code className="mx-1 font-mono bg-stone-200 px-1 rounded">.env.local</code>{" "}
          para ativar o mapa.
        </div>
      )}

      <MapboxMap
        ref={mapRef}
        initialViewState={initialView}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        mapboxAccessToken={TOKEN}
        style={{ width: "100%", height: "100%" }}
        attributionControl={false}
        onClick={() => setPopupIndex(null)}
      >
        <NavigationControl position="top-right" />

        {points.map((point, idx) => {
          const category = point.category ?? "other";
          const color = pointColors[category];

          return (
            <Marker
              key={`${point.name}-${idx}`}
              longitude={point.coords[0]}
              latitude={point.coords[1]}
              anchor="center"
              onClick={(e) => {
                e.originalEvent.stopPropagation();
                focusPoint(idx);
              }}
            >
              <div
                title={point.name}
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: "50%",
                  backgroundColor: color,
                  border: "2px solid white",
                  boxShadow: "0 1px 4px rgba(0,0,0,.3)",
                  cursor: "pointer",
                }}
              />
            </Marker>
          );
        })}

        {popupPoint && (
          <Popup
            longitude={popupPoint.coords[0]}
            latitude={popupPoint.coords[1]}
            anchor="bottom"
            offset={12}
            closeButton={false}
            onClose={() => setPopupIndex(null)}
          >
            <div className="min-w-[160px] text-stone-800">
              <p className="font-semibold text-sm leading-tight">{popupPoint.name}</p>
              <p className="text-xs text-stone-500 mt-0.5">{pointLabels[popupPoint.category ?? "other"]}</p>
              {popupPoint.day && <p className="text-xs text-stone-400">{popupPoint.day}</p>}
              {popupPoint.notes && <p className="text-xs text-stone-500 mt-1">{popupPoint.notes}</p>}
            </div>
          </Popup>
        )}
      </MapboxMap>

      <div className="absolute bottom-3 left-3 rounded-xl border border-stone-200 bg-white/90 backdrop-blur-sm px-3 py-2 flex gap-3 flex-wrap text-xs text-stone-600">
        {(Object.entries(pointLabels) as [keyof typeof pointLabels, string][]).map(([key, label]) => (
          <span key={key} className="inline-flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: pointColors[key] }} />
            {label}
          </span>
        ))}
      </div>

      <div className="absolute top-3 left-3 max-w-[300px] max-h-[72%] overflow-auto rounded-xl border border-stone-200 bg-white/95 backdrop-blur-sm p-3">
        <p className="text-[11px] uppercase tracking-[0.2em] text-stone-400 mb-2">Pontos por dia</p>
        <div className="space-y-2">
          {pointsByDay.map(([day, entries]) => (
            <div key={day}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-500 mb-1">
                {day}
              </p>
              <div className="space-y-1.5">
                {entries.map(({ point, idx }) => {
                  const isActive = popupIndex === idx;
                  const category = point.category ?? "other";
                  return (
                    <button
                      key={`${point.name}-${idx}`}
                      type="button"
                      onClick={() => focusPoint(idx)}
                      className={`w-full text-left rounded-lg border px-2.5 py-2 text-xs transition-colors ${
                        isActive
                          ? "border-stone-500 bg-stone-100 text-stone-900"
                          : "border-stone-200 bg-white text-stone-700 hover:border-stone-400"
                      }`}
                    >
                      <span className="inline-flex items-center gap-1.5">
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: pointColors[category] }}
                        />
                        <span className="font-medium">{point.name}</span>
                      </span>
                      <span className="ml-3 text-stone-500">{pointLabels[category]}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
