import Link from "next/link";
import type { Metadata } from "next";
import { viagensData } from "@/data/hobbies";
import type { Trip } from "@/data/hobbies";

export const metadata: Metadata = {
  title: "Viagens | Pedro Matumoto",
  description: "Travel log — lugares visitados e destinos no radar.",
};

const statusConfig = {
  visited: { label: "Visitado", style: "bg-green-100 text-green-700 border-green-200" },
  planned: { label: "Planejado", style: "bg-blue-100 text-blue-700 border-blue-200" },
  dream: { label: "Sonho", style: "bg-violet-100 text-violet-700 border-violet-200" },
};

export default async function ViagensPage() {
  const visited = viagensData.filter((t) => t.status === "visited");
  const planned = viagensData.filter((t) => t.status === "planned");
  const dreams = viagensData.filter((t) => t.status === "dream");

  return (
    <main className="min-h-screen bg-stone-50 pt-20 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Link href="/hobbies" className="text-xs text-stone-400 hover:text-stone-700 transition-colors uppercase tracking-widest">
            ← Hub
          </Link>
          <div className="mt-4 flex items-end gap-4">
            <span className="text-8xl font-serif text-blue-500 opacity-70 leading-none">旅</span>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-stone-900 tracking-tighter">Viagens</h1>
              <p className="text-stone-500 mt-1">Travel Log</p>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="flex gap-6 mb-12 flex-wrap">
          {[
            { value: visited.length, label: "países visitados", color: "text-green-600" },
            { value: planned.length, label: "destinos planejados", color: "text-blue-600" },
            { value: dreams.length, label: "sonhos de viagem", color: "text-violet-600" },
          ].map((s) => (
            <div key={s.label} className="flex items-baseline gap-2">
              <span className={`text-4xl font-bold tracking-tighter ${s.color}`}>{s.value}</span>
              <span className="text-sm text-stone-400">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Visited */}
        <TripSection title="Já fui" trips={visited} accentColor="bg-green-500" />

        {/* Planned */}
        <TripSection title="Planejado" trips={planned} accentColor="bg-blue-500" />

        {/* Dreams */}
        <TripSection title="Sonhos" trips={dreams} accentColor="bg-violet-500" />
      </div>
    </main>
  );
}

function TripSection({
  title,
  trips,
  accentColor,
}: {
  title: string;
  trips: Trip[];
  accentColor: string;
}) {
  if (trips.length === 0) return null;
  return (
    <section className="mb-12">
      <h2 className="text-lg font-semibold text-stone-900 mb-4 flex items-center gap-2">
        <span className={`w-6 h-px ${accentColor} inline-block`} />
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {trips.map((trip) => {
          const sc = statusConfig[trip.status];
          const hasDetails =
            (trip.photos ?? []).length > 0 ||
            (trip.itinerary ?? []).length > 0 ||
            (trip.pointsOfInterest ?? []).length > 0 ||
            (trip.expenses ?? []).length > 0 ||
            (trip.shoppingWishlist ?? []).length > 0;
          const Card = (
            <div
              key={trip.slug}
              className={`bg-white rounded-2xl border border-stone-200 p-6 relative overflow-hidden group transition-colors ${
                hasDetails ? "hover:border-stone-400 cursor-pointer" : ""
              }`}
            >
              {/* Flag watermark */}
              <span className="absolute right-4 bottom-2 text-5xl opacity-10 group-hover:opacity-20 transition-opacity select-none">
                {trip.flag}
              </span>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                  <span className="text-2xl">{trip.flag}</span>
                  <div className="flex items-center gap-2">
                    {trip.period && (
                      <span className="text-xs text-stone-400 bg-stone-100 px-2 py-0.5 rounded-full">
                        {trip.period}
                      </span>
                    )}
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${sc.style}`}>
                      {sc.label}
                    </span>
                  </div>
                </div>

                <h3 className="font-bold text-stone-900 text-xl mb-0.5">{trip.name}</h3>
                <p className="text-xs text-stone-400 mb-3">{trip.country}</p>
                <p className="text-sm text-stone-600 leading-relaxed">{trip.highlight}</p>

                {trip.notes && (
                  <p className="text-xs text-stone-400 italic mt-3 leading-relaxed">{trip.notes}</p>
                )}

                {trip.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {trip.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-stone-50 text-stone-500 px-2 py-0.5 rounded-full border border-stone-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {hasDetails && (
                  <p className="text-xs text-stone-400 mt-4 flex items-center gap-1">
                    <span>Abrir roteiro</span>
                    <span>→</span>
                  </p>
                )}
              </div>
            </div>
          );
          return hasDetails ? (
            <Link key={trip.slug} href={`/hobbies/viagens/${trip.slug}`} className="block">
              {Card}
            </Link>
          ) : (
            <div key={trip.slug}>{Card}</div>
          );
        })}
      </div>
    </section>
  );
}
