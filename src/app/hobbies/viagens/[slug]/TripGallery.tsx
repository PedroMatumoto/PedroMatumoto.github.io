"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Trip, TripPhoto } from "@/data/hobbies";

function getSpanClass(span?: TripPhoto["span"]) {
  switch (span) {
    case "wide":
      return "col-span-2 row-span-1";
    case "tall":
      return "col-span-1 row-span-2";
    default:
      return "col-span-1 row-span-1";
  }
}

export default function TripGallery({ trip }: { trip: Trip }) {
  const allTags = Array.from(
    new Set(trip.photos?.flatMap((p) => p.tags ?? []) ?? [])
  );

  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered =
    activeTag === null
      ? (trip.photos ?? [])
      : (trip.photos ?? []).filter((p) => p.tags?.includes(activeTag));

  const photoCount = (trip.photos ?? []).length;
  const placeCount = (trip.places ?? []).length;

  return (
    <main className="min-h-screen bg-[#EDE8DF] pt-20">
      {/* ── Header ─────────────────────────────────────────────── */}
      <div className="px-6 md:px-10 pb-6">
        <div className="flex items-start justify-between gap-6">
          {/* Left */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Link
                href="/hobbies/viagens"
                className="text-[11px] text-stone-400 hover:text-stone-700 uppercase tracking-widest transition-colors"
              >
                ← Viagens
              </Link>
              <span className="text-stone-300">·</span>
              <span className="text-[11px] text-stone-400 uppercase tracking-widest">
                {trip.flag} {trip.country.toUpperCase()}
              </span>
            </div>

            <p className="font-serif italic text-stone-500 text-lg leading-none mb-1">
              o que eu vi
            </p>
            <h1 className="text-5xl md:text-7xl font-black text-stone-900 tracking-tighter leading-none uppercase">
              {trip.name.replace(" ", "\u2014")}
              {trip.period ? ` — ${trip.period}` : ""}.
            </h1>
          </div>

          {/* Right — stats */}
          <div className="text-right shrink-0 hidden sm:block">
            <p className="text-5xl font-bold text-stone-900 tracking-tighter leading-none">
              {photoCount}
            </p>
            <p className="text-xs text-stone-400 mt-1">frames</p>
            {placeCount > 0 && (
              <p className="text-xs text-stone-400">{placeCount} lugares</p>
            )}
          </div>
        </div>

        {/* ── Tag filter bar ───────────────────────────────────── */}
        <div className="mt-6 flex items-center justify-between flex-wrap gap-3 border-t border-stone-300 pt-4">
          <nav className="flex items-center gap-5 flex-wrap">
            <button
              onClick={() => setActiveTag(null)}
              className={`text-xs uppercase tracking-widest transition-colors ${
                activeTag === null
                  ? "text-stone-900 font-semibold border-b border-stone-900 pb-0.5"
                  : "text-stone-400 hover:text-stone-700"
              }`}
            >
              Tudo
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`text-xs uppercase tracking-widest transition-colors ${
                  activeTag === tag
                    ? "text-stone-900 font-semibold border-b border-stone-900 pb-0.5"
                    : "text-stone-400 hover:text-stone-700"
                }`}
              >
                {tag}
              </button>
            ))}
          </nav>
          <span className="text-xs text-stone-400">{filtered.length} frames</span>
        </div>
      </div>

      {/* ── Bento Grid ──────────────────────────────────────────── */}
      <div className="px-6 md:px-10 pb-16">
        <div
          className="grid gap-1"
          style={{
            gridTemplateColumns: "repeat(3, 1fr)",
            gridAutoRows: "260px",
          }}
        >
          {filtered.map((photo, i) => (
            <div
              key={i}
              className={`relative overflow-hidden bg-stone-200 group ${getSpanClass(photo.span)}`}
            >
              <Image
                src={photo.src}
                alt={photo.caption ?? photo.location ?? `Foto ${i + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              {(photo.location || photo.caption) && (
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end">
                  <div className="p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    {photo.location && (
                      <p className="text-white text-xs uppercase tracking-widest font-semibold">
                        {photo.location}
                      </p>
                    )}
                    {photo.caption && (
                      <p className="text-white/70 text-xs mt-0.5">{photo.caption}</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="col-span-3 flex items-center justify-center h-64 text-stone-400 text-sm">
              Nenhuma foto com esse filtro.
            </div>
          )}
        </div>
      </div>

      {/* ── Notes ───────────────────────────────────────────────── */}
      {trip.notes && (
        <div className="px-6 md:px-10 pb-16 max-w-2xl">
          <p className="text-xs uppercase tracking-widest text-stone-400 mb-2">Notas</p>
          <p className="text-stone-600 text-sm leading-relaxed">{trip.notes}</p>
        </div>
      )}
    </main>
  );
}
