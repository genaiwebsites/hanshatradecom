"use client";

import { useEffect, useState } from "react";

type ThemeId = "heritage" | "maritime" | "terra";

interface ThemeOption {
  id: ThemeId;
  label: string;
  dotClass: string;
  title: string;
  description: string;
}

const THEMES: ThemeOption[] = [
  {
    id: "heritage",
    label: "Heritage",
    dotClass: "theme-dot-heritage",
    title: "Hooghly Heritage",
    description: "Bengal Forest Green & Harvest Gold — Traditional Commodity House",
  },
  {
    id: "maritime",
    label: "Maritime",
    dotClass: "theme-dot-maritime",
    title: "Maritime Port & Cobalt",
    description: "Ocean Deep Navy & Beacon Amber — Kolkata Docklands & Breakbulk",
  },
  {
    id: "terra",
    label: "Terra",
    dotClass: "theme-dot-terra",
    title: "Raw Grain Terra",
    description: "Roasted Espresso & Spiced Terracotta — Mill-Gate Provenance & Jute",
  },
];

export default function ThemeSwitcher() {
  const [activeTheme, setActiveTheme] = useState<ThemeId>("heritage");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("hansha-theme") as ThemeId | null;
    if (saved && (saved === "heritage" || saved === "maritime" || saved === "terra")) {
      setActiveTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    } else {
      const current = document.documentElement.getAttribute("data-theme") as ThemeId | null;
      if (current && (current === "heritage" || current === "maritime" || current === "terra")) {
        setActiveTheme(current);
      }
    }
  }, []);

  const switchTheme = (themeId: ThemeId) => {
    setActiveTheme(themeId);
    document.documentElement.setAttribute("data-theme", themeId);
    try {
      localStorage.setItem("hansha-theme", themeId);
    } catch (e) {
      // Ignore localStorage errors (e.g. private browsing)
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <aside
      className="theme-switcher-pill"
      aria-label="Color Scheme Switcher"
      role="radiogroup"
    >
      {THEMES.map((theme) => {
        const isActive = activeTheme === theme.id;
        return (
          <button
            key={theme.id}
            id={`theme-btn-${theme.id}`}
            type="button"
            role="radio"
            aria-checked={isActive}
            className={`theme-opt-btn ${isActive ? "active" : ""}`}
            onClick={() => switchTheme(theme.id)}
            title={`${theme.title} — ${theme.description}`}
            aria-label={`Switch to ${theme.title}: ${theme.description}`}
          >
            <span className={`theme-dot ${theme.dotClass}`} aria-hidden="true" />
            <span className="theme-label">{theme.label}</span>
          </button>
        );
      })}
    </aside>
  );
}
