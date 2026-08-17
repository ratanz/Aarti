"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Flame, Sparkles, ShieldCheck } from "lucide-react";

interface DockItem {
  id: string;
  name: string;
  nameHindi: string;
  href: string;
  badge: string;
  icon: React.ReactNode;
}

const dockItems: DockItem[] = [
  {
    id: "home",
    name: "Home",
    nameHindi: "आरती",
    href: "/",
    badge: "Sanctuary",
    icon: <Home className="w-5 h-5" />,
  },
  {
    id: "bhairav-chalisa",
    name: "Bhairav Chalisa",
    nameHindi: "श्री भैरव चालीसा",
    href: "/bhairav-chalisa",
    badge: "40 Verses",
    icon: <Flame className="w-5 h-5" />,
  },
  {
    id: "bhairav-ashtakam",
    name: "Bhairav Ashtakam",
    nameHindi: "कालभैरवाष्टकम्",
    href: "/bhairav-ashtakam",
    badge: "8 Stotras",
    icon: <Sparkles className="w-5 h-5" />,
  },
  {
    id: "bhairav-108-names",
    name: "108 Names",
    nameHindi: "१०८ नामावली",
    href: "/bhairav-108-names",
    badge: "108 Mantras",
    icon: <ShieldCheck className="w-5 h-5" />,
  },
];

export default function FloatingDock() {
  const pathname = usePathname();
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <nav 
      aria-label="Sacred Navigation Dock"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 max-w-[95vw]"
    >
      <div className="glass-dock rounded-full p-2 flex items-center gap-1.5 shadow-2xl transition-all duration-300 hover:border-amber-500/30">
        {dockItems.map((item) => {
          const isActive = pathname === item.href;
          const isHovered = hoveredId === item.id;

          return (
            <div key={item.id} className="relative flex items-center justify-center">
              {/* Tooltip */}
              {isHovered && (
                <div className="absolute -top-14 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-xl bg-zinc-900/95 border border-amber-500/20 text-zinc-100 text-xs shadow-xl backdrop-blur-md whitespace-nowrap pointer-events-none flex flex-col items-center animate-in fade-in zoom-in-95 duration-150 z-50">
                  <div className="font-medium text-amber-200">{item.name}</div>
                  <div className="text-[10px] text-zinc-400 font-devanagari">{item.nameHindi} • {item.badge}</div>
                  <div className="w-2 h-2 bg-zinc-900/95 rotate-45 absolute -bottom-1 border-r border-b border-amber-500/20" />
                </div>
              )}

              {/* Dock Button Link */}
              <Link
                href={item.href}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                aria-label={`${item.name} - ${item.nameHindi}`}
                className={`group relative flex items-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-full transition-all duration-300 ease-out select-none ${
                  isActive
                    ? "bg-gradient-to-r from-amber-500/20 to-amber-600/10 text-amber-200 border border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.2)]"
                    : "text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.06] border border-transparent"
                }`}
              >
                <span className={`transition-transform duration-300 group-hover:scale-110 ${
                  isActive ? "text-amber-400" : "text-zinc-400 group-hover:text-amber-300"
                }`}>
                  {item.icon}
                </span>

                <span className="text-xs sm:text-sm font-medium tracking-wide hidden sm:inline-block">
                  {item.name}
                </span>

                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_6px_#f59e0b] animate-pulse" />
                )}
              </Link>
            </div>
          );
        })}
      </div>
    </nav>
  );
}
