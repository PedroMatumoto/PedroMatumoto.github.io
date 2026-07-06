import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { boulderData, colorGradeOrder, type BoulderGrade, type BoulderProject } from "@/data/hobbies";

export const metadata: Metadata = {
  title: "Boulder | Pedro Matumoto",
  description: "Projetos e sessões de bouldering indoor.",
};

// ─── Style maps ───────────────────────────────────────────────────────────────

const gradeColors: Record<string, string> = {
  "V0": "bg-green-100 text-green-700",
  "V1": "bg-green-200 text-green-800",
  "V2": "bg-yellow-100 text-yellow-700",
  "V3": "bg-amber-100 text-amber-700",
  "V4": "bg-orange-100 text-orange-700",
  "V5": "bg-red-100 text-red-700",
  "V6": "bg-red-200 text-red-800",
  "V7": "bg-purple-100 text-purple-700",
  "V8+": "bg-purple-200 text-purple-800",
  "Branco": "bg-white text-stone-600 border border-stone-300",
  "Rosa": "bg-pink-100 text-pink-700",
  "Azul": "bg-blue-100 text-blue-700",
  "Verde": "bg-green-100 text-green-700",
  "Vermelho": "bg-red-100 text-red-700",
  "Preto": "bg-stone-900 text-white",
};

const chartBarBg: Record<string, string> = {
  "V0": "#86efac", "V1": "#4ade80", "V2": "#fde047",
  "V3": "#fbbf24", "V4": "#fb923c", "V5": "#ef4444",
  "V6": "#dc2626", "V7": "#a855f7", "V8+": "#7c3aed",
  "Branco": "#e7e5e4", "Rosa": "#fbcfe8", "Azul": "#bfdbfe",
  "Verde": "#bbf7d0", "Vermelho": "#fecaca", "Preto": "#292524",
};

const statusConfig: Record<
  "projecting" | "sent" | "archived" | "abandoned",
  { label: string; badge: string; accent: string }
> = {
  projecting: { label: "Projecting", badge: "bg-amber-100 text-amber-700", accent: "bg-amber-400" },
  sent:       { label: "✓ Sent",     badge: "bg-green-100 text-green-700",  accent: "bg-green-400" },
  archived:   { label: "Desmontado", badge: "bg-slate-100 text-slate-600",  accent: "bg-slate-300" },
  abandoned:  { label: "Abandonado", badge: "bg-stone-100 text-stone-500",  accent: "bg-stone-300" },
};

const vGradeOrder: BoulderGrade[] = ["V0", "V1", "V2", "V3", "V4", "V5", "V6", "V7", "V8+"];

// ─── Helpers ─────────────────────────────────────────────────────────────────

/** Group grades and return sorted [grade, count] pairs (hardest first). */
function groupGrades(grades: BoulderGrade[], order: BoulderGrade[]): [BoulderGrade, number][] {
  const counts = new Map<BoulderGrade, number>();
  for (const g of grades) {
    if (order.includes(g)) counts.set(g, (counts.get(g) ?? 0) + 1);
  }
  return Array.from(counts.entries()).sort(([a], [b]) => order.indexOf(b) - order.indexOf(a));
}

/** Return the hardest grade from a list given an ordered scale. */
function getTopGrade(grades: BoulderGrade[], order: BoulderGrade[]): BoulderGrade | null {
  const filtered = grades.filter((g) => order.includes(g));
  if (!filtered.length) return null;
  return filtered.reduce((best, g) => order.indexOf(g) > order.indexOf(best) ? g : best);
}

function computeStats(data: typeof boulderData) {
  const allGrades = data.recentSessions.flatMap((s) => s.topSends);
  const vGrades = allGrades.filter((g) => vGradeOrder.includes(g));
  const colorGrades = allGrades.filter((g) => colorGradeOrder.includes(g));
  const maxV = vGrades.length > 0
    ? vGrades.reduce((a, b) => vGradeOrder.indexOf(a) >= vGradeOrder.indexOf(b) ? a : b)
    : null;
  const maxColor = colorGrades.length > 0
    ? colorGrades.reduce((a, b) => colorGradeOrder.indexOf(a) >= colorGradeOrder.indexOf(b) ? a : b)
    : null;
  return { maxV, maxColor, totalSends: allGrades.length };
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function ProjectCard({ p }: { p: BoulderProject }) {
  const cfg = statusConfig[p.status as keyof typeof statusConfig] ?? statusConfig.abandoned;
  return (
    <div className="bg-white rounded-xl border border-stone-200 flex overflow-hidden">
      <div className={`w-1 shrink-0 ${cfg.accent}`} />
      <div className="flex flex-1 gap-3 p-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <span className={`text-xs font-bold px-2 py-0.5 rounded-full shrink-0 ${gradeColors[p.grade] ?? "bg-stone-100 text-stone-600"}`}>
              {p.grade}
            </span>
            <p className="font-medium text-stone-900 text-sm truncate">{p.name}</p>
            <span className={`text-xs px-2 py-0.5 rounded-full shrink-0 ${cfg.badge}`}>{cfg.label}</span>
          </div>
          <p className="text-xs text-stone-400">{p.gym}</p>
          {p.notes && <p className="text-xs text-stone-500 mt-1.5 italic line-clamp-2">{p.notes}</p>}
          <p className="text-xs text-stone-400 mt-2">
            <span className="font-semibold text-stone-700">{p.attempts}</span>{" "}
            tentativa{p.attempts !== 1 ? "s" : ""}
            {p.sentDate && (
              <span className="ml-2 text-green-600">
                · {new Date(p.sentDate).toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" })}
              </span>
            )}
          </p>
        </div>
        {p.photos && p.photos.length > 0 && (
          <a href={p.photos[0]} target="_blank" rel="noopener noreferrer" className="shrink-0 self-start">
            <div className="relative w-16 h-24 rounded-lg overflow-hidden bg-stone-100">
              <Image src={p.photos[0]} alt={p.name} fill className="object-cover" sizes="64px" />
            </div>
          </a>
        )}
      </div>
    </div>
  );
}

function BarChart({
  sessions,
  order,
  title,
}: {
  sessions: typeof boulderData.recentSessions;
  order: BoulderGrade[];
  title: string;
}) {
  const sorted = [...sessions].reverse();
  return (
    <div className="bg-white rounded-2xl border border-stone-200 p-5">
      <p className="text-xs text-stone-400 uppercase tracking-wider mb-4">{title}</p>
      <div className="flex items-end gap-1 h-24">
        {sorted.map((s, i) => {
          const top = getTopGrade(s.topSends, order);
          if (!top) return <div key={i} className="flex-1" />;
          const idx = order.indexOf(top);
          const heightRem = 1 + (idx / Math.max(order.length - 1, 1)) * 5;
          return (
            <div key={i} className="flex-1 relative group">
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 bg-stone-900 text-white text-[10px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                {top} · {new Date(s.date).toLocaleDateString("pt-BR", { day: "2-digit", month: "short" })}
              </div>
              <div
                className="w-full rounded-t-sm"
                style={{ height: `${heightRem}rem`, backgroundColor: chartBarBg[top] ?? "#d6d3d1" }}
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-between mt-2">
        <span className="text-[10px] text-stone-400">
          {new Date(sorted[0].date).toLocaleDateString("pt-BR", { month: "short", year: "2-digit" })}
        </span>
        <span className="text-[10px] text-stone-400">
          {new Date(sorted[sorted.length - 1].date).toLocaleDateString("pt-BR", { month: "short", year: "2-digit" })}
        </span>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function BoulderPage() {
  const { projects, recentSessions } = boulderData;
  const { maxV, maxColor, totalSends } = computeStats(boulderData);
  const totalSessions = recentSessions.length;

  const projecting = projects.filter((p) => p.status === "projecting");
  const sent = projects.filter((p) => p.status === "sent");
  const archived = projects.filter((p) => p.status === "archived");

  const vSessions = recentSessions.filter((s) => s.topSends.some((g) => vGradeOrder.includes(g)));
  const colorSessions = recentSessions.filter((s) => s.topSends.some((g) => colorGradeOrder.includes(g)));

  return (
    <main className="min-h-screen bg-stone-50 pt-20 pb-24 px-6">
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
            <span className="text-8xl font-serif text-orange-500 opacity-80 leading-none">岩</span>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-stone-900 tracking-tighter">Boulder</h1>
              <p className="text-stone-500 mt-1">Indoor Climbing — Bouldering</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white rounded-2xl border border-stone-200 p-5">
            <p className="text-3xl font-bold text-orange-600">{maxV ?? "—"}</p>
            <p className="text-xs text-stone-400 mt-1 tracking-wider uppercase">V-grade máx.</p>
          </div>
          <div className="bg-white rounded-2xl border border-stone-200 p-5">
            <p className="text-3xl font-bold text-blue-600">{maxColor ?? "—"}</p>
            <p className="text-xs text-stone-400 mt-1 tracking-wider uppercase">Cor máx.</p>
          </div>
          <div className="bg-white rounded-2xl border border-stone-200 p-5">
            <p className="text-3xl font-bold text-stone-900">{totalSessions}</p>
            <p className="text-xs text-stone-400 mt-1 tracking-wider uppercase">Sessões</p>
          </div>
          <div className="bg-white rounded-2xl border border-stone-200 p-5">
            <p className="text-3xl font-bold text-stone-900">{totalSends}</p>
            <p className="text-xs text-stone-400 mt-1 tracking-wider uppercase">Total de sends</p>
          </div>
        </div>

        {/* Progression charts */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold text-stone-900 mb-4 flex items-center gap-2">
            <span className="w-6 h-px bg-orange-400 inline-block" />
            Progressão
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {vSessions.length > 0 && (
              <BarChart sessions={vSessions} order={vGradeOrder} title="V-grade por sessão" />
            )}
            {colorSessions.length > 0 && (
              <BarChart sessions={colorSessions} order={colorGradeOrder} title="Cor-grade por sessão" />
            )}
          </div>
        </section>

        {/* Projecting */}
        {projecting.length > 0 && (
          <section className="mb-12">
            <h2 className="text-lg font-semibold text-stone-900 mb-4 flex items-center gap-2">
              <span className="w-6 h-px bg-orange-400 inline-block" />
              Projetos
            </h2>
            <div className="flex flex-col gap-3">
              {projecting.map((p) => <ProjectCard key={p.name} p={p} />)}
            </div>
          </section>
        )}

        {/* Sent */}
        {sent.length > 0 && (
          <section className="mb-12">
            <h2 className="text-lg font-semibold text-stone-900 mb-4 flex items-center gap-2">
              <span className="w-6 h-px bg-green-500 inline-block" />
              Mandados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {sent.map((p) => <ProjectCard key={p.name} p={p} />)}
            </div>
          </section>
        )}

        {/* Archived */}
        {archived.length > 0 && (
          <section className="mb-12">
            <h2 className="text-lg font-semibold text-stone-900 mb-1 flex items-center gap-2">
              <span className="w-6 h-px bg-slate-400 inline-block" />
              Desmontados
            </h2>
            <p className="text-xs text-stone-400 mb-4">Projetos que foram desmontados sem conseguir mandar.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 opacity-60">
              {archived.map((p) => <ProjectCard key={p.name} p={p} />)}
            </div>
          </section>
        )}

        {/* Recent sessions */}
        <section>
          <h2 className="text-lg font-semibold text-stone-900 mb-4 flex items-center gap-2">
            <span className="w-6 h-px bg-orange-400 inline-block" />
            Sessões recentes
          </h2>
          <div className="flex flex-col gap-3">
            {recentSessions.map((s) => {
              const isColor = colorGradeOrder.some((g) => s.topSends.includes(g));
              const order = isColor ? colorGradeOrder : vGradeOrder;
              const groups = groupGrades(s.topSends, order);
              return (
                <div key={s.date} className="bg-white rounded-xl border border-stone-200 p-5">
                  <div className="flex items-start justify-between gap-2 mb-3 flex-wrap">
                    <div>
                      <p className="font-medium text-stone-900 text-sm">
                        {new Date(s.date).toLocaleDateString("pt-BR", { weekday: "short", day: "2-digit", month: "short", year: "numeric" })}
                      </p>
                      <p className="text-xs text-stone-400">{s.gym}</p>
                    </div>
                    <span className="text-xs text-stone-400 font-medium bg-stone-100 px-2 py-0.5 rounded-full shrink-0">
                      {s.topSends.length} sends
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {groups.map(([grade, count]) => (
                      <span key={grade} className={`text-xs font-semibold px-2 py-0.5 rounded-full ${gradeColors[grade] ?? "bg-stone-100 text-stone-600"}`}>
                        {grade}{count > 1 ? ` ×${count}` : ""}
                      </span>
                    ))}
                  </div>
                  {s.notes && <p className="text-xs text-stone-500 italic mt-1">{s.notes}</p>}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
