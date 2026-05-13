"use client";

import { useEffect, useRef, useState } from "react";
import Map, { Marker, Popup, NavigationControl } from "react-map-gl/mapbox";
import type { MapRef } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";
import type { Restaurant, RestaurantStatus } from "@/data/hobbies";

const TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN ?? "";

const statusColor: Record<RestaurantStatus, string> = {
  visited: "#16a34a",
  want: "#e11d48",
};

interface Props {
  restaurants: Restaurant[];
  activeSlug?: string | null;
  onRestaurantClick?: (slug: string) => void;
}

export default function RestaurantMap({ restaurants, activeSlug, onRestaurantClick }: Props) {
  const mapRef = useRef<MapRef | null>(null);
  const [popupSlug, setPopupSlug] = useState<string | null>(null);

  // Fly to active restaurant when changed from list
  useEffect(() => {
    if (!activeSlug) return;
    const r = restaurants.find((x) => x.slug === activeSlug);
    if (!r) return;
    mapRef.current?.flyTo({
      center: r.coords,
      zoom: 14,
      duration: 800,
      essential: true,
    });
  }, [activeSlug, restaurants]);

  const popupRestaurant = restaurants.find((r) => r.slug === popupSlug);

  // Compute initial center as average of all coords
  const avgLon = restaurants.reduce((s, r) => s + r.coords[0], 0) / (restaurants.length || 1);
  const avgLat = restaurants.reduce((s, r) => s + r.coords[1], 0) / (restaurants.length || 1);
  const initialLon = restaurants.length > 0 ? avgLon : -46.65;
  const initialLat = restaurants.length > 0 ? avgLat : -23.55;

  return (
    <div className="w-full h-[400px] rounded-2xl overflow-hidden border border-stone-200 relative">
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
        initialViewState={{
          longitude: initialLon,
          latitude: initialLat,
          zoom: restaurants.length > 0 ? 11 : 10,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        mapboxAccessToken={TOKEN}
        style={{ width: "100%", height: "100%" }}
        attributionControl={false}
        onClick={() => setPopupSlug(null)}
      >
        <NavigationControl position="top-right" />

        {restaurants.map((r) => {
          const isActive = r.slug === activeSlug;
          const color = statusColor[r.status];
          return (
            <Marker
              key={r.slug}
              longitude={r.coords[0]}
              latitude={r.coords[1]}
              anchor="center"
              onClick={(e) => {
                e.originalEvent.stopPropagation();
                setPopupSlug(r.slug);
                onRestaurantClick?.(r.slug);
              }}
            >
              <div
                title={r.name}
                style={{
                  width: isActive ? 22 : 14,
                  height: isActive ? 22 : 14,
                  borderRadius: "50%",
                  backgroundColor: r.status === "visited" ? color : "white",
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

        {popupRestaurant && (
          <Popup
            longitude={popupRestaurant.coords[0]}
            latitude={popupRestaurant.coords[1]}
            anchor="bottom"
            offset={14}
            closeButton={false}
            onClose={() => setPopupSlug(null)}
          >
            <div className="text-stone-800 min-w-[140px]">
              <p className="font-semibold text-sm leading-tight">{popupRestaurant.name}</p>
              <p className="text-xs text-stone-500 mt-0.5">{popupRestaurant.cuisine.join(", ")}</p>
              <p className="text-xs text-stone-400">{popupRestaurant.location}</p>
              {popupRestaurant.rating !== undefined && (
                <p className="text-xs text-amber-500 mt-1">
                  {"★".repeat(popupRestaurant.rating)}
                  <span className="text-stone-200">{"★".repeat(5 - popupRestaurant.rating)}</span>
                </p>
              )}
            </div>
          </Popup>
        )}
      </Map>
    </div>
  );
}
