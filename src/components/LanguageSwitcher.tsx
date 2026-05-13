"use client";

import { useLanguage, Language } from "@/context/LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: "pt", label: "Português", flag: "🇧🇷" },
    { code: "en", label: "English", flag: "🇺🇸" },
    { code: "jp", label: "日本語", flag: "🇯🇵" },
  ];

  return (
    <div className="fixed top-4 right-4 z-50 flex gap-2 bg-[#f4eed8]/90 backdrop-blur-sm p-2 rounded-full shadow-sm border border-[#c4b89a]/60">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
            language === lang.code
              ? "bg-[#1c1208] text-[#f4eed8] shadow-md"
              : "text-[#7a6a52] hover:bg-[#e4dbc4]"
          }`}
          aria-label={`Switch to ${lang.label}`}
        >
          <span className="mr-1">{lang.flag}</span>
          <span className="hidden sm:inline">{lang.code.toUpperCase()}</span>
        </button>
      ))}
    </div>
  );
}
