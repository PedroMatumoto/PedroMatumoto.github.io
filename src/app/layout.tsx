import type { Metadata } from "next";
import { Inter, Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const notoSerifJP = Noto_Serif_JP({
  weight: ["200", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-noto-serif-jp",
});

export const metadata: Metadata = {
  title: "Portfolio | Pedro Matumoto",
  description: "松本 優吾",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${notoSerifJP.variable} font-sans antialiased bg-stone-50 text-stone-900 selection:bg-stone-900 selection:text-stone-50`}
      >
        <LanguageProvider>
          <LanguageSwitcher />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
