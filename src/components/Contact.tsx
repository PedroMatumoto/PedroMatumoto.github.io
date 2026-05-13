"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Mail, Github, Linkedin } from "lucide-react";
import AnimatedText from "./AnimatedText";

export default function Contact() {
  const { t: portfolioData } = useLanguage();
  return (
    <section className="py-24 px-6 paper-texture-ink text-[#f4eed8]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">
            <AnimatedText text={portfolioData.ui.getInTouch} />
          </h2>
          <p className="text-[#b5a48a] mb-12 max-w-xl mx-auto">
            <AnimatedText text={portfolioData.ui.contactText} speed={10} />
          </p>

          <div className="flex justify-center gap-8 mb-16">
            <a
              href={`mailto:${portfolioData.contact.email}`}
              className="text-[#b5a48a] hover:text-[#f4eed8] transition-colors"
            >
              <Mail size={24} />
            </a>
            <a
              href={portfolioData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#b5a48a] hover:text-[#f4eed8] transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href={portfolioData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#b5a48a] hover:text-[#f4eed8] transition-colors"
            >
              <Linkedin size={24} />
            </a>
          </div>

          <footer className="text-sm text-[#7a6a52] font-mono">
            <p>© {new Date().getFullYear()} <AnimatedText text={portfolioData.name} />. All rights reserved.</p>
            <p className="mt-2 text-xs text-[#b5a48a]/60">Designed & Built with Next.js</p>
          </footer>
        </motion.div>
      </div>
    </section>
  );
}
