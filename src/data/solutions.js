import { ROUTES } from "@/config/routes";

// Sectors with their own page section, in tab order. Ids match SECTORS in
// data/home.js; words are in content/<locale>/solutions.js.
export const SOLUTION_SECTORS = [
    { id: "contactCentres", products: ["api", "platform"] },
    { id: "media", products: ["platform", "lingodub"] },
];

// Where each product named under "Products used" links.
export const PRODUCT_LINKS = {
    api: ROUTES.developers,
    platform: ROUTES.platform,
    lingodub: ROUTES.lingodub,
};
