"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import dynamic from "next/dynamic";
import { trilhasData } from "@/data/hobbies";
import type { TrailDifficulty } from "@/data/hobbies";

// Load the map only on the client (mapbox-gl is browser-only)
const TrailMap = dynamic(() => import("@/components/TrailMap"), { ssr: false });

const difficultyStyle: Record<TrailDifficulty, string> = {
  "FÁCIL": "bg-green-100 text-green-700",
  "MODERADO": "bg-amber-100 text-amber-700",
  "DIFÍCIL": "bg-red-100 text-red-700",
};

const done = trilhasData.filter((t) => t.done);
const todo = trilhasData.filter((t) => !t.done);
const totalDist = trilhasData.reduce((s, t) => s + t.distanceKm, 0);
const totalElev = trilhasData.reduce((s, t) => s + t.elevationM, 0);

export default function TrilhasPage() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const mapSectionRef = useRef<HTMLDivElement | null>(null);

  return (
    <main className="min-h-screen bg-stone-50 pt-20 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Link href="/hobbies" className="text-xs text-stone-400 hover:text-stone-700 transition-colors uppercase tracking-widest">
            ← Hub
          </Link>
          <div className="mt-4 flex items-end gap-4">
            <span className="text-8xl font-serif text-green-600 opacity-70 leading-none">山</span>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-stone-900 tracking-tighter">Trilhas</h1>
              <p className="text-stone-500 mt-1">Outdoor Adventure</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Feitas", value: `${done.length}`, color: "text-green-600" },
            { label: "No radar", value: `${todo.length}`, color: "text-stone-900" },
            { label: "Dist. total (km)", value: totalDist.toFixed(0), color: "text-stone-900" },
            { label: "Altitude total (m)", value: totalElev.toLocaleString("pt-BR"), color: "text-stone-900" },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-2xl border border-stone-200 p-5">
              <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
              <p className="text-xs text-stone-400 mt-1 tracking-wider uppercase">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Map */}
        <div ref={mapSectionRef} className="mb-10">
          <TrailMap
            trails={trilhasData}
            activeSlug={activeSlug}
            onTrailClick={(slug) => {
              setActiveSlug((prev) => (prev === slug ? null : slug));
              document.getElementById(`trail-${slug}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
            }}
          />
          <p className="text-xs text-stone-400 mt-2 text-center">
            Clique em um marcador para ver detalhes · <span className="text-green-600">●</span> preenchido = feita
          </p>
        </div>

        {/* No radar */}
        <TrailSection
          title="No radar"
          trails={todo}
          activeSlug={activeSlug}
          onRowClick={(slug) => {
            setActiveSlug((prev) => (prev === slug ? null : slug));
            mapSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          accentColor="text-stone-900"
          lineColor="bg-green-400"
        />

        {/* Done */}
        <TrailSection
          title="Feitas ✓"
          trails={done}
          activeSlug={activeSlug}
          onRowClick={(slug) => {
            setActiveSlug((prev) => (prev === slug ? null : slug));
            mapSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          accentColor="text-green-600"
          lineColor="bg-green-600"
        />
      </div>
    </main>
  );
}

function TrailSection({
  title,
  trails,
  activeSlug,
  onRowClick,
  accentColor,
  lineColor,
}: {
  title: string;
  trails: typeof trilhasData;
  activeSlug: string | null;
  onRowClick: (slug: string) => void;
  accentColor: string;
  lineColor: string;
}) {
  if (trails.length === 0) return null;
  return (
    <section className="mb-12">
      <h2 className={`text-lg font-semibold ${accentColor} mb-4 flex items-center gap-2`}>
        <span className={`w-6 h-px ${lineColor} inline-block`} />
        {title}
      </h2>
      <div className="flex flex-col gap-3">
        {trails.map((t) => {
          const isActive = t.slug === activeSlug;
          return (
            <div
              id={`trail-${t.slug}`}
              key={t.slug}
              className={`bg-white rounded-xl border transition-all duration-150
                ${isActive ? "border-green-400 shadow-md ring-1 ring-green-300" : "border-stone-200 hover:border-stone-300"}
                ${t.done ? "opacity-80" : ""}
              `}
            >
              {/* Main row — click to select */}
              <button
                onClick={() => onRowClick(t.slug)}
                className="text-left w-full p-5 flex flex-col sm:flex-row sm:items-center gap-3 cursor-pointer"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${difficultyStyle[t.difficulty]}`}>
                      {t.difficulty}
                    </span>
                    {t.done && (
                      <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full">✓ Feita</span>
                    )}
                    {t.photos && t.photos.length > 0 && (
                      <span className="text-xs text-stone-400 flex items-center gap-1">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {t.photos.length}
                      </span>
                    )}
                  </div>
                  <p className="font-medium text-stone-900">{t.name}</p>
                  <p className="text-xs text-stone-400 mt-0.5">{t.region}</p>
                  {t.notes && <p className="text-sm text-stone-500 italic mt-2">{t.notes}</p>}
                </div>
                <div className="flex gap-6 sm:flex-col sm:gap-1 text-right shrink-0">
                  <div>
                    <p className="text-lg font-bold text-stone-900">{t.distanceKm.toFixed(1)}</p>
                    <p className="text-xs text-stone-400 uppercase tracking-wider">km</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-stone-900">+{t.elevationM.toLocaleString("pt-BR")}</p>
                    <p className="text-xs text-stone-400 uppercase tracking-wider">m</p>
                  </div>
                </div>
              </button>

              {/* Photo gallery — visible only when active and has photos */}
              {isActive && t.photos && t.photos.length > 0 && (
                <div className="px-5 pb-5">
                  <div className="flex gap-2 overflow-x-auto pb-1 snap-x snap-mandatory scrollbar-thin">
                    {t.photos.map((src, i) => (
                      <a key={i} href={src} target="_blank" rel="noopener noreferrer" className="shrink-0 snap-start">
                        <div className="relative w-48 h-32 rounded-lg overflow-hidden bg-stone-100">
                          <Image
                            src={src}
                            alt={`${t.name} - foto ${i + 1}`}
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-200"
                            sizes="192px"
                          />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
