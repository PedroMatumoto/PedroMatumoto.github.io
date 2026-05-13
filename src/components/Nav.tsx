"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const portfolioLinks = [
  { label: "About", href: "/#hero" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHobbies = pathname?.startsWith("/hobbies");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled || open
          ? "bg-[#f4eed8]/95 backdrop-blur-sm border-b border-[#c4b89a]/60"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center hover:opacity-60 transition-opacity duration-200"
          aria-label="Home"
        >
          <Image
            src="/images/logo.svg"
            alt="Pedro Matumoto"
            width={40}
            height={40}
            className="h-9 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {!isHobbies &&
            portfolioLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[0.65rem] tracking-[0.25em] uppercase text-[#7a6a52] hover:text-[#1c1208] transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}

          <Link
            href="/hobbies"
            className={`text-[0.65rem] tracking-[0.25em] uppercase transition-colors duration-200 font-serif ${
              isHobbies
                ? "text-[#1c1208] border-b border-[#d54230] pb-px"
                : "text-[#b5a48a] hover:text-[#1c1208]"
            }`}
          >
            趣味
          </Link>
        </nav>

        {/* Mobile burger — two lines (minimalist) */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1 text-[#3d2e1a]"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-px bg-current transition-all duration-200 origin-center ${
              open ? "rotate-45 translate-y-[3.5px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-current transition-all duration-200 origin-center ${
              open ? "-rotate-45 -translate-y-[3.5px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[#c4b89a]/60 bg-[#f4eed8]">
          <div className="px-8 py-6 flex flex-col gap-5">
            {!isHobbies &&
              portfolioLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-[0.65rem] tracking-[0.3em] uppercase text-[#7a6a52] hover:text-[#1c1208] transition-colors"
                >
                  {l.label}
                </a>
              ))}
            <Link
              href="/hobbies"
              onClick={() => setOpen(false)}
              className={`text-[0.65rem] tracking-[0.3em] uppercase transition-colors font-serif ${
                isHobbies ? "text-[#1c1208]" : "text-[#b5a48a] hover:text-[#1c1208]"
              }`}
            >
              趣味
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
