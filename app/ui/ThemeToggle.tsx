"use client";

import { useEffect, useState } from "react";
import { LuMoon, LuSun } from "react-icons/lu";

export type Theme = "light" | "dark";
export const THEME_STORAGE_KEY = "theme";

// Runs in <head> before first paint so the page never flashes the wrong theme.
// Uses the saved choice, otherwise the visitor's system preference.
export const themeInitScript = `(function(){try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";}document.documentElement.setAttribute("data-theme",t);}catch(e){document.documentElement.setAttribute("data-theme","dark");}})();`;

const ThemeToggle = ({ toLightLabel, toDarkLabel }: { toLightLabel: string; toDarkLabel: string }) => {
  // Unknown until mounted: the server can't know the visitor's theme
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    setTheme(root.getAttribute("data-theme") === "light" ? "light" : "dark");

    // Follow system changes while the visitor hasn't picked a theme explicitly
    const media = window.matchMedia("(prefers-color-scheme: light)");
    const onChange = (e: MediaQueryListEvent) => {
      if (localStorage.getItem(THEME_STORAGE_KEY)) return;
      const next: Theme = e.matches ? "light" : "dark";
      root.setAttribute("data-theme", next);
      setTheme(next);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // Storage unavailable (private mode): the choice just won't persist
    }
    setTheme(next);
  };

  const label = theme === "light" ? toDarkLabel : toLightLabel;

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={label}
      title={label}
      disabled={theme === null}
    >
      {/* Both icons rendered; CSS shows the right one, so there's no flicker before mount */}
      <LuSun className="theme-icon-sun" aria-hidden="true" />
      <LuMoon className="theme-icon-moon" aria-hidden="true" />
    </button>
  );
};

export default ThemeToggle;
