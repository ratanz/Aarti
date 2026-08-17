"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  className?: string;
  variant?: "pill" | "icon";
}

export default function ThemeToggle({ className = "", variant = "icon" }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={`w-9 h-9 rounded-full bg-zinc-800/40 border border-white/10 ${className}`}
        aria-hidden="true"
      />
    );
  }

  const isDark = theme === "dark";

  if (variant === "pill") {
    return (
      <button
        onClick={toggleTheme}
        aria-label={isDark ? "Switch to Light theme" : "Switch to Dark theme"}
        title={isDark ? "Switch to Light theme" : "Switch to Dark theme"}
        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-300 ${
          isDark
            ? "bg-zinc-900/80 hover:bg-zinc-800 border-white/10 text-amber-300 hover:text-amber-200"
            : "bg-white/90 hover:bg-white border-zinc-200 text-amber-700 hover:text-amber-800 shadow-sm"
        } ${className}`}
      >
        {isDark ? (
          <>
            <Sun className="w-3.5 h-3.5 text-amber-400 animate-in spin-in-180 duration-300" />
            <span className="hidden sm:inline">Light</span>
          </>
        ) : (
          <>
            <Moon className="w-3.5 h-3.5 text-indigo-600 animate-in spin-in-180 duration-300" />
            <span className="hidden sm:inline">Dark</span>
          </>
        )}
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to Light theme" : "Switch to Dark theme"}
      title={isDark ? "Switch to Light theme" : "Switch to Dark theme"}
      className={`relative p-2 rounded-full transition-all duration-300 group ${
        isDark
          ? "bg-zinc-900/80 hover:bg-zinc-800/90 border border-white/10 text-zinc-300 hover:text-amber-300"
          : "bg-white/85 hover:bg-white border border-black/10 text-zinc-700 hover:text-amber-700 shadow-sm"
      } ${className}`}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-4 h-4 text-amber-400 group-hover:rotate-45 group-hover:scale-110 transition-transform duration-300" />
        ) : (
          <Moon className="w-4 h-4 text-amber-700 group-hover:-rotate-12 group-hover:scale-110 transition-transform duration-300" />
        )}
      </div>
    </button>
  );
}
