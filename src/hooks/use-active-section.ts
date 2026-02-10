"use client";

import { useEffect, useState } from "react";

type UseActiveSectionResult = {
  activeSectionId: string | null;
  progress: number;
};

export function useActiveSection(sectionAnchors: readonly string[]): UseActiveSectionResult {
  const [activeSectionId, setActiveSectionId] = useState<string | null>(
    sectionAnchors[0] ?? null,
  );
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!sectionAnchors.length) {
      return;
    }

    const sectionElements = sectionAnchors
      .map((sectionId) => document.getElementById(sectionId))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sectionElements.length) {
      return;
    }

    let frameId: number | null = null;

    const updateActiveSection = () => {
      const scrollLine = window.innerHeight * 0.35;
      let nextActiveId = sectionElements[0].id;

      for (const section of sectionElements) {
        if (section.getBoundingClientRect().top <= scrollLine) {
          nextActiveId = section.id;
          continue;
        }

        break;
      }

      const reachedPageBottom =
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;

      if (reachedPageBottom) {
        nextActiveId = sectionElements[sectionElements.length - 1].id;
      }

      setActiveSectionId((currentId) =>
        currentId === nextActiveId ? currentId : nextActiveId,
      );
    };

    const scheduleUpdate = () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }

      frameId = window.requestAnimationFrame(() => {
        frameId = null;
        updateActiveSection();
      });
    };

    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }

      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, [sectionAnchors]);

  useEffect(() => {
    const updateProgress = () => {
      const totalScrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (totalScrollableHeight <= 0) {
        setProgress(0);
        return;
      }

      setProgress(
        Math.min(1, Math.max(0, window.scrollY / totalScrollableHeight)),
      );
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return { activeSectionId, progress };
}
