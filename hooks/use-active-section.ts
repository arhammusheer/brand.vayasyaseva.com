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

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveSectionId(visible[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-28% 0px -55% 0px",
        threshold: [0.15, 0.35, 0.5, 0.75],
      },
    );

    sectionElements.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
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
