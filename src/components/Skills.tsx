"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { getTechIcon } from "@/utils/icons";
import { SiAmazonwebservices, SiCisco, SiGooglecloud } from "react-icons/si";
import { FaAward, FaMicrosoft } from "react-icons/fa";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

const getIssuerIcon = (issuer: string) => {
  switch (issuer.toLowerCase()) {
    case "aws":
      return <SiAmazonwebservices className="text-[#FF9900] text-2xl" />;
    case "cisco":
      return <SiCisco className="text-[#1BA0D7] text-2xl" />;
    case "google cloud":
      return <SiGooglecloud className="text-[#4285F4] text-2xl" />;
    case "microsoft":
      return <FaMicrosoft className="text-[#00A4EF] text-2xl" />;
    default:
      return <FaAward className="text-stone-400 text-2xl" />;
  }
};

export default function Skills() {
  const { t: portfolioData } = useLanguage();
  return (
    <section className="py-24 px-6 bg-stone-50">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-12 flex items-center gap-4"
        >
          <span className="text-stone-400 text-lg">03.</span>
          {portfolioData.ui.skills} & {portfolioData.ui.certifications}
          <span className="text-sm font-normal text-stone-400 ml-auto writing-vertical-rl text-orientation-upright h-8">
            スキルと資格
          </span>
        </motion.h2>

        <div className="space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-stone-900 mb-8 border-b border-stone-200 pb-2">
              {portfolioData.ui.hardSkills}
            </h3>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              {portfolioData.skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  whileHover={{ scale: 1.05, backgroundColor: "#e7e5e4" }}
                  className="flex items-center gap-2 text-sm font-mono text-stone-600 bg-stone-100 px-3 py-2 rounded border border-stone-200 cursor-default transition-colors"
                >
                  <span className="text-lg">{getTechIcon(skill)}</span>
                  <span>{skill}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-stone-900 mb-8 border-b border-stone-200 pb-2">
              {portfolioData.ui.certifications}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {portfolioData.certifications.map((cert, index) => {
                const Content = () => (
                  <>
                    <div className="flex-shrink-0">
                      {getIssuerIcon(cert.issuer)}
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-900 text-sm md:text-base group-hover:text-stone-600 transition-colors">
                        {cert.name}
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-stone-500 mt-1">
                        <span className="font-medium">{cert.issuer}</span>
                        <span>•</span>
                        <span>{cert.date}</span>
                      </div>
                    </div>
                  </>
                );

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {cert.link ? (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 bg-white border border-stone-200 rounded-lg hover:shadow-md transition-all group hover:border-stone-300"
                      >
                        <Content />
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 p-4 bg-white border border-stone-200 rounded-lg hover:shadow-md transition-shadow group">
                        <Content />
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
