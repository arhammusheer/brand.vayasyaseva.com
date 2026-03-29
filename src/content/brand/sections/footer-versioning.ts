import type { BrandFooter } from "../../../lib/types/brand";

export const FOOTER_VERSIONING_SECTION = {
  footer: {
    version: "v4.1.0",
    effectiveDate: "30 Mar 2026",
    owner: "Vayasya Brand Office",
    contact: "brand-office@vayasyaseva.com",
  },
} as const satisfies {
  footer: BrandFooter;
};
