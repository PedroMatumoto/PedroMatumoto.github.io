"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  const { t: portfolioData } = useLanguage();
  return (
    <section className="py-24 px-6 bg-stone-900 text-stone-50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">
            {portfolioData.ui.getInTouch}
          </h2>
          <p className="text-stone-400 mb-12 max-w-xl mx-auto">
            {portfolioData.ui.contactText}
          </p>

          <div className="flex justify-center gap-8 mb-16">
            <a
              href={`mailto:${portfolioData.contact.email}`}
              className="text-stone-400 hover:text-white transition-colors"
            >
              <Mail size={24} />
            </a>
            <a
              href={portfolioData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 hover:text-white transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href={portfolioData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 hover:text-white transition-colors"
            >
              <Linkedin size={24} />
            </a>
          </div>

          <footer className="text-sm text-stone-600 font-mono">
            <p>© {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</p>
            <p className="mt-2 text-xs">Designed & Built with Next.js</p>
          </footer>
        </motion.div>
      </div>
    </section>
  );
}
