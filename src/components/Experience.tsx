"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { getTechIcon } from "@/utils/icons";

export default function Experience() {
  const { t: portfolioData } = useLanguage();
  return (
    <section className="py-24 px-6 bg-stone-100">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-16 flex items-center gap-4"
        >
          <span className="text-stone-400 text-lg">01.</span>
          {portfolioData.ui.experience}
          <span className="text-sm font-normal text-stone-400 ml-auto writing-vertical-rl text-orientation-upright h-8">
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
              className="group relative pl-8 border-l border-stone-300"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.2, type: "spring" }}
                className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-stone-300 group-hover:bg-stone-900 transition-colors duration-300"
              />
              
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                <h3 className="text-xl font-bold text-stone-900">{exp.role}</h3>
                <span className="text-sm font-mono text-stone-500">{exp.period}</span>
              </div>
              <h4 className="text-lg text-stone-600 font-serif mb-4">{exp.company}</h4>
              <p className="text-stone-600 leading-relaxed mb-4">{exp.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="flex items-center gap-1.5 text-xs font-mono text-stone-500 bg-stone-200/50 px-2 py-1 rounded border border-stone-200"
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
