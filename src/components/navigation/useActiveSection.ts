"use client";

import { useEffect, useState } from "react";

import type { NavigationItem } from "@/content/types";

export function useActiveSection(items: readonly NavigationItem[]) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((section): section is HTMLElement => section !== null);

    function updateFromPosition() {
      const marker = window.innerHeight * 0.35;
      const currentSection = sections
        .filter((section) => section.getBoundingClientRect().top <= marker)
        .at(-1);

      setActiveSection(currentSection?.id ?? sections[0]?.id ?? null);
    }

    updateFromPosition();

    if (sections.length === 0) {
      return undefined;
    }

    window.addEventListener("scroll", updateFromPosition, { passive: true });
    window.addEventListener("hashchange", updateFromPosition);

    return () => {
      window.removeEventListener("scroll", updateFromPosition);
      window.removeEventListener("hashchange", updateFromPosition);
    };
  }, [items]);

  return activeSection;
}
