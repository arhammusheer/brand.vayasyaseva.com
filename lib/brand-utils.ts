import { BRAND_CONTENT } from "../src/content/brand";

type BrandContent = typeof BRAND_CONTENT;

export type BrandSection =
  BrandContent["sections"][keyof BrandContent["sections"]];

export const orderedNavItems = [...BRAND_CONTENT.navigation.items].sort(
  (left, right) => left.order - right.order,
);

export const orderedSections = Object.values(BRAND_CONTENT.sections).sort(
  (left, right) => Number.parseInt(left.header.number, 10) - Number.parseInt(right.header.number, 10),
);

export const sectionById = new Map(
  orderedSections.map((section) => [section.header.id, section] as const),
);

export const sectionSummaryById = new Map(
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
  title: `${BRAND_CONTENT.fundamentals.brandName.full} | ${BRAND_CONTENT.navigation.title}`,
  description: BRAND_CONTENT.sections.philosophy.intro,
  sectionCount: orderedSections.length,
  version: BRAND_CONTENT.sections.footerVersioning.footer.version,
  lastUpdated: BRAND_CONTENT.sections.footerVersioning.footer.effectiveDate,
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
