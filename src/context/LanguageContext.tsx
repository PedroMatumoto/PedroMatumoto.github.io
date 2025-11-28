"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { portfolioData as ptData } from "@/data/portfolio";

// Define the shape of the data based on the existing portfolioData
// We will need to create an English version of the data later
export type Language = "pt" | "en" | "jp";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof ptData; // The data object
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Placeholder for English data - we will populate this properly
// For now, we can clone the PT data or use a separate file
import { portfolioData as enData } from "@/data/portfolio-en";
import { portfolioData as jpData } from "@/data/portfolio-jp";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt");

  // Optional: Persist language preference
  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language;
    if (savedLang) {
      setLanguage(savedLang);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const getData = () => {
    switch (language) {
      case "en":
        return enData;
      case "jp":
        return jpData;
      case "pt":
      default:
        return ptData;
    }
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleSetLanguage, t: getData() }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
