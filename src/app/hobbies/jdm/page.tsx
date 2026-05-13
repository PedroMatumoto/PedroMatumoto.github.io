import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { jdmData } from "@/data/hobbies";

export const metadata: Metadata = {
  title: "JDM | Pedro Matumoto",
  description: "Japanese Domestic Market — carros favoritos e eventos.",
};

const statusLabel: Record<string, { label: string; style: string }> = {
  owned: { label: "Owned", style: "bg-green-100 text-green-700" },
  favorite: { label: "Favorito", style: "bg-red-100 text-red-700" },
  tracked: { label: "Acompanhando", style: "bg-amber-100 text-amber-700" },
  sold: { label: "Vendido", style: "bg-stone-100 text-stone-500" },
};

export default function JdmPage() {
  const { cars, events } = jdmData;
  const upcomingEvents = events.filter((e) => !e.attended);
  const pastEvents = events.filter((e) => e.attended);

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
            <span className="text-8xl font-serif text-red-500 opacity-80 leading-none">車</span>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-stone-900 tracking-tighter">JDM</h1>
              <p className="text-stone-500 mt-1">Japanese Domestic Market</p>
            </div>
          </div>
        </div>

        {/* Cars */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold text-stone-900 mb-4 flex items-center gap-2">
            <span className="w-6 h-px bg-red-500 inline-block" />
            Favoritos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cars.map((car) => {
              const s = statusLabel[car.status] ?? statusLabel.tracked;
              return (
                <div
                  key={car.name}
                  className="bg-white rounded-2xl border border-stone-200 p-6 relative overflow-hidden"
                >
                  {car.image && (
                    <div className="relative h-44 rounded-xl overflow-hidden mb-4 border border-stone-200">
                      <Image src={car.image} alt={car.name} fill className="object-cover" unoptimized />
                    </div>
                  )}

                  {/* Chassis watermark */}
                  <span className="absolute right-4 bottom-2 text-5xl font-serif text-stone-900 opacity-5 select-none">
                    {car.chassis}
                  </span>

                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${s.style}`}>
                        {s.label}
                      </span>
                    </div>
                    <h3 className="font-bold text-stone-900 text-lg">{car.name}</h3>
                    <p className="text-sm text-stone-500">{car.year} · {car.chassis}</p>
                    {car.notes && (
                      <p className="text-sm text-stone-500 mt-3 italic leading-relaxed">{car.notes}</p>
                    )}
                    {car.mods && car.mods.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {car.mods.map((m) => (
                          <span key={m} className="text-xs bg-red-50 text-red-600 px-2 py-0.5 rounded-full">
                            {m}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Events */}
        <section>
          <h2 className="text-lg font-semibold text-stone-900 mb-4 flex items-center gap-2">
            <span className="w-6 h-px bg-red-500 inline-block" />
            Eventos
          </h2>

          {upcomingEvents.length > 0 && (
            <div className="mb-4">
              <p className="text-xs text-stone-400 uppercase tracking-widest mb-2">Próximos</p>
              {upcomingEvents.map((e) => (
                <div
                  key={e.name}
                  className="bg-white rounded-xl border border-red-200 p-5 mb-3"
                >
                  <p className="font-medium text-stone-900">{e.name}</p>
                  <p className="text-xs text-stone-400 mt-0.5">
                    {new Date(e.date).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })} · {e.location}
                  </p>
                  {e.seenCars && e.seenCars.length > 0 && (
                    <div className="mt-3">
                      <p className="text-[11px] text-stone-400 uppercase tracking-wider mb-2">Carros vistos</p>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                        {e.seenCars.map((car) => (
                          <div key={`${e.name}-${car.name}`} className="rounded-lg border border-stone-200 overflow-hidden bg-stone-50">
                            <div className="relative h-44">
                              <Image
                                src={car.image}
                                alt={car.name}
                                fill
                                className="object-cover"
                                unoptimized
                              />
                            </div>
                            <div className="p-3">
                              <p className="text-base font-medium text-stone-900 leading-tight">{car.name}</p>
                              {car.notes && <p className="text-sm text-stone-500 mt-1">{car.notes}</p>}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {pastEvents.length > 0 && (
            <div>
              <p className="text-xs text-stone-400 uppercase tracking-widest mb-2">Já fui</p>
              {pastEvents.map((e) => (
                <div
                  key={e.name}
                  className="bg-white rounded-xl border border-stone-200 p-5 mb-3 opacity-80"
                >
                  <p className="font-medium text-stone-900">{e.name}</p>
                  <p className="text-xs text-stone-400 mt-0.5">
                    {new Date(e.date).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })} · {e.location}
                  </p>
                  {e.seenCars && e.seenCars.length > 0 && (
                    <div className="mt-3">
                      <p className="text-[11px] text-stone-400 uppercase tracking-wider mb-2">Carros vistos</p>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                        {e.seenCars.map((car) => (
                          <div key={`${e.name}-${car.name}`} className="rounded-lg border border-stone-200 overflow-hidden bg-stone-50">
                            <div className="relative h-44">
                              <Image
                                src={car.image}
                                alt={car.name}
                                fill
                                className="object-cover"
                                unoptimized
                              />
                            </div>
                            <div className="p-3">
                              <p className="text-base font-medium text-stone-900 leading-tight">{car.name}</p>
                              {car.notes && <p className="text-sm text-stone-500 mt-1">{car.notes}</p>}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {e.notes && <p className="text-sm text-stone-500 mt-2 italic">{e.notes}</p>}
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
