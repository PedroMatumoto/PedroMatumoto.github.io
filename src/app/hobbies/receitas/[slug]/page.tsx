import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Clock, ChevronLeft } from "lucide-react";
import { receitasData } from "@/data/hobbies";

export function generateStaticParams() {
  return receitasData.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const recipe = receitasData.find((r) => r.slug === slug);
  if (!recipe) return {};
  return { title: `${recipe.name} | Pedro Matumoto` };
}

export default async function ReceitaDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const recipe = receitasData.find((r) => r.slug === slug);
  if (!recipe) notFound();

  return (
    <main className="min-h-screen bg-stone-50 pt-20 pb-24 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Back */}
        <Link
          href="/hobbies/receitas"
          className="inline-flex items-center gap-1 text-xs text-stone-400 hover:text-stone-700 uppercase tracking-widest mb-8 transition-colors"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
          Receitas
        </Link>

        {/* Hero image */}
        {recipe.image && (
          <div className="relative h-64 rounded-2xl overflow-hidden mb-8 bg-stone-100">
            <Image
              src={recipe.image}
              alt={recipe.name}
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        )}

        {/* Title */}
        <h1 className="text-4xl font-bold text-stone-900 tracking-tighter mb-2">{recipe.name}</h1>
        <div className="flex items-center gap-4 text-sm text-stone-500 mb-3">
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            {recipe.timeMin} min
          </span>
        </div>
        <div className="flex flex-wrap gap-1.5 mb-8">
          {recipe.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full border border-amber-100"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Ingredients */}
          <section>
            <h2 className="text-sm font-semibold text-stone-400 uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-5 h-px bg-amber-400 inline-block" />
              Ingredientes
            </h2>
            <ul className="space-y-2">
              {recipe.ingredients.map((ing, i) => (
                <li key={i} className="flex items-start gap-2 text-stone-700 text-sm">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                  {ing}
                </li>
              ))}
            </ul>
          </section>

          {/* Steps */}
          <section>
            <h2 className="text-sm font-semibold text-stone-400 uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-5 h-px bg-amber-400 inline-block" />
              Modo de preparo
            </h2>
            <ol className="space-y-4">
              {recipe.steps.map((step, i) => (
                <li key={i} className="flex gap-3 text-sm text-stone-700">
                  <span className="shrink-0 w-5 h-5 rounded-full bg-amber-100 text-amber-700 text-xs font-bold flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </section>
        </div>

        {recipe.notes && (
          <div className="mt-8 p-4 rounded-xl bg-amber-50 border border-amber-100 text-sm text-amber-800 italic">
            {recipe.notes}
          </div>
        )}
      </div>
    </main>
  );
}
