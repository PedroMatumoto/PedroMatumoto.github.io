"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import AnimatedText from "./AnimatedText";

export default function Hero() {
  const { t: portfolioData } = useLanguage();
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden px-6 z-0">
      {/* Washi paper grain texture — no lines */}
      <svg className="absolute inset-0 w-full h-full -z-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <filter id="washi-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.72 0.42" numOctaves="4" seed="3" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grey" />
          <feBlend in="SourceGraphic" in2="grey" mode="multiply" result="blended" />
          <feComposite in="blended" in2="SourceGraphic" operator="in" />
        </filter>
        <rect width="100%" height="100%" filter="url(#washi-grain)" opacity="0.10" fill="#7a6a52" />
      </svg>
      {/* Subtle vignette — darker edges like real paper */}
      <div className="absolute inset-0 -z-10 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 40%, transparent 60%, rgba(44,30,12,0.10) 100%)" }} />

      {/* Large vertical Japanese calligraphy watermark */}
      <div className="absolute top-0 right-12 h-full flex items-center -z-10 pointer-events-none select-none overflow-hidden">
        <span className="writing-vertical-rl text-[12rem] font-serif font-black text-[#1c1208]/[0.04] tracking-widest leading-none">
          {portfolioData.titleJP}
        </span>
      </div>

      {/* Vermilion accent bar — left edge, like a hanko seal */}
      <div className="absolute left-0 top-1/4 w-[3px] h-48 bg-[#d54230]/70 rounded-r-full hidden md:block" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center z-10"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-xl md:text-2xl text-[#7a6a52] mb-4 font-serif tracking-[0.3em]"
        >
          松本 優吾
        </motion.p>

        {/* Vermilion thin rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
          className="mx-auto mb-6 h-px w-32 bg-[#d54230]/60 origin-left"
        />

        <h1 className="text-5xl md:text-8xl font-bold text-[#1c1208] mb-6 tracking-tighter overflow-hidden">
          <motion.span
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.1 }}
            className="inline-block"
          >
            <AnimatedText text={portfolioData.name} />
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-lg md:text-xl text-[#7a6a52] max-w-2xl mx-auto leading-relaxed"
        >
          <AnimatedText text={portfolioData.about} speed={10} />
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] h-24 bg-gradient-to-b from-[#c4b89a] to-transparent mx-auto"
        />
        <span className="text-xs text-[#b5a48a] tracking-widest uppercase font-serif">Scroll</span>
      </motion.div>
    </section>
  );
}
