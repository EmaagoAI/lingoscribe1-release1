// Every link on the site, in one place. Pages refer to these keys, never to
// raw paths, so a URL changes here and nowhere else.

// Pages on the platform (the app), where accounts live.
export const EXTERNAL = {
    signIn: "https://platform.lingoscribe.ai/login",
    signUp: "https://platform.lingoscribe.ai/signup",
    apiDocs: "https://platform.lingoscribe.ai/dashboard/api-docs",
};

// Pages on this site.
export const ROUTES = {
    home: "/",
    platform: "/platform",
    whatsapp: "/platform#whatsapp",
    channels: "/platform#channels",
    developers: "/developers",
    lingodub: "/lingodub",
    languages: "/languages",
    build: "/how-we-build",
    buildStory: "/how-we-build#story",
    buildAnywhere: "/how-we-build#anywhere",
    solutions: "/solutions",
    trust: "/trust",
    sales: "/talk-to-sales",
    speakers: "/native-speakers",
    signup: EXTERNAL.signUp, // "Start free" and sign-up go straight to the platform
    privacy: "/privacy-policy",
};

// Where the public API is served (the same address the platform's docs show).
export const API_BASE_URL = "https://api.lingoscribe.ai";

export const CONTACT_EMAIL = "contact@lingoscribe.ai";

// The Lingoscribe WhatsApp bot: the number as shown, and the link that opens a chat.
export const WHATSAPP = { display: "+92 325 9905711", url: "https://wa.me/923259905711" };

// Anchor of the hero player, so other sections can send the visitor to it.
export const PLAYER_ANCHOR = "play";
