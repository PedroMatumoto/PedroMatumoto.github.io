"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { getTechIcon } from "@/utils/icons";
import AnimatedText from "./AnimatedText";

export default function Experience() {
  const { t: portfolioData } = useLanguage();
  return (
    <section className="py-24 px-6 paper-texture-alt">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-serif font-bold text-[#1c1208] mb-16 flex items-center gap-4"
        >
          <span className="text-[#d54230] text-lg font-serif">01.</span>
          <AnimatedText text={portfolioData.ui.experience} />
          <span className="text-sm font-normal text-[#b5a48a] ml-auto writing-vertical-rl text-orientation-upright h-8">
            経験
          </span>
        </motion.h2>

        <div className="space-y-12">
          {portfolioData.experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="group relative pl-8 border-l border-[#c4b89a]/60"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.2, type: "spring" }}
                className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-[#c4b89a] group-hover:bg-[#d54230] transition-colors duration-300"
              />
              
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                <h3 className="text-xl font-bold text-[#1c1208]"><AnimatedText text={exp.role} /></h3>
                <span className="text-sm font-mono text-[#7a6a52]"><AnimatedText text={exp.period} /></span>
              </div>
              <h4 className="text-lg text-[#7a6a52] font-serif mb-4"><AnimatedText text={exp.company} /></h4>
              <p className="text-[#3d2e1a] leading-relaxed mb-4"><AnimatedText text={exp.description} speed={10} /></p>
              
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="flex items-center gap-1.5 text-xs font-mono text-[#7a6a52] bg-[#e4dbc4]/60 px-2 py-1 rounded border border-[#c4b89a]/50"
                  >
                    <span className="text-sm">{getTechIcon(tech)}</span>
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
