import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { boulderData, type BoulderGrade } from "@/data/hobbies";

export const metadata: Metadata = {
  title: "Boulder | Pedro Matumoto",
  description: "Projetos e sessões de bouldering indoor.",
};

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
};

const gradeOrder: BoulderGrade[] = ["V0", "V1", "V2", "V3", "V4", "V5", "V6", "V7", "V8+"];

function computeMaxGrade(data: typeof boulderData): BoulderGrade {
  const allGrades: BoulderGrade[] = [
    ...data.recentSessions.flatMap((s) => s.topSends),
    ...data.projects.filter((p) => p.status === "sent").map((p) => p.grade),
  ];
  if (allGrades.length === 0) return "V0";
  return allGrades.reduce((best, g) =>
    gradeOrder.indexOf(g) > gradeOrder.indexOf(best) ? g : best
  );
}

export default function BoulderPage() {
  const { projects, recentSessions, gyms } = boulderData;
  const totalSessions = recentSessions.length;
  const maxGrade = computeMaxGrade(boulderData);

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
        <div className="grid grid-cols-3 gap-4 mb-12">
          {[
            { label: "Grade máx.", value: maxGrade, color: "text-orange-600" },
            { label: "Sessões", value: totalSessions.toString(), color: "text-stone-900" },
            { label: "Ginásios", value: gyms.length.toString(), color: "text-stone-900" },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-2xl border border-stone-200 p-5">
              <p className={`text-3xl font-bold ${s.color}`}>{s.value}</p>
              <p className="text-xs text-stone-400 mt-1 tracking-wider uppercase">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Projects */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold text-stone-900 mb-4 flex items-center gap-2">
            <span className="w-6 h-px bg-orange-400 inline-block" />
            Projetos
          </h2>
          <div className="flex flex-col gap-3">
            {projects.map((p) => (
              <div
                key={p.name}
                className="bg-white rounded-xl border border-stone-200 p-5 flex flex-row gap-4"
              >
                {/* Left: info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${gradeColors[p.grade] ?? "bg-stone-100 text-stone-600"}`}>
                      {p.grade}
                    </span>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${
                        p.status === "sent"
                          ? "bg-green-100 text-green-700"
                          : p.status === "projecting"
                          ? "bg-amber-100 text-amber-700"
                          : "bg-stone-100 text-stone-500"
                      }`}
                    >
                      {p.status === "sent" ? "✓ Sent" : p.status === "projecting" ? "Projecting" : "Abandonado"}
                    </span>
                  </div>
                  <p className="font-medium text-stone-900">{p.name}</p>
                  <p className="text-xs text-stone-400 mt-0.5">{p.gym}</p>
                  {p.notes && <p className="text-sm text-stone-500 mt-2 italic">{p.notes}</p>}
                  <div className="mt-4">
                    <p className="text-2xl font-bold text-stone-900">{p.attempts}</p>
                    <p className="text-xs text-stone-400 uppercase tracking-wider">tentativas</p>
                    {p.sentDate && (
                      <p className="text-xs text-green-600 mt-1">
                        {new Date(p.sentDate).toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" })}
                      </p>
                    )}
                  </div>
                </div>
                {/* Right: photos (portrait) */}
                {p.photos && p.photos.length > 0 && (
                  <div className="flex gap-2 shrink-0">
                    {p.photos.map((src, i) => (
                      <a key={i} href={src} target="_blank" rel="noopener noreferrer">
                        <div className="relative w-40 h-60 rounded-lg overflow-hidden bg-stone-100 border border-stone-200">
                          <Image
                            src={src}
                            alt={`${p.name} - foto ${i + 1}`}
                            fill
                            className="object-cover"
                            sizes="160px"
                          />
                        </div>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Recent sessions */}
        <section>
          <h2 className="text-lg font-semibold text-stone-900 mb-4 flex items-center gap-2">
            <span className="w-6 h-px bg-orange-400 inline-block" />
            Sessões recentes
          </h2>
          <div className="flex flex-col gap-3">
            {recentSessions.map((s) => (
              <div
                key={s.date}
                className="bg-white rounded-xl border border-stone-200 p-5"
              >
                <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                  <div>
                    <p className="font-medium text-stone-900 text-sm">
                      {new Date(s.date).toLocaleDateString("pt-BR", { weekday: "short", day: "2-digit", month: "short", year: "numeric" })}
                    </p>
                    <p className="text-xs text-stone-400">{s.gym}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-2">
                  {s.topSends.map((g, i) => (
                    <span key={i} className={`text-xs font-semibold px-2 py-0.5 rounded-full ${gradeColors[g] ?? "bg-stone-100 text-stone-600"}`}>
                      {g}
                    </span>
                  ))}
                </div>
                {s.notes && <p className="text-sm text-stone-500 italic">{s.notes}</p>}
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
