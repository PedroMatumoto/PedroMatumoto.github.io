"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import type { BacklogCategory, BacklogItemStatus } from "@/data/hobbies";

type BacklogCategoryViewProps = {
  title: string;
  category: BacklogCategory;
  accent: string;
};

function resolveBacklogCover(rawTitle: string, cover: string | undefined, isMangaCategory: boolean) {
  if (cover && cover.trim().length > 0) return cover;
  if (!isMangaCategory) return undefined;
  const normalizedTitle = rawTitle.replace(/\s*\(.*?\)\s*/g, "").trim();
  return `/images/mangas/${encodeURIComponent(normalizedTitle)}.jpg`;
}

const STATUS_OPTIONS: { value: BacklogItemStatus | "all"; label: string }[] = [
  { value: "all", label: "Todos" },
  { value: "consumed", label: "Concluídos" },
  { value: "watching", label: "Watching" },
  { value: "planned", label: "Planned" },
  { value: "backlog", label: "Backlog" },
  { value: "dropped", label: "Dropped" },
];

export default function BacklogCategoryView({ title, category, accent }: BacklogCategoryViewProps) {
  const [search, setSearch] = useState("");
  const [activeStatus, setActiveStatus] = useState<BacklogItemStatus | "all">("all");
  const [activeGenre, setActiveGenre] = useState<string | null>(null);

  const isMangaCategory = category.label.toLowerCase().includes("mang");

  const allGenres = useMemo(() => {
    const set = new Set<string>();
    for (const item of category.items) {
      for (const g of item.genres ?? []) set.add(g);
    }
    return Array.from(set).sort();
  }, [category.items]);

  const filteredItems = useMemo(() => {
    return category.items.filter((item) => {
      const matchesSearch = search.trim() === "" || item.title.toLowerCase().includes(search.toLowerCase());
      const matchesStatus =
        activeStatus === "all" ||
        item.status === activeStatus ||
        (activeStatus === "watching" && item.status === "reading");
      const matchesGenre = activeGenre === null || (item.genres ?? []).includes(activeGenre);
      return matchesSearch && matchesStatus && matchesGenre;
    });
  }, [category.items, search, activeStatus, activeGenre]);

  const consumed = filteredItems.filter((item) => item.status === "consumed");
  const watching = filteredItems.filter((item) => item.status === "watching" || item.status === "reading");
  const planned = filteredItems.filter((item) => item.status === "planned");
  const dropped = filteredItems.filter((item) => item.status === "dropped");
  const backlog = filteredItems.filter((item) => item.status === "backlog");

  const rated = category.items.filter((item) => item.status === "consumed" && typeof item.rating === "number");
  const averageRating = rated.length > 0 ? (rated.reduce((sum, item) => sum + (item.rating ?? 0), 0) / rated.length).toFixed(1) : "-";

  const isFiltered = search.trim() !== "" || activeStatus !== "all" || activeGenre !== null;

  return (
    <main className="min-h-screen bg-stone-50 pt-20 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10">
          <Link href="/hobbies/backlog" className="text-xs text-stone-400 hover:text-stone-700 transition-colors uppercase tracking-widest">
            ← Backlog
          </Link>
          <div className="mt-4 flex items-end gap-4">
            <span className={`text-8xl font-serif opacity-80 leading-none ${accent}`}>{category.kanji}</span>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-stone-900 tracking-tighter">{title}</h1>
              <p className="text-stone-500 mt-1">{category.description}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          <div className="bg-white rounded-2xl border border-stone-200 p-3.5">
            <p className="text-xl font-bold text-stone-900">{category.items.length}</p>
            <p className="text-xs text-stone-400 mt-1 uppercase tracking-wider">Total</p>
          </div>
          <div className="bg-white rounded-2xl border border-stone-200 p-3.5">
            <p className="text-xl font-bold text-green-700">{category.items.filter((i) => i.status === "consumed").length}</p>
            <p className="text-xs text-stone-400 mt-1 uppercase tracking-wider">Já vi/li/joguei</p>
          </div>
          <div className="bg-white rounded-2xl border border-stone-200 p-3.5">
            <p className="text-xl font-bold text-sky-700">{category.items.filter((i) => i.status === "watching" || i.status === "reading").length}</p>
            <p className="text-xs text-stone-400 mt-1 uppercase tracking-wider">Watching</p>
          </div>
          <div className="bg-white rounded-2xl border border-stone-200 p-3.5">
            <p className="text-xl font-bold text-stone-900">{averageRating}</p>
            <p className="text-xs text-stone-400 mt-1 uppercase tracking-wider">Nota média</p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl border border-stone-200 p-4 mb-8 space-y-4">
          <input
            type="search"
            placeholder="Buscar por título…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full text-sm bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-300"
          />

          <div className="flex flex-wrap gap-2">
            {STATUS_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setActiveStatus(opt.value)}
                className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                  activeStatus === opt.value
                    ? "bg-stone-800 text-white border-stone-800"
                    : "bg-stone-50 text-stone-600 border-stone-200 hover:border-stone-400"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {allGenres.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {allGenres.map((genre) => (
                <button
                  key={genre}
                  onClick={() => setActiveGenre(activeGenre === genre ? null : genre)}
                  className={`text-[0.65rem] uppercase tracking-[0.14em] px-3 py-1 rounded-full border transition-colors ${
                    activeGenre === genre
                      ? "bg-stone-700 text-white border-stone-700"
                      : "bg-stone-50 text-stone-500 border-stone-200 hover:border-stone-400"
                  }`}
                >
                  {genre}
                </button>
              ))}
            </div>
          )}

          {isFiltered && (
            <button
              onClick={() => { setSearch(""); setActiveStatus("all"); setActiveGenre(null); }}
              className="text-xs text-stone-400 hover:text-stone-700 transition-colors"
            >
              Limpar filtros · {filteredItems.length} resultado{filteredItems.length !== 1 ? "s" : ""}
            </button>
          )}
        </div>

        <BacklogSection title="Concluídos" items={consumed} tone="green" isMangaCategory={isMangaCategory} />
        <BacklogSection title="Watching" items={watching} tone="sky" isMangaCategory={isMangaCategory} />
        <BacklogSection title="Planned" items={planned} tone="amber" isMangaCategory={isMangaCategory} />
        <BacklogSection title="Dropped" items={dropped} tone="stone" isMangaCategory={isMangaCategory} />
        <BacklogSection title="Backlog" items={backlog} tone="violet" muted isMangaCategory={isMangaCategory} />

        {isFiltered && filteredItems.length === 0 && (
          <p className="text-center text-stone-400 py-16">Nenhum item encontrado com esses filtros.</p>
        )}
      </div>
    </main>
  );
}

function BacklogSection({
  title,
  items,
  tone,
  isMangaCategory,
  muted,
}: {
  title: string;
  items: BacklogCategory["items"];
  tone: "green" | "sky" | "amber" | "stone" | "violet";
  isMangaCategory: boolean;
  muted?: boolean;
}) {
  if (items.length === 0) return null;

  const toneMap = {
    green: { line: "bg-green-500", badge: "bg-green-100 text-green-700 border-green-200" },
    sky: { line: "bg-sky-500", badge: "bg-sky-100 text-sky-700 border-sky-200" },
    amber: { line: "bg-amber-500", badge: "bg-amber-100 text-amber-700 border-amber-200" },
    stone: { line: "bg-stone-400", badge: "bg-stone-100 text-stone-700 border-stone-200" },
    violet: { line: "bg-violet-500", badge: "bg-violet-100 text-violet-700 border-violet-200" },
  } as const;

  return (
    <section className="mb-10">
      <h2 className="text-base font-semibold text-stone-900 mb-3.5 flex items-center gap-2">
        <span className={`w-6 h-px inline-block ${muted ? "bg-stone-300" : toneMap[tone].line}`} />
        {title}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {items.map((item) => {
          const coverSrc = resolveBacklogCover(item.title, item.cover, isMangaCategory);
          return (
            <article
              key={`${item.title}-${item.year}`}
              className={`rounded-2xl overflow-hidden border bg-white ${
                muted ? "border-stone-200 opacity-90" : "border-stone-200"
              }`}
            >
              <div className="relative aspect-[3/4] bg-stone-100">
                {coverSrc ? (
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${coverSrc})` }}
                    aria-label={`Capa de ${item.title}`}
                    role="img"
                  />
                ) : (
                  <div className="absolute inset-0 grid place-items-center text-stone-300 text-7xl font-serif">好</div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-2.5">
                  <h3 className="text-stone-50 font-semibold text-base leading-tight">{item.title}</h3>
                  <p className="text-stone-200/85 text-xs">{item.creator ?? ""}{item.year ? ` • ${item.year}` : ""}</p>
                </div>
              </div>

              <div className="p-3.5">
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className={`text-[0.58rem] tracking-[0.18em] uppercase px-2 py-1 rounded-full border ${toneMap[tone].badge}`}>
                    {item.status === "reading" ? "watching" : item.status}
                  </span>
                  {item.rating ? <span className="text-xs text-stone-500">{item.rating}/10</span> : null}
                </div>

                {item.genres && item.genres.length > 0 ? (
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {item.genres.slice(0, 3).map((genre) => (
                      <span key={genre} className="text-[0.6rem] uppercase tracking-[0.16em] px-2 py-1 rounded-full bg-stone-100 text-stone-600 border border-stone-200">
                        {genre}
                      </span>
                    ))}
                  </div>
                ) : null}

                {item.notes ? <p className="text-sm text-stone-600 leading-relaxed">{item.notes}</p> : null}
                {item.status === "dropped" ? (
                  <p className="mt-3 text-xs text-stone-500 uppercase tracking-[0.2em]">Dropado</p>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
