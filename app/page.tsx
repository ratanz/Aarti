import Link from "next/link";
import FloatingDock from "@/components/FloatingDock";
import { Flame, Sparkles, ArrowUpRight, Compass, ShieldCheck } from "lucide-react";
import { SACRED_TEXTS } from "@/data/texts";

export default function Home() {
  const chalisa = SACRED_TEXTS["bhairav-chalisa"];
  const ashtakam = SACRED_TEXTS["bhairav-ashtakam"];
  const names108 = SACRED_TEXTS["bhairav-108-names"];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Ambient background glows */}
      <div className="ambient-glow" />
      <div className="ambient-grid" />

      {/* Top Header Bar with Sacred Insignia (No duplicate theme switch) */}
      <header className="absolute top-8 sm:top-12 left-1/2 -translate-x-1/2 z-10 flex items-center gap-3 text-xs tracking-[0.35em] uppercase font-light select-none">
        <span className="w-8 sm:w-12 h-[1px] bg-gradient-to-r from-transparent to-zinc-400 dark:to-zinc-700" />
        <span className="font-devanagari text-zinc-700 dark:text-zinc-400 tracking-wider font-semibold">॥ ॐ नमः शिवाय ॥</span>
        <span className="w-8 sm:w-12 h-[1px] bg-gradient-to-l from-transparent to-zinc-400 dark:to-zinc-700" />
      </header>

      {/* Main Center Content */}
      <main className="relative z-10 flex flex-col items-center justify-center text-center max-w-4xl mx-auto py-20">
        {/* Subtle Pill Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 dark:bg-amber-500/[0.04] text-amber-800 dark:text-amber-300 text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm shadow-sm">
          <Compass className="w-3.5 h-3.5 text-amber-700 dark:text-amber-400" />
          <span>Sacred Sanctuary</span>
        </div>

        {/* Big Center "Aarti" text with crisp contrast in light & dark */}
        <div className="relative group cursor-default">
          <h1 className="font-cinzel text-7xl sm:text-8xl md:text-9xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-zinc-950 via-zinc-800 to-zinc-600 dark:from-white dark:via-zinc-200 dark:to-zinc-400 select-none drop-shadow-sm dark:drop-shadow-[0_10px_35px_rgba(0,0,0,0.9)]">
            Aarti
          </h1>
          <div className="absolute -inset-x-8 -inset-y-4 bg-amber-500/10 dark:bg-amber-500/5 blur-2xl rounded-full pointer-events-none -z-10 group-hover:bg-amber-500/15 dark:group-hover:bg-amber-500/10 transition-colors duration-700" />
        </div>

        {/* Subtitle */}
        <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 font-light max-w-md mx-auto leading-relaxed">
          Sacred verses, chalisas, and stotras for daily meditation, protection, and inner peace.
        </p>

        {/* Quick Access Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl mt-12 mb-20 text-left">
          {/* Bhairav Chalisa Quick Card */}
          <Link
            href="/bhairav-chalisa"
            className="group relative p-5 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between overflow-hidden"
          >
            <div className="flex items-start justify-between">
              <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 text-amber-700 dark:text-amber-400 group-hover:scale-110 transition-all duration-300">
                <Flame className="w-5 h-5" />
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-400 dark:text-zinc-600 group-hover:text-amber-700 dark:group-hover:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
            </div>

            <div className="mt-6">
              <div className="text-xs uppercase tracking-widest text-amber-700 dark:text-amber-500/90 font-semibold">
                {chalisa.versesCount}
              </div>
              <h2 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-amber-700 dark:group-hover:text-amber-200 transition-colors font-cinzel mt-0.5">
                {chalisa.title}
              </h2>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 font-devanagari mt-1 line-clamp-1 font-medium">
                {chalisa.titleHindi}
              </p>
            </div>
          </Link>

          {/* Bhairav Ashtakam Quick Card */}
          <Link
            href="/bhairav-ashtakam"
            className="group relative p-5 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between overflow-hidden"
          >
            <div className="flex items-start justify-between">
              <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 text-amber-700 dark:text-amber-400 group-hover:scale-110 transition-all duration-300">
                <Sparkles className="w-5 h-5" />
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-400 dark:text-zinc-600 group-hover:text-amber-700 dark:group-hover:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
            </div>

            <div className="mt-6">
              <div className="text-xs uppercase tracking-widest text-amber-700 dark:text-amber-500/90 font-semibold">
                {ashtakam.versesCount}
              </div>
              <h2 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-amber-700 dark:group-hover:text-amber-200 transition-colors font-cinzel mt-0.5">
                {ashtakam.title}
              </h2>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 font-devanagari mt-1 line-clamp-1 font-medium">
                {ashtakam.titleHindi}
              </p>
            </div>
          </Link>

          {/* 108 Names Quick Card */}
          <Link
            href="/bhairav-108-names"
            className="group relative p-5 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between overflow-hidden"
          >
            <div className="flex items-start justify-between">
              <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 text-amber-700 dark:text-amber-400 group-hover:scale-110 transition-all duration-300">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-400 dark:text-zinc-600 group-hover:text-amber-700 dark:group-hover:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
            </div>

            <div className="mt-6">
              <div className="text-xs uppercase tracking-widest text-amber-700 dark:text-amber-500/90 font-semibold">
                {names108.versesCount}
              </div>
              <h2 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-amber-700 dark:group-hover:text-amber-200 transition-colors font-cinzel mt-0.5">
                108 Sacred Names
              </h2>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 font-devanagari mt-1 line-clamp-1 font-medium">
                {names108.titleHindi}
              </p>
            </div>
          </Link>
        </div>
      </main>

      {/* Floating Bottom Dock (Theme Switch is inside here only) */}
      <FloatingDock />
    </div>
  );
}
