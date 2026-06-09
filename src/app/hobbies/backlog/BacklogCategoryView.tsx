import Link from "next/link";
import type { BacklogCategory } from "@/data/hobbies";

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

export default function BacklogCategoryView({ title, category, accent }: BacklogCategoryViewProps) {
  const consumed = category.items.filter((item) => item.status === "consumed");
  const watching = category.items.filter((item) => item.status === "watching" || item.status === "reading");
  const planned = category.items.filter((item) => item.status === "planned");
  const dropped = category.items.filter((item) => item.status === "dropped");
  const backlog = category.items.filter((item) => item.status === "backlog");
  const rated = consumed.filter((item) => typeof item.rating === "number");
  const averageRating = rated.length > 0 ? (rated.reduce((sum, item) => sum + (item.rating ?? 0), 0) / rated.length).toFixed(1) : "-";
  const isMangaCategory = category.label.toLowerCase().includes("mang");

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
            <p className="text-xl font-bold text-green-700">{consumed.length}</p>
            <p className="text-xs text-stone-400 mt-1 uppercase tracking-wider">Já vi/li/joguei</p>
          </div>
          <div className="bg-white rounded-2xl border border-stone-200 p-3.5">
            <p className="text-xl font-bold text-sky-700">{watching.length}</p>
            <p className="text-xs text-stone-400 mt-1 uppercase tracking-wider">Watching</p>
          </div>
          <div className="bg-white rounded-2xl border border-stone-200 p-3.5">
            <p className="text-xl font-bold text-stone-900">
              {averageRating}
            </p>
            <p className="text-xs text-stone-400 mt-1 uppercase tracking-wider">Nota média</p>
          </div>
        </div>

        <BacklogSection title="Concluídos" items={consumed} tone="green" isMangaCategory={isMangaCategory} />
        <BacklogSection title="Watching" items={watching} tone="sky" isMangaCategory={isMangaCategory} />
        <BacklogSection title="Planned" items={planned} tone="amber" isMangaCategory={isMangaCategory} />
        <BacklogSection title="Dropped" items={dropped} tone="stone" isMangaCategory={isMangaCategory} />
        <BacklogSection title="Backlog" items={backlog} tone="violet" muted isMangaCategory={isMangaCategory} />
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
