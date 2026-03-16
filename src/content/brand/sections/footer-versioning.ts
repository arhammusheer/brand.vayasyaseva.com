import type { BrandFooter } from "../../../lib/types/brand";

export const FOOTER_VERSIONING_SECTION = {
  footer: {
    version: "v4.0.0",
    effectiveDate: "16 Mar 2026",
    owner: "Vayasya Brand Office",
    contact: "brand-office@vayasyaseva.com",
  },
} as const satisfies {
  footer: BrandFooter;
};
