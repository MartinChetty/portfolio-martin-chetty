"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useSyncExternalStore } from "react";

import { Button } from "@/components/ui/Button";

type Theme = "light" | "dark";

const themeListeners = new Set<() => void>();

function getTheme(): Theme {
  if (typeof window === "undefined") {
    return "dark";
  }

  const savedTheme = window.localStorage.getItem("theme");

  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return "dark";
}

function subscribeToTheme(listener: () => void) {
  themeListeners.add(listener);

  function handleStorage(event: StorageEvent) {
    if (event.key === "theme") {
      listener();
    }
  }

  window.addEventListener("storage", handleStorage);

  return () => {
    themeListeners.delete(listener);
    window.removeEventListener("storage", handleStorage);
  };
}

function notifyThemeListeners() {
  themeListeners.forEach((listener) => listener());
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribeToTheme, getTheme, () => "dark");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";

    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("theme", nextTheme);
    notifyThemeListeners();
  }

  const isDark = theme === "dark";
  const label = isDark ? "Switch to light theme" : "Switch to dark theme";

  return (
    <Button
      aria-label={label}
      aria-pressed={isDark}
      className="size-[46px] min-h-0 p-0 xl:size-10"
      onClick={toggleTheme}
      variant="ghost"
    >
      {isDark ? (
        <Sun aria-hidden="true" className="h-5 w-5 shrink-0 xl:h-[18px] xl:w-[18px]" strokeWidth={2.25} />
      ) : (
        <Moon aria-hidden="true" className="h-5 w-5 shrink-0 xl:h-[18px] xl:w-[18px]" strokeWidth={2.25} />
      )}
    </Button>
  );
}
