import { CONTACT_EMAIL, EXTERNAL, ROUTES } from "./routes";

// The structure of the menus. Labels come from content (content/<locale>/common.js)
// under the same ids, so menus can be translated without touching this file.

// `hideOnSelf`: left out on its own page (Home isn't listed on the home page).
export const MAIN_NAV = [
    { id: "home", href: ROUTES.home, hideOnSelf: true },
    { id: "platform", href: ROUTES.platform },
    { id: "lingodub", href: ROUTES.lingodub },
    { id: "languages", href: ROUTES.languages },
    { id: "developers", href: ROUTES.developers },
    { id: "build", href: ROUTES.build },
];

export const FOOTER_NAV = [
    {
        id: "product",
        links: [
            { id: "platform", href: ROUTES.platform },
            { id: "whatsapp", href: ROUTES.whatsapp },
            { id: "developers", href: ROUTES.developers },
            { id: "lingodub", href: ROUTES.lingodub },
            { id: "languages", href: ROUTES.languages },
        ],
    },
    {
        id: "company",
        links: [
            { id: "build", href: ROUTES.build },
            { id: "solutions", href: ROUTES.solutions },
            { id: "trust", href: ROUTES.trust },
            { id: "sales", href: ROUTES.sales },
        ],
    },
    {
        id: "contact",
        links: [
            { id: "email", href: `mailto:${CONTACT_EMAIL}`, label: CONTACT_EMAIL },
            { id: "signIn", href: EXTERNAL.signIn },
            { id: "privacy", href: ROUTES.privacy },
        ],
    },
];
