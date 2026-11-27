import { ROUTES } from "@/config/routes";

// Structure for the LingoDub page: what's listed, in what order, and where it
// links. The words for each item are in content/<locale>/lingodub.js.

// The editor screenshot (size is the file's own, for layout).
export const EDITOR_IMAGE = { src: "/images/lingodub-editor.webp", width: 2400, height: 1311 };

// The languages in the demo player, with the same sample line in each.
// The first is the source; the rest are the versions you can dub into.
export const DUB_LANGS = [
    { id: "ur", name: "Urdu", native: "اردو", line: "سیلابی پانی کم ہو رہا ہے۔" },
    { id: "pa", name: "Punjabi", native: "پنجابی", line: "سیلابی پانی گھٹ رہیا اے۔" },
    { id: "ps", name: "Pashto", native: "پښتو", line: "سېلابي اوبه کمېږي." },
    { id: "sd", name: "Sindhi", native: "سنڌي", line: "سيلابي پاڻي گھٽجي رهيو آهي." },
    { id: "ar", name: "Arabic", native: "العربية", line: "مياه الفيضان تنخفض." },
];
export const DUB_SOURCE = 0;
export const DUB_DEFAULT = 2; // Pashto

// The pipeline stages, in order; the tabs advance on their own every STAGE_MS.
export const STAGES = ["separate", "understand", "translate", "voice", "rebuild"];
export const STAGE_MS = 3200;

export const REVIEW_ITEMS = ["breaks", "transcript", "speaker", "translation", "voice", "timing"];
export const FEATURES = ["signoff", "accent", "redo", "preview"];
export const USES = ["news", "education", "creators", "public"];

// LingoDub is invite-only, so its main action goes to sales.
export const LINKS = {
    invite: ROUTES.sales,
    cta: { primary: ROUTES.sales, secondary: ROUTES.platform },
};
