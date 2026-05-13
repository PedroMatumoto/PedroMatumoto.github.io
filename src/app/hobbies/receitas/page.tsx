import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Clock } from "lucide-react";
import { receitasData } from "@/data/hobbies";

export const metadata: Metadata = {
  title: "Receitas | Pedro Matumoto",
  description: "Receitas favoritas.",
};

export default function ReceitasPage() {
  return (
    <main className="min-h-screen bg-stone-50 pt-20 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Link href="/hobbies" className="text-xs text-stone-400 hover:text-stone-700 transition-colors uppercase tracking-widest">
            ← Hub
          </Link>
          <div className="mt-4 flex items-end gap-4">
            <span className="text-8xl font-serif text-amber-500 opacity-70 leading-none">食</span>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-stone-900 tracking-tighter">Receitas</h1>
              <p className="text-stone-500 mt-1">Cozinha favorita</p>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {receitasData.map((r) => (
            <Link
              key={r.slug}
              href={`/hobbies/receitas/${r.slug}`}
              className="group bg-white rounded-2xl border border-stone-200 overflow-hidden hover:border-amber-300 hover:shadow-md transition-all duration-200"
            >
              {/* Image */}
              <div className="relative h-44 bg-stone-100 overflow-hidden">
                {r.image ? (
                  <Image
                    src={r.image}
                    alt={r.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <span className="text-6xl font-serif text-stone-300">食</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <h2 className="font-bold text-stone-900 text-lg mb-1">{r.name}</h2>
                <div className="flex items-center gap-3 text-sm text-stone-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {r.timeMin} min
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {r.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full border border-amber-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
