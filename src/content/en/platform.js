// Text for the platform page (/platform), section by section.
// Lists that pair with data (channels, plans) are keyed by the ids in data/platform.js.
export const platform = {
    meta: {
        title: "Platform",
        description: "Speech to text, text to speech and speech to speech in 15+ languages and dialects. Every tool is free for your first 10 minutes.",
    },

    hero: {
        title: "Every tool, free for your first 10 minutes.",
        subtitle: "Upload or record audio and get back a transcript, a translation, a summary or speech, in 15+ languages and dialects.",
        primary: "Start free",
        secondary: "Talk to sales",
        note: "Sign up with Google or email. No card needed.",
        imageAlt: "The Lingoscribe playground turning Urdu speech into Arabic speech, with the Urdu transcript, English and Arabic translations, and male, female or cloned voice options",
    },

    tools: {
        speechToText: {
            title: "Speech to text",
            body: "Upload or record a clip and get the transcript in the speaker’s own script. Translation, a summary, names and places, speakers and keywords come with it.",
            link: "Open speech to text",
            imageAlt: "Lingoscribe speech to text: an Arabic recording with its transcript, English translation and a breakdown of two speakers on a timeline",
        },
        textToSpeech: {
            title: "Text to speech",
            body: "Type text and hear it spoken in a male or female voice, or in your own voice cloned from a short clip.",
            link: "Open text to speech",
            languagesLabel: "Eight languages",
            voicesLabel: "Voices",
            voices: { male: "Male", female: "Female", clone: "Clone a voice from 9 seconds" },
            note: "Clone only voices you have permission to use.",
        },
        speechToSpeech: {
            title: "Speech to speech",
            body: "Say it in one language and hear it in another. Ten languages in and seven out, with each step shown as it finishes.",
            link: "Open the playground",
            steps: [
                { title: "Transcribe", note: "Urdu speech becomes Urdu text" },
                { title: "Translate to English", note: "the bridge every language goes through" },
                { title: "Translate onward", note: "into Pashto, or the language you chose" },
                { title: "Speak", note: "in a male, female or cloned voice" },
            ],
        },
    },

    channels: {
        title: "One account, four ways in",
        subtitle: "Minutes are shared, so you can start in the browser and move to the API or WhatsApp without a new plan.",
        items: {
            browser: { title: "In the browser", body: "The playground, speech to text and text to speech pages, with your history.", link: "Start free" },
            api: { title: "Through the API", body: "The same tools as eight endpoints, with one API key.", link: "Read the API" },
            whatsapp: { title: "On WhatsApp", body: "Forward a voice note to our number and get the text back.", link: "See how" },
            youtube: { title: "On YouTube", body: "A browser extension that adds translated subtitles, using your minutes.", link: "Get the extension" },
        },
    },

    whatsapp: {
        title: "On WhatsApp",
        body: "For people who live in voice notes: field teams, journalists, shops taking orders. Send a voice note and we’ll take it from there.",
        steps: [
            { title: "Send a voice note to our number", note: "record one, or forward one you received" },
            { title: "Choose the language it’s in", note: "Urdu, Pashto, Arabic and more" },
            { title: "Pick what you need", note: "Transcribe, Translate, Summarize, Voice Reply, or all of them" },
            { title: "Get your results in the chat", note: "usually within seconds" },
        ],
        primary: "Message us on WhatsApp",
        note: "No app needed. It all happens inside WhatsApp.",
        chat: {
            label: "Example WhatsApp chat: a Pashto voice note, the bot asking for its language and what's needed, then replying with the transcript, an English translation, a summary and a spoken English reply",
            contact: "Lingoscribe",
            askLanguage: "Which language is this voice note in?",
            askTools: "What do you need?",
            allTools: "All of them",
            english: "Translation",
            summary: "Summary",
            voiceReply: "Voice reply, in English",
        },
    },

    pricing: {
        title: "Pricing",
        plans: {
            free: {
                label: "Free",
                price: "10 minutes",
                body: "Every tool and language, to see how it handles your audio.",
                features: [
                    "Speech to text, text to speech and speech to speech",
                    "Playground clips up to 30 seconds",
                    "API key included",
                    "Sign up with Google or email, no card",
                ],
                cta: "Start free",
            },
            teams: {
                label: "Teams and organisations",
                price: "Talk to sales",
                body: "For more minutes, longer recordings and your own deployment.",
                features: [
                    "Volume pricing for calls, media or field audio",
                    "Private cloud or on-premises",
                    "New dialects trained for you",
                ],
                cta: "Talk to sales",
            },
        },
    },

    faq: {
        title: "Questions",
        items: [
            {
                q: "Which languages can I use?",
                a: "Speech to text covers 15+ languages and dialects: Urdu, English, five Pashto dialects, Punjabi, Saraiki, Sindhi, Balochi and Balochi Makrani, Brahui, Persian and Arabic. Text to speech covers eight of them.",
            },
            { q: "Is my audio used to train your models?", a: "Not without your consent. Audio is kept only as long as it takes to return your result." },
            { q: "How long can a recording be?", a: "Up to 30 seconds per clip in the playground. Longer files go through the API or a team plan." },
            { q: "Can I use my own voice?", a: "Yes. Record or upload 9 seconds and the platform clones it for text to speech. Only clone voices you have permission to use." },
            { q: "Do I need a card to start?", a: "No. Sign up with Google or email and you get 10 minutes free." },
        ],
    },

    cta: {
        title: "Try it on your own audio.",
        body: "Free to start. Sign up with Google or email, no card needed.",
        primary: "Start free",
        secondary: "Talk to sales",
    },
};
