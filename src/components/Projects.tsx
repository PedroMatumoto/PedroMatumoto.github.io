"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { getTechIcon } from "@/utils/icons";
import Link from "next/link";
import AnimatedText from "./AnimatedText";

export default function Projects() {
  const { t: portfolioData } = useLanguage();
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-serif font-bold text-[#1c1208] mb-16 flex items-center gap-4"
        >
          <span className="text-[#d54230] text-lg font-serif">02.</span>
          <AnimatedText text={portfolioData.ui.projects} />
          <span className="text-sm font-normal text-[#b5a48a] ml-auto writing-vertical-rl text-orientation-upright h-8">
            プロジェクト
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="group bg-[#f4eed8] border border-[#c4b89a]/50 p-8 hover:border-[#d54230]/40 hover:shadow-lg transition-all duration-300 flex flex-col rounded-sm relative"
            >
              <Link href={`/projects/${project.slug}`} className="absolute inset-0 z-0" />
              
              <div className="flex justify-between items-start mb-6 relative z-10">
                <h3 className="text-2xl font-bold text-[#1c1208] group-hover:text-[#7a6a52] transition-colors">
                  <AnimatedText text={project.title} />
                </h3>
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#b5a48a] hover:text-[#1c1208] transition-colors transform hover:scale-110"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#b5a48a] hover:text-[#1c1208] transition-colors transform hover:scale-110"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
              
              <p className="text-[#7a6a52] mb-6 leading-relaxed flex-grow">
                <AnimatedText text={project.description} speed={10} />
              </p>

              <div className="flex flex-wrap gap-3 mt-auto mb-6">
                {project.technologies.map((tech, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1.5 text-xs font-mono text-[#7a6a52] bg-[#e4dbc4]/50 px-2.5 py-1.5 rounded border border-[#c4b89a]/50"
                  >
                    <span className="text-sm">{getTechIcon(tech)}</span>
                    <span>{tech}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-[#c4b89a]/30 flex justify-end">
                <span className="text-sm font-serif text-[#b5a48a] group-hover:text-[#d54230] flex items-center gap-2 transition-colors">
                  <AnimatedText text={portfolioData.ui.viewDetails} /> <ArrowRight size={16} />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
