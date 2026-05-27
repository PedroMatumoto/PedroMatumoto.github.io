import type { Metadata } from "next";
import { trilhasData, receitasData, viagensData, restaurantesData } from "@/data/hobbies";
import HobbiesHub from "./HobbiesHub";

export const metadata: Metadata = {
  title: "趣味 Hub | Pedro Matumoto",
  description: "Hobbies, interesses e estilo de vida.",
};

// computed stats
const trailsDone = trilhasData.filter((t) => t.done).length;
const visitedTrips = viagensData.filter((t) => t.status === "visited").length;
const visitedRestaurants = restaurantesData.filter((r) => r.status === "visited").length;
const wantRestaurants = restaurantesData.filter((r) => r.status === "want").length;

const hobbies = [
  {
    slug: "boulder",
    kanji: "岩",
    index: "01",
    label: "Boulder",
    sublabel: "Indoor Climbing",
    description: "Projetos de bouldering, sessões recentes e progressão de grade.",
    bg: "bg-amber-50",
    hoverBg: "hover:bg-amber-100/50",
    kanjiColor: "text-amber-700",
    accentBar: "bg-amber-700",
    stat: "V2 max",
  },
  {
    slug: "restaurantes",
    kanji: "皿",
    index: "02",
    label: "Restaurantes",
    sublabel: "Food Log",
    description: "Restaurantes visitados e lista de lugares pra conhecer, com fotos dos pratos.",
    bg: "bg-rose-50",
    hoverBg: "hover:bg-rose-100/50",
    kanjiColor: "text-rose-700",
    accentBar: "bg-rose-700",
    stat: visitedRestaurants > 0
      ? `${visitedRestaurants} visitados · ${wantRestaurants} quero ir`
      : `${wantRestaurants} na lista`,
  },
  {
    slug: "trilhas",
    kanji: "山",
    index: "03",
    label: "Trilhas",
    sublabel: "Outdoor Adventure",
    description: "Trilhas com distância, altitude e dificuldade — feitas e no radar.",
    bg: "bg-stone-50",
    hoverBg: "hover:bg-stone-100/50",
    kanjiColor: "text-green-800",
    accentBar: "bg-green-800",
    stat: `${trailsDone} / ${trilhasData.length} feitas`,
  },
  {
    slug: "receitas",
    kanji: "食",
    index: "04",
    label: "Receitas",
    sublabel: "Cozinha",
    description: "Galeria de receitas favoritas com ingredientes e modo de preparo.",
    bg: "bg-yellow-50",
    hoverBg: "hover:bg-yellow-100/50",
    kanjiColor: "text-amber-800",
    accentBar: "bg-amber-800",
    stat: `${receitasData.length} receitas`,
  },
  {
    slug: "viagens",
    kanji: "旅",
    index: "05",
    label: "Viagens",
    sublabel: "Travel Log",
    description: "Lugares visitados, destinos planejados e sonhos de viagem.",
    bg: "bg-slate-50",
    hoverBg: "hover:bg-slate-100/50",
    kanjiColor: "text-indigo-800",
    accentBar: "bg-indigo-800",
    stat: `${visitedTrips} países visitados`,
  },
  {
    slug: "jdm",
    kanji: "車",
    index: "06",
    label: "JDM",
    sublabel: "Japanese Domestic Market",
    description: "Carros favoritos, wishlist de aquisição e eventos de encontro.",
    bg: "bg-zinc-50",
    hoverBg: "hover:bg-zinc-100/50",
    kanjiColor: "text-rose-900",
    accentBar: "bg-rose-900",
    stat: "Eventos",
  },
] as const;

export default function HobbiesPage() {
  return (
    <main className="min-h-screen bg-stone-100 flex flex-col">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative flex flex-col justify-center min-h-[58vh] px-8 md:px-16 overflow-hidden bg-gradient-to-br from-stone-100 via-stone-50 to-amber-50/50">
        {/* background watermark kanji */}
        <span
          className="pointer-events-none select-none absolute -right-10 top-1/2 -translate-y-1/2 font-serif font-bold leading-none text-stone-200/80"
          style={{ fontSize: "clamp(12rem, 35vw, 28rem)" }}
          aria-hidden="true"
        >
          趣
        </span>

        <div className="relative z-10 max-w-2xl pt-24 pb-14">
          <p className="text-stone-400 text-[0.65rem] tracking-[0.35em] uppercase mb-8">
            Personal Hub
          </p>
          <h1 className="font-serif text-8xl md:text-[9rem] font-bold text-stone-800 tracking-tight leading-none mb-6">
            趣味
          </h1>
          <p className="text-stone-500 text-sm leading-relaxed max-w-xs">
            Um espaço para tudo que não cabe no currículo — carros, pedras e trilhas.
          </p>

          {/* scroll hint */}
          <div className="mt-10 flex items-center gap-3 text-stone-400">
            <span className="text-[0.6rem] tracking-[0.3em] uppercase">Deslize</span>
            <span className="flex gap-1">
              <span className="w-1 h-1 rounded-full bg-stone-300 animate-bounce [animation-delay:0ms]" />
              <span className="w-1 h-1 rounded-full bg-stone-300 animate-bounce [animation-delay:120ms]" />
              <span className="w-1 h-1 rounded-full bg-stone-300 animate-bounce [animation-delay:240ms]" />
            </span>
            <span className="text-stone-300 text-sm">→</span>
          </div>
        </div>
      </section>

      <HobbiesHub hobbies={hobbies} />
    </main>
  );
}
