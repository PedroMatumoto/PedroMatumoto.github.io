"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Trip, TripPhoto } from "@/data/hobbies";
import TripInterestMap from "./TripInterestMap";

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

const expenseCategoryLabel: Record<
  NonNullable<Trip["expenses"]>[number]["category"],
  string
> = {
  stay: "Hospedagem",
  food: "Comida",
  transport: "Transporte",
  activities: "Passeios",
  shopping: "Compras",
  other: "Outros",
};

const wishlistPriorityLabel: Record<
  NonNullable<Trip["shoppingWishlist"]>[number]["priority"],
  string
> = {
  high: "Alta",
  medium: "Media",
  low: "Baixa",
};

const wishlistStatusLabel: Record<
  NonNullable<Trip["shoppingWishlist"]>[number]["status"],
  string
> = {
  wish: "Desejo",
  bought: "Comprado",
};

function formatMoney(amount: number, currency: string) {
  try {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency,
      maximumFractionDigits: 0,
    }).format(amount);
  } catch {
    return `${amount.toFixed(0)} ${currency}`;
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
  const itineraryCount = (trip.itinerary ?? []).length;
  const pointCount = (trip.pointsOfInterest ?? []).length;
  const expenseCount = (trip.expenses ?? []).length;
  const wishlistCount = (trip.shoppingWishlist ?? []).length;

  const totalByCurrency = (trip.expenses ?? []).reduce<Record<string, number>>((acc, exp) => {
    acc[exp.currency] = (acc[exp.currency] ?? 0) + exp.amount;
    return acc;
  }, {});

  const totalWishlistByCurrency = (trip.shoppingWishlist ?? []).reduce<Record<string, number>>(
    (acc, item) => {
      if (!item.estimatedPrice || !item.currency) return acc;
      acc[item.currency] = (acc[item.currency] ?? 0) + item.estimatedPrice;
      return acc;
    },
    {}
  );

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
              {trip.status === "visited" ? "o que eu vi" : "roteiro e planejamento"}
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
            {itineraryCount > 0 && (
              <p className="text-xs text-stone-400">{itineraryCount} dias de roteiro</p>
            )}
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-3 border-t border-stone-300 pt-4">
          <StatPill label="Fotos" value={photoCount} />
          <StatPill label="Roteiro" value={itineraryCount} />
          <StatPill label="Pontos" value={pointCount} />
          <StatPill label="Custos" value={expenseCount} />
          <StatPill label="Wishlist" value={wishlistCount} />
        </div>
      </div>

      {(trip.pointsOfInterest ?? []).length > 0 || (trip.itinerary ?? []).length > 0 ? (
        <section className="px-6 md:px-10 pb-14">
          <div className="w-full">
            <h2 className="text-xs uppercase tracking-[0.3em] text-stone-400 mb-3">Mapa e roteiro</h2>

            <div className="grid gap-5 lg:grid-cols-[1.2fr_1fr] items-start">
              {(trip.pointsOfInterest ?? []).length > 0 && (
                <div className="xl:sticky xl:top-24">
                  <TripInterestMap points={trip.pointsOfInterest ?? []} />
                </div>
              )}

              {(trip.itinerary ?? []).length > 0 && (
                <div className="grid gap-3 md:grid-cols-2">
                  {trip.itinerary?.map((stop, idx) => (
                    <article
                      key={`${stop.day}-${stop.place}-${idx}`}
                      className="rounded-2xl border border-stone-200 bg-white p-4"
                    >
                      <p className="text-[11px] uppercase tracking-[0.25em] text-stone-400">
                        {stop.day} · {stop.place}
                      </p>
                      <h3 className="mt-1 text-lg font-semibold text-stone-900">{stop.title}</h3>
                      <p className="mt-2 text-sm text-stone-700 leading-relaxed">{stop.planPt}</p>
                      {stop.planLocal && (
                        <div className="mt-3 grid gap-2 md:grid-cols-1">
                          <p className="rounded-lg bg-stone-50 px-3 py-2 text-xs text-stone-600">
                            <span className="font-semibold text-stone-500">Local:</span> {stop.planLocal}
                          </p>
                        </div>
                      )}
                    </article>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      ) : null}

      {(trip.expenses ?? []).length > 0 && (
        <section className="px-6 md:px-10 pb-14">
          <div className="max-w-5xl">
            <h2 className="text-xs uppercase tracking-[0.3em] text-stone-400 mb-3">Custos</h2>
            <div className="grid gap-3 md:grid-cols-2">
              {trip.expenses?.map((expense, idx) => (
                <article
                  key={`${expense.label}-${idx}`}
                  className="rounded-2xl border border-stone-200 bg-white p-4"
                >
                  <p className="text-[11px] uppercase tracking-[0.22em] text-stone-400">
                    {expenseCategoryLabel[expense.category]}
                  </p>
                  <div className="mt-1 flex items-end justify-between gap-3">
                    <h3 className="text-sm font-medium text-stone-800">{expense.label}</h3>
                    <p className="text-base font-semibold text-stone-900">
                      {formatMoney(expense.amount, expense.currency)}
                    </p>
                  </div>
                  {expense.notes && <p className="mt-2 text-xs text-stone-500">{expense.notes}</p>}
                </article>
              ))}
            </div>
            <div className="mt-4 rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-700">
              <span className="font-medium text-stone-900">Total estimado:</span>{" "}
              {Object.entries(totalByCurrency)
                .map(([currency, amount]) => formatMoney(amount, currency))
                .join(" + ")}
            </div>
          </div>
        </section>
      )}

      {(trip.shoppingWishlist ?? []).length > 0 && (
        <section className="px-6 md:px-10 pb-14">
          <div className="max-w-5xl">
            <h2 className="text-xs uppercase tracking-[0.3em] text-stone-400 mb-3">Wishlist de compras</h2>
            <div className="grid gap-3 md:grid-cols-2">
              {trip.shoppingWishlist?.map((item, idx) => (
                <article
                  key={`${item.item}-${idx}`}
                  className="rounded-2xl border border-stone-200 bg-white p-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-sm font-semibold text-stone-900">{item.item}</h3>
                      {item.store && <p className="text-xs text-stone-500 mt-1">Loja: {item.store}</p>}
                    </div>
                    <div className="flex items-center gap-2">
                      {item.priority && (
                        <span className="rounded-full border border-stone-300 px-2 py-0.5 text-[11px] text-stone-600">
                          {wishlistPriorityLabel[item.priority]}
                        </span>
                      )}
                      {item.status && (
                        <span className="rounded-full border border-stone-300 px-2 py-0.5 text-[11px] text-stone-600">
                          {wishlistStatusLabel[item.status]}
                        </span>
                      )}
                    </div>
                  </div>
                  {item.note && <p className="mt-2 text-xs text-stone-500">{item.note}</p>}
                  {item.estimatedPrice && item.currency && (
                    <p className="mt-3 text-sm font-medium text-stone-800">
                      Estimado: {formatMoney(item.estimatedPrice, item.currency)}
                    </p>
                  )}
                </article>
              ))}
            </div>
            {Object.keys(totalWishlistByCurrency).length > 0 && (
              <div className="mt-4 rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-700">
                <span className="font-medium text-stone-900">Subtotal wishlist:</span>{" "}
                {Object.entries(totalWishlistByCurrency)
                  .map(([currency, amount]) => formatMoney(amount, currency))
                  .join(" + ")}
              </div>
            )}
          </div>
        </section>
      )}

      {photoCount > 0 && (
        <>
          <div className="px-6 md:px-10 pb-6">
            <div className="mt-2 flex items-center justify-between flex-wrap gap-3 border-t border-stone-300 pt-4">
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
        </>
      )}

      {photoCount === 0 &&
        itineraryCount === 0 &&
        pointCount === 0 &&
        expenseCount === 0 &&
        wishlistCount === 0 && (
          <div className="px-6 md:px-10 pb-16">
            <div className="rounded-2xl border border-stone-200 bg-white p-6 text-sm text-stone-500">
              Ainda sem conteudo detalhado para este destino.
            </div>
          </div>
        )}

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

function StatPill({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-xl border border-stone-200 bg-white px-3 py-2">
      <p className="text-[11px] uppercase tracking-[0.2em] text-stone-400">{label}</p>
      <p className="text-xl font-semibold text-stone-900 leading-none mt-1">{value}</p>
    </div>
  );
}
