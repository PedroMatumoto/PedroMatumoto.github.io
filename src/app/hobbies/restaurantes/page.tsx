"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { restaurantesData } from "@/data/hobbies";
import type { RestaurantStatus, Dish } from "@/data/hobbies";

interface LightboxState {
  dishes: Dish[];
  index: number;
  restaurantName: string;
}

function Lightbox({ state, onClose, onNav }: {
  state: LightboxState;
  onClose: () => void;
  onNav: (dir: 1 | -1) => void;
}) {
  const dish = state.dishes[state.index];
  const hasPrev = state.index > 0;
  const hasNext = state.index < state.dishes.length - 1;

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && hasNext) onNav(1);
      if (e.key === "ArrowLeft" && hasPrev) onNav(-1);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onNav, hasPrev, hasNext]);

  const content = (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/70 hover:text-white text-3xl leading-none z-10"
        aria-label="Fechar"
      >
        ×
      </button>

      {/* Prev */}
      {hasPrev && (
        <button
          onClick={(e) => { e.stopPropagation(); onNav(-1); }}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-4xl leading-none z-10 px-2"
          aria-label="Anterior"
        >
          ‹
        </button>
      )}

      {/* Image */}
      <div
        className="relative max-w-3xl w-full max-h-[80vh] mx-16 flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full" style={{ height: "min(70vh, 600px)" }}>
          {dish.photo ? (
            <Image
              src={dish.photo}
              alt={dish.name}
              fill
              className="object-contain"
              unoptimized
            />
          ) : (
            <div className="flex items-center justify-center h-full">
              <span className="text-8xl font-serif text-white/20">皿</span>
            </div>
          )}
        </div>
        <div className="mt-3 text-center">
          <p className="text-white font-medium">{dish.name}</p>
          {dish.notes && <p className="text-white/60 text-sm mt-0.5">{dish.notes}</p>}
          <p className="text-white/40 text-xs mt-1">{state.restaurantName} · {state.index + 1}/{state.dishes.length}</p>
        </div>
      </div>

      {/* Next */}
      {hasNext && (
        <button
          onClick={(e) => { e.stopPropagation(); onNav(1); }}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-4xl leading-none z-10 px-2"
          aria-label="Próximo"
        >
          ›
        </button>
      )}
    </div>
  );

  return createPortal(content, document.body);
}

const statusLabel: Record<RestaurantStatus, string> = {
  visited: "Visitado",
  want: "Quero ir",
};

const statusStyle: Record<RestaurantStatus, string> = {
  visited: "bg-green-100 text-green-700 border-green-200",
  want: "bg-rose-100 text-rose-700 border-rose-200",
};

const PRICE_LABEL: Record<number, string> = { 1: "$", 2: "$$", 3: "$$$", 4: "$$$$" };
const STAR = "★";

// Derive unique sorted filter options from the data
const allLocations = Array.from(new Set(restaurantesData.flatMap((r) => r.location.split(", ").slice(0, 2)))).sort();
const allCuisines = Array.from(new Set(restaurantesData.flatMap((r) => r.cuisine))).sort();

export default function RestaurantesPage() {
  const [statusFilter, setStatusFilter] = useState<RestaurantStatus | "all">("all");
  const [locationFilter, setLocationFilter] = useState<string>("all");
  const [cuisineFilter, setCuisineFilter] = useState<string>("all");
  const [priceFilter, setPriceFilter] = useState<number | "all">("all");
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);

  const openLightbox = useCallback((dishes: Dish[], index: number, restaurantName: string) => {
    setLightbox({ dishes, index, restaurantName });
  }, []);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  const navLightbox = useCallback((dir: 1 | -1) => {
    setLightbox((prev) => prev ? { ...prev, index: prev.index + dir } : null);
  }, []);

  const list = useMemo(() => {
    return restaurantesData.filter((r) => {
      if (statusFilter !== "all" && r.status !== statusFilter) return false;
      if (locationFilter !== "all" && !r.location.includes(locationFilter)) return false;
      if (cuisineFilter !== "all" && !r.cuisine.includes(cuisineFilter)) return false;
      if (priceFilter !== "all" && r.priceRange !== priceFilter) return false;
      return true;
    });
  }, [statusFilter, locationFilter, cuisineFilter, priceFilter]);

  const visited = restaurantesData.filter((r) => r.status === "visited");
  const want = restaurantesData.filter((r) => r.status === "want");

  const hasActiveFilters =
    statusFilter !== "all" || locationFilter !== "all" || cuisineFilter !== "all" || priceFilter !== "all";

  function clearFilters() {
    setStatusFilter("all");
    setLocationFilter("all");
    setCuisineFilter("all");
    setPriceFilter("all");
  }

  const [picked, setPicked] = useState<typeof restaurantesData[number] | null>(null);

  function pickRandom() {
    const pool = restaurantesData.filter((r) => r.status === "want");
    if (pool.length === 0) return;
    let next: typeof pool[number];
    do {
      next = pool[Math.floor(Math.random() * pool.length)];
    } while (pool.length > 1 && next.slug === picked?.slug);
    setPicked(next);
  }

  return (
    <main className="min-h-screen bg-stone-50 pt-20 pb-24 px-6">
      {lightbox && (
        <Lightbox state={lightbox} onClose={closeLightbox} onNav={navLightbox} />
      )}
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <Link
            href="/hobbies"
            className="text-xs text-stone-400 hover:text-stone-700 transition-colors uppercase tracking-widest"
          >
            ← Hub
          </Link>
          <div className="mt-4 flex items-end gap-4">
            <span className="text-8xl font-serif text-rose-600 opacity-70 leading-none">皿</span>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-stone-900 tracking-tighter">
                Restaurantes
              </h1>
              <p className="text-stone-500 mt-1">Food Log</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {[
            { label: "Visitados", value: visited.length, color: "text-green-600" },
            { label: "Quero ir", value: want.length, color: "text-rose-600" },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-2xl border border-stone-200 p-5">
              <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
              <p className="text-xs text-stone-400 mt-1 tracking-wider uppercase">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Sorteio */}
        <div className="bg-white border border-stone-200 rounded-2xl p-5 mb-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs text-stone-400 uppercase tracking-widest mb-0.5">Não sabe onde ir?</p>
              <p className="text-sm text-stone-700 font-medium">Sortear um restaurante da lista</p>
            </div>
            <button
              onClick={pickRandom}
              className="shrink-0 px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-sm font-medium rounded-xl transition-colors"
            >
              🎲 Sortear
            </button>
          </div>

          {picked && (
            <div className="mt-4 pt-4 border-t border-stone-100 flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="font-bold text-stone-900 text-lg">{picked.name}</p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  <span className="text-xs bg-stone-100 text-stone-600 px-2.5 py-0.5 rounded-full border border-stone-200">
                    📍 {picked.location}
                  </span>
                  {picked.cuisine.map((c) => (
                    <span key={c} className="text-xs bg-rose-50 text-rose-700 px-2.5 py-0.5 rounded-full border border-rose-100">
                      🍽 {c}
                    </span>
                  ))}
                  {picked.priceRange !== undefined && (
                    <span className="text-xs bg-amber-50 text-amber-700 px-2.5 py-0.5 rounded-full border border-amber-100 font-medium">
                      {PRICE_LABEL[picked.priceRange]}
                    </span>
                  )}
                </div>
                {picked.highlight && (
                  <p className="text-sm text-stone-500 mt-2">{picked.highlight}</p>
                )}
              </div>
              <button
                onClick={() => setPicked(null)}
                className="text-xs text-stone-400 hover:text-stone-600 transition-colors"
                aria-label="Fechar"
              >
                ×
              </button>
            </div>
          )}
        </div>

        {/* Filters */}
        <div className="bg-white border border-stone-200 rounded-2xl p-5 mb-8 flex flex-col gap-4">
          {/* Status */}
          <div>
            <p className="text-xs text-stone-400 uppercase tracking-widest mb-2">Status</p>
            <div className="flex flex-wrap gap-2">
              {(["all", "visited", "want"] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setStatusFilter(f)}
                  className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${
                    statusFilter === f
                      ? "bg-rose-600 text-white border-rose-600"
                      : "bg-white text-stone-500 border-stone-200 hover:border-rose-300"
                  }`}
                >
                  {f === "all" ? "Todos" : statusLabel[f]}
                </button>
              ))}
            </div>
          </div>

          {/* Price */}
          <div>
            <p className="text-xs text-stone-400 uppercase tracking-widest mb-2">Faixa de preço</p>
            <div className="flex flex-wrap gap-2">
              {(["all", 1, 2, 3, 4] as const).map((p) => (
                <button
                  key={p}
                  onClick={() => setPriceFilter(p)}
                  className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${
                    priceFilter === p
                      ? "bg-amber-500 text-white border-amber-500"
                      : "bg-white text-stone-500 border-stone-200 hover:border-amber-300"
                  }`}
                >
                  {p === "all" ? "Qualquer" : PRICE_LABEL[p]}
                </button>
              ))}
            </div>
          </div>

          {/* Cuisine */}
          <div>
            <p className="text-xs text-stone-400 uppercase tracking-widest mb-2">Cozinha</p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setCuisineFilter("all")}
                className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${
                  cuisineFilter === "all"
                    ? "bg-rose-100 text-rose-700 border-rose-300"
                    : "bg-white text-stone-500 border-stone-200 hover:border-rose-200"
                }`}
              >
                Todas
              </button>
              {allCuisines.map((c) => (
                <button
                  key={c}
                  onClick={() => setCuisineFilter(cuisineFilter === c ? "all" : c)}
                  className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${
                    cuisineFilter === c
                      ? "bg-rose-100 text-rose-700 border-rose-300"
                      : "bg-white text-stone-500 border-stone-200 hover:border-rose-200"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Location */}
          <div>
            <p className="text-xs text-stone-400 uppercase tracking-widest mb-2">Bairro / Cidade</p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setLocationFilter("all")}
                className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${
                  locationFilter === "all"
                    ? "bg-stone-200 text-stone-700 border-stone-300"
                    : "bg-white text-stone-500 border-stone-200 hover:border-stone-400"
                }`}
              >
                Todos
              </button>
              {allLocations.map((l) => (
                <button
                  key={l}
                  onClick={() => setLocationFilter(locationFilter === l ? "all" : l)}
                  className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${
                    locationFilter === l
                      ? "bg-stone-200 text-stone-700 border-stone-300"
                      : "bg-white text-stone-500 border-stone-200 hover:border-stone-400"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          {/* Clear */}
          {hasActiveFilters && (
            <div className="pt-1 border-t border-stone-100 flex items-center justify-between">
              <span className="text-xs text-stone-400">{list.length} resultado{list.length !== 1 ? "s" : ""}</span>
              <button
                onClick={clearFilters}
                className="text-xs text-rose-500 hover:text-rose-700 transition-colors"
              >
                Limpar filtros ×
              </button>
            </div>
          )}
        </div>

        {/* List */}
        {list.length === 0 ? (
          <p className="text-stone-400 text-sm text-center py-16">Nenhum restaurante encontrado.</p>
        ) : (
          <div className="flex flex-col gap-6">
            {list.map((r) => (
              <div
                key={r.slug}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden"
              >
                <div className="flex">
                  {/* Left: info */}
                  <div className="flex-1 min-w-0 p-6">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                      <div>
                        <h2 className="font-bold text-stone-900 text-xl">{r.name}</h2>
                      </div>
                      <div className="flex flex-col items-end gap-1.5">
                        <span
                          className={`text-xs px-2.5 py-0.5 rounded-full border font-medium ${statusStyle[r.status]}`}
                        >
                          {statusLabel[r.status]}
                        </span>
                        {r.rating !== undefined && r.rating > 0 && (
                          <span className="text-xs text-amber-500 font-medium tracking-wider">
                            {Array.from({ length: r.rating }, () => STAR).join("")}
                            <span className="text-stone-200">
                              {Array.from({ length: 5 - r.rating }, () => STAR).join("")}
                            </span>
                          </span>
                        )}
                      </div>
                    </div>
                    {r.highlight && (
                      <p className="text-sm text-stone-600 mt-2">{r.highlight}</p>
                    )}
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      <span className="text-xs bg-stone-100 text-stone-600 px-2.5 py-0.5 rounded-full border border-stone-200">
                        📍 {r.location}
                      </span>
                      {r.cuisine.map((c) => (
                        <span key={c} className="text-xs bg-rose-50 text-rose-700 px-2.5 py-0.5 rounded-full border border-rose-100">
                          🍽 {c}
                        </span>
                      ))}
                      {r.priceRange !== undefined && (
                        <span className="text-xs bg-amber-50 text-amber-700 px-2.5 py-0.5 rounded-full border border-amber-100 font-medium">
                          {PRICE_LABEL[r.priceRange]}
                        </span>
                      )}
                    </div>
                    {r.visitedDate && (
                      <p className="text-xs text-stone-400 mt-2">
                        Visitado em{" "}
                        {new Date(r.visitedDate).toLocaleDateString("pt-BR", {
                          month: "long",
                          year: "numeric",
                        })}
                      </p>
                    )}
                    {r.dishes && r.dishes.length > 0 && (
                      <p className="text-xs text-stone-400 mt-3 uppercase tracking-widest">
                        {r.dishes.length} foto{r.dishes.length !== 1 ? "s" : ""}
                      </p>
                    )}
                  </div>

                  {/* Right: dishes photo strip */}
                  {r.dishes && r.dishes.length > 0 && (
                    <div className="flex gap-1.5 p-3 pl-0 items-stretch">
                      {r.dishes.slice(0, 3).map((dish, i) => (
                        <button
                          key={i}
                          className="group relative w-24 sm:w-28 shrink-0 text-left"
                          onClick={() => openLightbox(r.dishes!, i, r.name)}
                          aria-label={`Ver foto: ${dish.name}`}
                        >
                          <div className="relative w-full h-full min-h-[96px] rounded-xl overflow-hidden bg-stone-100">
                            {dish.photo ? (
                              <Image
                                src={dish.photo}
                                alt={dish.name}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                unoptimized
                              />
                            ) : (
                              <div className="flex items-center justify-center h-full">
                                <span className="text-3xl font-serif text-stone-300">皿</span>
                              </div>
                            )}
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-1.5 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                              <p className="text-[0.6rem] text-white leading-tight line-clamp-2">{dish.name}</p>
                            </div>
                          </div>
                        </button>
                      ))}
                      {r.dishes.length > 3 && (
                        <button
                          className="w-12 shrink-0 flex items-center justify-center hover:text-stone-700 transition-colors"
                          onClick={() => openLightbox(r.dishes!, 3, r.name)}
                          aria-label={`Ver mais ${r.dishes.length - 3} fotos`}
                        >
                          <span className="text-xs text-stone-400 font-medium">+{r.dishes.length - 3}</span>
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
