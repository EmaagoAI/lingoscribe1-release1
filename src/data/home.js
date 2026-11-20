import { ROUTES } from "@/config/routes";

// Structure of the home page sections. Their text is in content/<locale>/home.js
// under the same ids.

// The tools tour. `cta` is where the tool's button goes; `soon` marks a tool
// that isn't released yet.
export const TOOLS = [
    { id: "transcribe", cta: ROUTES.signup },
    { id: "translate", cta: ROUTES.signup },
    { id: "analyse", cta: ROUTES.signup },
    { id: "speak", cta: ROUTES.signup },
    { id: "speechToSpeech", cta: ROUTES.signup },
    { id: "dub", cta: ROUTES.lingodub },
    { id: "voiceAgents", cta: ROUTES.sales, soon: true },
];

// How long each tool shows before the tour moves on, in ms.
export const TOOL_TOUR_MS = 6500;

// What the tool demos show. The transcript and translation demos use the
// first segments of this recording.
export const TOOL_DEMO = {
    recording: "waziri",
    analyse: {
        keywords: ["market", "money", "vegetables"],
    },
    speak: { language: "ur", text: "آپ کیسے ہیں؟", english: "How are you?" },
    speechToSpeech: {
        from: { language: "ur", text: "آپ کیسے ہیں؟" },
        english: "How are you?",
        to: { language: "ps", text: "ته څنګه یې؟" },
    },
    dubImage: "/images/lingodub-editor.webp",
    voiceAgent: {
        language: "ur",
        caller: { text: "میرا بل اس مہینے بہت زیادہ آیا ہے۔", english: "My bill is much higher this month." },
        agent: { text: "میں آپ کا بل دیکھ رہا ہوں۔ ایک لمحہ رکیے۔", english: "I’m looking at your bill. One moment, please." },
    },
};

// Ways to use Lingoscribe (How we build counts them for the "products" stage).
// `icon` is a lucide-react icon name.
export const WAYS = [
    { id: "browser", href: ROUTES.signup, icon: "AppWindow" },
    { id: "api", href: ROUTES.developers, icon: "Code" },
    { id: "whatsapp", href: ROUTES.whatsapp, icon: "MessageCircle" },
    { id: "youtube", href: ROUTES.channels, icon: "Youtube" },
    { id: "lingodub", href: ROUTES.lingodub, icon: "Clapperboard" },
];

// Hours of speech data so far. The bars are drawn relative to the largest.
export const SPEECH_DATA = [
    { id: "recorded", hours: 13850 },
    { id: "transcribed", hours: 11500 },
    { id: "translated", hours: 9350 },
];

export const SECTORS = ["contactCentres", "media", "public", "research"];
