// Logo asset paths (relative to /public, served from root)
// In Next.js, files in /public are served from the root URL

export const MASTER_LOGO_LIGHT = "/brand/logos/master-logo-light.png";
export const MASTER_LOGO_DARK = "/brand/logos/master-logo-dark.svg";

export const VERTICAL_LOGOS = {
  seva: "/brand/logos/vertical-seva.svg",
  setu: "/brand/logos/vertical-setu.svg",
  kaushal: "/brand/logos/vertical-kaushal.svg",
  prabandh: "/brand/logos/vertical-prabandh.svg",
} as const;

// Logo display metadata
export const LOGO_METADATA = {
  masterLight: {
    path: MASTER_LOGO_LIGHT,
    alt: "Vayasya master logo on light background",
    width: 180,
    height: 60,
  },
  masterDark: {
    path: MASTER_LOGO_DARK,
    alt: "Vayasya master logo on dark background",
    width: 180,
    height: 60,
  },
} as const;
