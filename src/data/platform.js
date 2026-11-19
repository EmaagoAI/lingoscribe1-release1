import { ROUTES } from "@/config/routes";

// Structure for the platform page: what's listed, in what order, and where it
// links. The words for each item are in content/<locale>/platform.js.

// Screenshots of the product (sizes are the files' own, for layout).
export const SCREENSHOTS = {
    playground: { src: "/images/platform-playground.webp", width: 3024, height: 1656 },
    speechToText: { src: "/images/platform-speech-to-text.webp", width: 1725, height: 1206 },
};

// Text to speech: the languages it speaks (ids from data/languages.js) and its voices.
export const TTS_LANGUAGES = ["ur", "ps", "sd", "pa", "bal", "ar", "fa", "en"];
export const TTS_VOICES = ["male", "female", "clone"];

// "One account, four ways in".
export const CHANNELS = [
    { id: "browser", href: ROUTES.signup },
    { id: "api", href: ROUTES.developers },
    { id: "whatsapp", href: "#whatsapp" },
    { id: "youtube", href: ROUTES.signup },
];

// Pricing cards.
export const PLANS = [
    { id: "free", href: ROUTES.signup, variant: "primary" },
    { id: "teams", href: ROUTES.sales, variant: "secondary" },
];

// The example chat in the WhatsApp section answers this recording
// (see data/recordings.js), and draws voice notes with these bar heights.
export const WHATSAPP_DEMO = {
    recording: "waziri",
    lines: 2, // how many transcript lines the reply quotes
    bars: [8, 14, 20, 12, 22, 16, 10, 18, 24, 14, 8, 16, 20, 12, 18, 10, 14, 22, 12, 8],
    stepMs: 850, // time between messages
};
