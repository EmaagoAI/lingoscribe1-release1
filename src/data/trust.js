import { ROUTES } from "@/config/routes";

// The promise cards on /trust, in order, each with the privacy-policy section
// it restates (app/privacy-policy/page.js). If the policy is renumbered or
// reworded, update these and content/<locale>/trust.js together.
export const PROMISES = [
    { id: "training", section: 5 },
    { id: "retention", section: 8 },
    { id: "security", section: 9 },
    { id: "selling", section: 6 },
    { id: "deletion", section: 8 },
    { id: "breach", section: 10 },
];

// Closing band: security reviews go to sales first.
export const TRUST_CTA_LINKS = { primary: ROUTES.sales, secondary: ROUTES.signup };
