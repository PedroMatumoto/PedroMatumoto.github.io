"use client";

import React, { createContext, useContext } from "react";
import { portfolioData as enData } from "@/data/portfolio-en";

export type Language = "pt" | "en" | "jp";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof enData;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const language: Language = "en";
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const handleSetLanguage = (_lang: Language) => {};

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleSetLanguage, t: enData }}
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
