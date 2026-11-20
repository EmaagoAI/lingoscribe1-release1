import { LANGUAGES, liveVarieties } from "@/data/languages";

// What a sales enquiry can be about (labels in content/<locale>/sales.js).
export const SALES_INTERESTS = ["minutes", "api", "lingodub", "private", "language"];

// Languages to pick from: every language we have live, by language rather than
// dialect, leaving out English. "other" is added at the end.
export const SALES_LANGUAGES = [...new Set(liveVarieties().map((v) => v.language))]
    .filter((id) => id !== "en" && LANGUAGES[id]);

// Where the form posts (app/api/contact/route.js emails it to the team).
export const SALES_ENDPOINT = "/api/contact";

export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
