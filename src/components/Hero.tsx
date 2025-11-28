"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import ColorBends from "./ColorBends";

export default function Hero() {
  const { t: portfolioData } = useLanguage();
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden px-6 z-0">
      <div className="absolute top-0 left-0 w-full h-full -z-20 opacity-30">
        <ColorBends colors={["#ff5c7a", "#8a5cff", "#00ffd1"]} />
      </div>
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 text-9xl font-serif writing-vertical-rl text-stone-900 select-none">
          {portfolioData.titleJP}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center z-10"
      >
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-xl md:text-2xl text-stone-500 mb-4 font-serif tracking-widest"
        >
          松本 優吾
        </motion.h2>
        
        <h1 className="text-5xl md:text-8xl font-bold text-stone-900 mb-6 tracking-tighter overflow-hidden">
          <motion.span
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.1 }}
            className="inline-block"
          >
            {portfolioData.name}
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed"
        >
          {portfolioData.about}
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] h-24 bg-stone-300 mx-auto"
        ></motion.div>
        <span className="text-xs text-stone-400 mt-2 block tracking-widest uppercase">Scroll</span>
      </motion.div>
    </section>
  );
}
