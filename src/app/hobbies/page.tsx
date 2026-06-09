import type { Metadata } from "next";
import Link from "next/link";
import { trilhasData, receitasData, viagensData, restaurantesData, personalFavoritesData } from "@/data/hobbies";
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
  const mediaLabels = {
    manga: "Mangá favorito",
    filme: "Filme favorito",
    anime: "Anime favorito",
    jogo: "Jogo favorito",
    album: "Álbum favorito",
  } as const;

  const mediaTheme = {
    manga: {
      frame: "border-rose-300/80",
      chip: "bg-rose-900 text-rose-50",
      wash: "from-rose-500/35 via-rose-400/10",
      text: "text-rose-950",
      hint: "text-rose-800/75",
    },
    filme: {
      frame: "border-amber-300/80",
      chip: "bg-amber-900 text-amber-50",
      wash: "from-amber-500/35 via-amber-400/10",
      text: "text-amber-950",
      hint: "text-amber-800/75",
    },
    anime: {
      frame: "border-sky-300/80",
      chip: "bg-sky-900 text-sky-50",
      wash: "from-sky-500/35 via-cyan-400/10",
      text: "text-sky-950",
      hint: "text-sky-800/75",
    },
    jogo: {
      frame: "border-emerald-300/80",
      chip: "bg-emerald-900 text-emerald-50",
      wash: "from-emerald-500/35 via-lime-400/10",
      text: "text-emerald-950",
      hint: "text-emerald-800/75",
    },
    album: {
      frame: "border-violet-300/80",
      chip: "bg-violet-900 text-violet-50",
      wash: "from-violet-500/35 via-fuchsia-400/10",
      text: "text-violet-950",
      hint: "text-violet-800/75",
    },
  } as const;

  const mediaKanji = {
    manga: "漫",
    filme: "映",
    anime: "ア",
    jogo: "遊",
    album: "音",
  } as const;

  const backlogRoutes = {
    manga: "/hobbies/backlog/mangas",
    filme: "/hobbies/backlog/filmes",
    anime: "/hobbies/backlog/animes",
    jogo: "/hobbies/backlog/jogos",
    album: null,
  } as const;

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

      {/* ── Favoritos Pessoais ─────────────────────────────── */}
      <section className="relative py-14 border-y border-stone-200 overflow-hidden bg-gradient-to-b from-stone-50 to-stone-100">
        <span
          className="pointer-events-none select-none absolute -left-6 -top-10 text-[9rem] md:text-[14rem] font-serif text-stone-200/70 leading-none"
          aria-hidden="true"
        >
          好
        </span>

        <div className="px-8 md:px-16 mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-stone-400 text-[0.6rem] tracking-[0.3em] uppercase mb-2">Pessoal</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-800 tracking-tight">
              Favoritos de Tela e Papel
            </h2>
          </div>
          <Link href="/hobbies/backlog" className="text-stone-500 text-xs tracking-widest uppercase hidden md:block hover:text-stone-800 transition-colors">
            Ver backlog →
          </Link>
        </div>

        <div className="relative w-full overflow-x-auto no-scrollbar px-4 md:px-8">
          <div className="flex gap-5 md:gap-6 min-w-max pb-2">
            {personalFavoritesData.map((item) => {
              const backlogRoute = backlogRoutes[item.type];
              const card = (
                <article
                  className={`group relative w-[76vw] max-w-[330px] sm:w-[44vw] md:w-[32vw] lg:w-[20vw] min-w-[260px] rounded-2xl overflow-hidden border ${mediaTheme[item.type].frame} shadow-[0_14px_32px_rgba(28,18,8,0.12)]`}
                >
                  <div className="relative aspect-[2/3]">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${item.cover})` }}
                      aria-label={`Capa de ${item.title}`}
                      role="img"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${mediaTheme[item.type].wash} to-transparent`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />

                    <div className="absolute inset-0 grid place-items-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/35 z-10">
                      <span className="font-serif text-[7rem] leading-none text-white/80 drop-shadow-sm">
                        {mediaKanji[item.type]}
                      </span>
                    </div>

                    <div className="absolute left-3 top-3 right-3 flex items-start justify-between gap-3 z-20">
                      <span className={`text-[0.56rem] tracking-[0.22em] uppercase px-2.5 py-1 rounded-full ${mediaTheme[item.type].chip}`}>
                        {mediaLabels[item.type]}
                      </span>
                      <span className="text-[0.55rem] tracking-[0.26em] uppercase text-stone-200/80">
                        {item.year ?? "Now"}
                      </span>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 z-20 p-4 md:p-5">
                      <h3 className="font-serif text-2xl leading-tight text-stone-50 mb-1">
                        {item.title}
                      </h3>
                      {item.subtitle ? (
                        <p className="text-sm text-stone-200/90 mb-2">{item.subtitle}</p>
                      ) : null}
                      <p className="text-xs text-stone-200/80 line-clamp-2 mb-3">
                        {item.reason ?? "Obra com impacto visual e emocional."}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {(item.genres ?? []).slice(0, 3).map((genre) => (
                          <span
                            key={genre}
                            className="text-[0.55rem] uppercase tracking-[0.12em] px-2 py-1 rounded-full bg-black/35 text-stone-100 border border-white/20"
                          >
                            {genre}
                          </span>
                        ))}
                      </div>
                      {backlogRoute ? (
                        <p className="text-[0.6rem] uppercase tracking-[0.22em] text-stone-100/80">Abrir backlog →</p>
                      ) : null}
                    </div>
                  </div>
                </article>
              );

              return backlogRoute ? (
                <Link key={item.type} href={backlogRoute} className="block">
                  {card}
                </Link>
              ) : (
                <div key={item.type}>{card}</div>
              );
            })}
          </div>
        </div>
      </section>

      <HobbiesHub hobbies={hobbies} />
    </main>
  );
}
