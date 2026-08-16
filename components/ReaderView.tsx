"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SacredText } from "@/data/texts";
import FloatingDock from "@/components/FloatingDock";
import {
  ArrowLeft,
  BookOpen,
  Volume2,
  VolumeX,
  Type,
  Check,
  Copy,
  Sparkles,
  Share2,
  Info,
} from "lucide-react";

interface ReaderViewProps {
  data: SacredText;
}

export default function ReaderView({ data }: ReaderViewProps) {
  const [fontSize, setFontSize] = useState<"sm" | "md" | "lg" | "xl">("md");
  const [showTransliteration, setShowTransliteration] = useState(true);
  const [showMeaning, setShowMeaning] = useState(true);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [isCopiedAll, setIsCopiedAll] = useState(false);

  // Font size classes
  const verseFontSizes = {
    sm: "text-lg sm:text-xl leading-relaxed",
    md: "text-xl sm:text-2xl leading-loose",
    lg: "text-2xl sm:text-3xl leading-loose",
    xl: "text-3xl sm:text-4xl leading-loose",
  };

  const copyVerse = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const copyFullText = () => {
    const fullText = `${data.titleHindi} (${data.title})\n\n` +
      data.verses.map((v) => v.lines.join("\n")).join("\n\n");
    navigator.clipboard.writeText(fullText);
    setIsCopiedAll(true);
    setTimeout(() => setIsCopiedAll(false), 2500);
  };

  return (
    <div className="relative min-h-screen bg-[#050507] text-[#ededed] pb-36">
      {/* Background ambient lighting */}
      <div className="ambient-glow" />
      <div className="ambient-grid" />

      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#050507]/80 border-b border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-zinc-400 hover:text-amber-300 transition-colors text-sm font-medium group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-cinzel tracking-wider">Aarti</span>
          </Link>

          {/* Quick Reader Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Font size toggles */}
            <div className="flex items-center bg-zinc-900/90 border border-white/10 rounded-full p-1 text-xs">
              <button
                onClick={() => setFontSize("sm")}
                className={`px-2.5 py-1 rounded-full transition-all ${
                  fontSize === "sm" ? "bg-amber-500/20 text-amber-300 font-semibold" : "text-zinc-400 hover:text-zinc-200"
                }`}
                title="Small text"
              >
                A-
              </button>
              <button
                onClick={() => setFontSize("md")}
                className={`px-2.5 py-1 rounded-full transition-all ${
                  fontSize === "md" ? "bg-amber-500/20 text-amber-300 font-semibold" : "text-zinc-400 hover:text-zinc-200"
                }`}
                title="Medium text"
              >
                A
              </button>
              <button
                onClick={() => setFontSize("lg")}
                className={`px-2.5 py-1 rounded-full transition-all ${
                  fontSize === "lg" ? "bg-amber-500/20 text-amber-300 font-semibold" : "text-zinc-400 hover:text-zinc-200"
                }`}
                title="Large text"
              >
                A+
              </button>
            </div>

            {/* Copy Full Text */}
            <button
              onClick={copyFullText}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900/90 hover:bg-zinc-800 border border-white/10 text-xs text-zinc-300 hover:text-amber-200 transition-colors"
              title="Copy Complete Text"
            >
              {isCopiedAll ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-300 hidden sm:inline">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Copy All</span>
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Main Text Content */}
      <main className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14">
        {/* Header Title Section */}
        <div className="text-center pb-10 border-b border-white/[0.06]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/[0.05] text-amber-300 text-xs font-medium uppercase tracking-widest mb-4">
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span>{data.category} • {data.readingTime}</span>
          </div>

          <h1 className="font-devanagari text-3xl sm:text-4xl md:text-5xl font-bold text-amber-100/95 tracking-wide mb-3">
            {data.titleHindi}
          </h1>

          <h2 className="font-cinzel text-lg sm:text-xl text-zinc-300 font-medium tracking-wide">
            {data.title}
          </h2>

          <p className="mt-3 text-sm text-zinc-400 max-w-xl mx-auto font-light leading-relaxed">
            {data.introduction}
          </p>

          {/* Toggle Switches for Transliteration and Meaning */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            <button
              onClick={() => setShowTransliteration(!showTransliteration)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 ${
                showTransliteration
                  ? "bg-amber-500/10 border-amber-500/30 text-amber-300"
                  : "bg-zinc-900/50 border-white/10 text-zinc-400 hover:text-zinc-200"
              }`}
            >
              English Transliteration: {showTransliteration ? "ON" : "OFF"}
            </button>

            <button
              onClick={() => setShowMeaning(!showMeaning)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 ${
                showMeaning
                  ? "bg-amber-500/10 border-amber-500/30 text-amber-300"
                  : "bg-zinc-900/50 border-white/10 text-zinc-400 hover:text-zinc-200"
              }`}
            >
              English Meaning: {showMeaning ? "ON" : "OFF"}
            </button>
          </div>
        </div>

        {/* Verses List */}
        <div className="mt-10 space-y-8 sm:space-y-10">
          {data.verses.map((verse, index) => {
            const verseText = verse.lines.join("\n");

            return (
              <article
                key={index}
                className="group relative p-6 sm:p-8 rounded-2xl glass-panel transition-all duration-300 hover:border-amber-500/20"
              >
                {/* Verse Header Badge / Type */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase font-mono tracking-wider text-amber-500/80 font-medium">
                    {verse.type === "doha"
                      ? "॥ दोहा ॥"
                      : verse.type === "phala"
                      ? "॥ फलश्रुति ॥"
                      : verse.number
                      ? `Verse ${verse.number}`
                      : `Stanza ${index + 1}`}
                  </span>

                  <button
                    onClick={() => copyVerse(verseText, index)}
                    className="opacity-60 group-hover:opacity-100 p-1.5 rounded-lg hover:bg-white/10 text-zinc-400 hover:text-amber-300 transition-all"
                    title="Copy this verse"
                  >
                    {copiedIndex === index ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* Devanagari Verses */}
                <div className={`font-devanagari text-center font-medium text-zinc-100 tracking-wide ${verseFontSizes[fontSize]} space-y-1`}>
                  {verse.lines.map((line, lIdx) => (
                    <p key={lIdx} className="drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                      {line}
                    </p>
                  ))}
                </div>

                {/* English Transliteration */}
                {showTransliteration && verse.transliteration && (
                  <div className="mt-5 pt-4 border-t border-white/[0.06] text-center">
                    <div className="text-xs sm:text-sm text-amber-200/70 italic font-sans leading-relaxed space-y-0.5">
                      {verse.transliteration.map((tLine, tIdx) => (
                        <p key={tIdx}>{tLine}</p>
                      ))}
                    </div>
                  </div>
                )}

                {/* English Meaning */}
                {showMeaning && verse.meaning && (
                  <div className="mt-4 pt-3 border-t border-white/[0.04] text-center">
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
                      <span className="text-amber-400/80 font-medium">Meaning: </span>
                      {verse.meaning}
                    </p>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* Benefits Section */}
        {data.benefits && data.benefits.length > 0 && (
          <section className="mt-14 p-6 sm:p-8 rounded-2xl glass-panel border-amber-500/20">
            <h3 className="text-base font-semibold text-amber-200 font-cinzel tracking-wider mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              Spiritual Significance & Benefits
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-zinc-400">
              {data.benefits.map((benefit, bIdx) => (
                <li key={bIdx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>

      {/* Persistent Bottom Floating Dock */}
      <FloatingDock />
    </div>
  );
}
