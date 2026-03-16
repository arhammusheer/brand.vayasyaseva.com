import type { Metadata } from "next";

import { BRAND_CONTENT } from "../content/brand";

type BrandContent = typeof BRAND_CONTENT;

export type BrandSection =
  BrandContent["sections"][keyof BrandContent["sections"]];

export const orderedNavItems = [...BRAND_CONTENT.navigation.items].sort(
  (left, right) => left.order - right.order,
);

export const orderedSections = Object.values(BRAND_CONTENT.sections).sort(
  (left, right) => Number.parseInt(left.header.number, 10) - Number.parseInt(right.header.number, 10),
);

export const sectionById: ReadonlyMap<string, BrandSection> = new Map(
  orderedSections.map((section) => [section.header.id, section] as const),
);

export const sectionSummaryById: ReadonlyMap<string, string> = new Map(
  orderedSections.map((section) => [section.header.id, section.header.summary] as const),
);

export const navHrefToAnchor = (href: string) => href.replace(/^#/, "");

export const anchorsFromNavigation = orderedNavItems.map((item) => navHrefToAnchor(item.href));

export const getSectionForNavItem = (id: string) => sectionById.get(id);

export const tokenCssVariables = BRAND_CONTENT.fundamentals.colorTokens.reduce<
  Record<string, string>
>((accumulator, token) => {
  accumulator[token.token] = token.hex;
  return accumulator;
}, {});

export const handbookMetadata = {
  title: "Vayasya Brand Handbook",
  description:
    "Official Vayasya Brand Handbook covering identity standards, logo usage, color tokens, typography, voice guidelines, and governance for consistent communication.",
  sectionCount: orderedSections.length,
  version: BRAND_CONTENT.sections.footerVersioning.footer.version,
  lastUpdated: BRAND_CONTENT.sections.footerVersioning.footer.effectiveDate,
};

export const brandSiteUrl = "https://brand.vayasyaseva.com";

export const sanitizeTokenMentions = (value: string) =>
  value.replace(/`?--vy-[a-z0-9-]+`?/gi, (rawToken) => {
    const token = rawToken.replace(/`/g, "").toLowerCase().replace(/^--vy-/, "");
    return token.replace(/-/g, " ");
  });

export const buildBrandPageMetadata = ({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata => {
  const url = new URL(path, brandSiteUrl).toString();

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: handbookMetadata.title,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
};

export const activeSectionLabel = (activeId: string | null) => {
  if (!activeId) {
    return orderedSections[0]?.header;
  }

  return sectionById.get(activeId)?.header ?? orderedSections[0]?.header;
};

export const canonicalSectionUrl = (sectionAnchor: string) => {
  if (typeof window === "undefined") {
    return `#${sectionAnchor}`;
  }

  return `${window.location.origin}${window.location.pathname}#${sectionAnchor}`;
};

export const smoothScrollToSection = (sectionAnchor: string) => {
  const section = document.getElementById(sectionAnchor);
  if (!section) {
    return;
  }

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  section.scrollIntoView({
    block: "start",
    behavior: prefersReducedMotion ? "auto" : "smooth",
  });
};

export const formatReadinessSla = (businessDays: number) => `${businessDays} business days`;
