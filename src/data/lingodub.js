import { ROUTES } from "@/config/routes";

// Structure for the LingoDub page: what's listed, in what order, and where it
// links. The words for each item are in content/<locale>/lingodub.js.

// The editor screenshot (size is the file's own, for layout).
export const EDITOR_IMAGE = { src: "/images/lingodub-editor.webp", width: 2400, height: 1311 };

export const STEPS = ["upload", "translate", "review", "export"];
export const FEATURES = ["lines", "speakers", "accent", "preview"];
export const USES = ["news", "education", "creators", "public"];

// LingoDub is invite-only, so its main action goes to sales.
export const LINKS = {
    invite: ROUTES.sales,
    how: "#how",
    cta: { primary: ROUTES.sales, secondary: ROUTES.platform },
};
