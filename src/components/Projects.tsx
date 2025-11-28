"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { getTechIcon } from "@/utils/icons";
import Link from "next/link";

export default function Projects() {
  const { t: portfolioData } = useLanguage();
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-16 flex items-center gap-4"
        >
          <span className="text-stone-400 text-lg">02.</span>
          {portfolioData.ui.projects}
          <span className="text-sm font-normal text-stone-400 ml-auto writing-vertical-rl text-orientation-upright h-8">
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
              className="group bg-stone-50 border border-stone-200 p-8 hover:border-stone-400 hover:shadow-lg transition-all duration-300 flex flex-col rounded-sm relative"
            >
              <Link href={`/projects/${project.slug}`} className="absolute inset-0 z-0" />
              
              <div className="flex justify-between items-start mb-6 relative z-10">
                <h3 className="text-2xl font-bold text-stone-900 group-hover:text-stone-600 transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-400 hover:text-stone-900 transition-colors transform hover:scale-110"
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
                      className="text-stone-400 hover:text-stone-900 transition-colors transform hover:scale-110"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
              
              <p className="text-stone-600 mb-6 leading-relaxed flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mt-auto mb-6">
                {project.technologies.map((tech, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1.5 text-xs font-mono text-stone-600 bg-stone-100 px-2.5 py-1.5 rounded border border-stone-200"
                  >
                    <span className="text-sm">{getTechIcon(tech)}</span>
                    <span>{tech}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-stone-100 flex justify-end">
                <span className="text-sm font-serif text-stone-400 group-hover:text-stone-900 flex items-center gap-2 transition-colors">
                  {portfolioData.ui.viewDetails} <ArrowRight size={16} />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
