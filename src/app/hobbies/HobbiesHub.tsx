"use client";

import Link from "next/link";
import { useRef, useState, useCallback } from "react";

type Hobby = {
  slug: string;
  kanji: string;
  index: string;
  label: string;
  sublabel: string;
  description: string;
  bg: string;
  hoverBg: string;
  kanjiColor: string;
  accentBar: string;
  stat: string;
};

export default function HobbiesHub({ hobbies }: { hobbies: readonly Hobby[] }) {
  const railRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollTo = useCallback(
    (direction: "prev" | "next") => {
      const rail = railRef.current;
      if (!rail) return;
      const cardWidth = rail.firstElementChild?.getBoundingClientRect().width ?? rail.clientWidth;
      const next = direction === "next" ? activeIndex + 1 : activeIndex - 1;
      const clamped = Math.max(0, Math.min(hobbies.length - 1, next));
      rail.scrollTo({ left: clamped * cardWidth, behavior: "smooth" });
      setActiveIndex(clamped);
    },
    [activeIndex, hobbies.length]
  );

  const onScroll = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;
    const cardWidth = rail.firstElementChild?.getBoundingClientRect().width ?? rail.clientWidth;
    const idx = Math.round(rail.scrollLeft / cardWidth);
    setActiveIndex(idx);
  }, []);

  return (
    <div className="flex flex-col flex-1">
      {/* ── Horizontal scroll rail ───────────────────────────── */}
      <section
        ref={railRef}
        onScroll={onScroll}
        className="flex flex-1 overflow-x-auto snap-x snap-mandatory no-scrollbar border-t border-stone-200"
        style={{ minHeight: "420px" }}
      >
        {hobbies.map((h) => (
          <Link
            key={h.slug}
            href={`/hobbies/${h.slug}`}
            className={`group relative flex-none w-[90vw] sm:w-[62vw] lg:w-[42vw] snap-start flex flex-col justify-between p-8 md:p-12 overflow-hidden border-r border-stone-200 transition-colors duration-300 ${h.bg} ${h.hoverBg}`}
          >
            {/* index number */}
            <span className="font-mono text-[0.65rem] tracking-widest text-stone-300">
              {h.index}
            </span>

            {/* giant background kanji */}
            <span
              className={`pointer-events-none select-none absolute left-2 top-1/2 -translate-y-1/2 font-serif font-bold leading-none opacity-[0.07] group-hover:opacity-[0.12] group-hover:scale-105 transition-all duration-500 ${h.kanjiColor}`}
              style={{ fontSize: "clamp(10rem, 28vw, 22rem)" }}
              aria-hidden="true"
            >
              {h.kanji}
            </span>

            {/* bottom content */}
            <div className="relative z-10 mt-auto">
              <hr className="border-stone-200 mb-6" />
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 tracking-tighter leading-none mb-2">
                {h.label}
              </h2>
              <p className="text-[0.6rem] tracking-[0.3em] uppercase text-stone-400 mb-5">
                {h.sublabel}
              </p>
              <p className="text-stone-500 text-sm leading-relaxed mb-6 max-w-[26ch]">
                {h.description}
              </p>
              <div className="flex items-center gap-2">
                <span className={`inline-block w-5 h-px ${h.accentBar}`} />
                <span className="text-xs text-stone-400">{h.stat}</span>
                <span className="ml-auto text-stone-300 group-hover:translate-x-1 transition-transform duration-200 text-sm">
                  →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </section>

      {/* ── Nav bar: arrows + dots ───────────────────────────── */}
      <div className="flex items-center justify-between px-8 py-5 border-t border-stone-200 bg-stone-50">
        {/* back to portfolio */}
        <Link
          href="/"
          className="text-stone-400 text-[0.65rem] tracking-[0.3em] uppercase hover:text-stone-700 transition-colors"
        >
          ← Portfolio
        </Link>

        {/* dot indicators */}
        <div className="flex items-center gap-2">
          {hobbies.map((h, i) => (
            <button
              key={h.slug}
              onClick={() => {
                const rail = railRef.current;
                if (!rail) return;
                const cardWidth =
                  rail.firstElementChild?.getBoundingClientRect().width ?? rail.clientWidth;
                rail.scrollTo({ left: i * cardWidth, behavior: "smooth" });
                setActiveIndex(i);
              }}
              aria-label={`Ir para ${h.label}`}
              className={`rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "w-4 h-1.5 bg-stone-700"
                  : "w-1.5 h-1.5 bg-stone-300 hover:bg-stone-500"
              }`}
            />
          ))}
        </div>

        {/* prev / next arrows */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => scrollTo("prev")}
            disabled={activeIndex === 0}
            aria-label="Anterior"
            className="w-8 h-8 flex items-center justify-center border border-stone-200 text-stone-400 hover:border-stone-700 hover:text-stone-700 disabled:opacity-20 disabled:cursor-not-allowed transition-colors duration-200 text-sm"
          >
            ←
          </button>
          <button
            onClick={() => scrollTo("next")}
            disabled={activeIndex === hobbies.length - 1}
            aria-label="Próximo"
            className="w-8 h-8 flex items-center justify-center border border-stone-200 text-stone-400 hover:border-stone-700 hover:text-stone-700 disabled:opacity-20 disabled:cursor-not-allowed transition-colors duration-200 text-sm"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
