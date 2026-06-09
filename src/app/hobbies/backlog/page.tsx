import Link from "next/link";
import type { Metadata } from "next";
import { mediaBacklogData } from "@/data/hobbies";

export const metadata: Metadata = {
  title: "Backlog | Pedro Matumoto",
  description: "Backlog de animes, mangás, jogos e filmes.",
};

const styleMap = {
  animes: { accent: "text-sky-600", border: "border-sky-200", bg: "bg-sky-50", href: "/hobbies/backlog/animes" },
  mangas: { accent: "text-rose-600", border: "border-rose-200", bg: "bg-rose-50", href: "/hobbies/backlog/mangas" },
  jogos: { accent: "text-emerald-600", border: "border-emerald-200", bg: "bg-emerald-50", href: "/hobbies/backlog/jogos" },
  filmes: { accent: "text-amber-600", border: "border-amber-200", bg: "bg-amber-50", href: "/hobbies/backlog/filmes" },
} as const;

export default function BacklogIndexPage() {
  const sections = Object.entries(mediaBacklogData) as Array<keyof typeof mediaBacklogData extends infer K ? [K & keyof typeof mediaBacklogData, (typeof mediaBacklogData)[K & keyof typeof mediaBacklogData]] : never>;

  return (
    <main className="min-h-screen bg-stone-50 pt-20 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10">
          <Link href="/hobbies" className="text-xs text-stone-400 hover:text-stone-700 transition-colors uppercase tracking-widest">
            ← Hub
          </Link>
          <div className="mt-4 flex items-end gap-4">
            <span className="text-8xl font-serif text-stone-500 opacity-70 leading-none">録</span>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-stone-900 tracking-tighter">Backlog</h1>
              <p className="text-stone-500 mt-1">Tudo que eu já consumi e o que ainda está na fila.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {sections.map(([key, category]) => {
            const style = styleMap[key];
            const consumed = category.items.filter((item) => item.status === "consumed").length;
            const watching = category.items.filter((item) => item.status === "watching" || item.status === "reading").length;
            const planned = category.items.filter((item) => item.status === "planned").length;
            const dropped = category.items.filter((item) => item.status === "dropped").length;
            const pending = category.items.filter((item) => item.status === "backlog").length;

            return (
              <Link
                key={key}
                href={style.href}
                className={`rounded-2xl border ${style.border} ${style.bg} p-4 hover:shadow-md transition-shadow`}
              >
                <p className={`text-5xl font-serif leading-none ${style.accent}`}>{category.kanji}</p>
                <h2 className="mt-2.5 text-lg font-semibold text-stone-900">{category.label}</h2>
                <p className="text-xs text-stone-500 mt-1.5 leading-relaxed">{category.description}</p>
                <div className="mt-3.5 grid grid-cols-2 gap-1.5 text-[0.65rem] uppercase tracking-wider text-stone-500">
                  <span>{consumed} consumidos</span>
                  <span>{watching} watching</span>
                  <span>{planned} planned</span>
                  <span>{dropped} dropped</span>
                  <span className="col-span-2">{pending} backlog</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
