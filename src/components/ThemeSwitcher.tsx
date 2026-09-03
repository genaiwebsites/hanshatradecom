"use client";

import { useEffect, useState } from "react";

type ThemeId = "heritage" | "maritime" | "terra" | "bran" | "granary" | "distillery" | "paddy" | "crest";

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
    title: "Maritime Cobalt",
    description: "Ocean Deep Navy & Beacon Amber — Kolkata Docklands & Breakbulk",
  },
  {
    id: "terra",
    label: "Terra",
    dotClass: "theme-dot-terra",
    title: "Raw Grain Terra",
    description: "Roasted Espresso & Saffron Clay — Mill-Gate Kilns & Provenance",
  },
  {
    id: "bran",
    label: "Bran",
    dotClass: "theme-dot-bran",
    title: "Toasted Bran & Jute",
    description: "Roasted Walnut & Golden Hessian — Mill-Gate Rice Bran & DORB",
  },
  {
    id: "granary",
    label: "Granary",
    dotClass: "theme-dot-granary",
    title: "Granary Earth & Golden Malt",
    description: "Earthy Moss Green, Roasted Walnut Bran & Golden Corn Malt",
  },
  {
    id: "distillery",
    label: "Distillery",
    dotClass: "theme-dot-distillery",
    title: "Golden DDGS & Copper",
    description: "Deep Moss, Burnished Copper & Corn Gold — Biofuel Feedstock",
  },
  {
    id: "paddy",
    label: "Paddy",
    dotClass: "theme-dot-paddy",
    title: "Emerald Paddy & Sprout",
    description: "Alpine Spruce, Celadon & Straw Gold — Mill-Gate Assay Purity",
  },
  {
    id: "crest",
    label: "Crest",
    dotClass: "theme-dot-crest",
    title: "Hansha Crest & Sheaf",
    description: "Midnight Velvet, Meadow Green & Solar Wheat — Official Brand Logo",
  },
];

const VALID_THEMES = new Set<string>(["heritage", "maritime", "terra", "bran", "granary", "distillery", "paddy", "crest"]);

export default function ThemeSwitcher() {
  const [activeTheme, setActiveTheme] = useState<ThemeId>("granary");
  const [mounted, setMounted] = useState(false);

  // Theme switcher disabled from frontend for now
  const SHOW_SWITCHER = false;
  if (!SHOW_SWITCHER) return null;

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("hansha-theme") as ThemeId | null;
    if (saved && VALID_THEMES.has(saved)) {
      setActiveTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    } else {
      const current = document.documentElement.getAttribute("data-theme") as ThemeId | null;
      if (current && VALID_THEMES.has(current)) {
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
