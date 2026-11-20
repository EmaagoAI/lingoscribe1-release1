// Text for the How we build page (/how-we-build). Numbers in {braces} are
// filled from data (data/home.js SPEECH_DATA, data/languages.js, data/build.js),
// so they stay true when the data changes.
export const build = {
    meta: {
        title: "How we build",
        description: "Built with the people who speak it: native speakers in five regions, thousands of hours of everyday speech, and models for the languages AI leaves out.",
    },

    hero: {
        title: "Built with the people who speak it.",
        body: "Most AI understands a handful of languages. Pakistan alone speaks dozens, and every region sounds different. So we built the data ourselves, with native speakers, and the method now works for any language AI leaves out.",
    },

    story: {
        title: "The story so far",
        video: {
            caption: "Our story in 1 minute 38 seconds.",
            fallback: "Your browser can’t play this video.",
        },
        steps: [
            { title: "AI understands the world.", note: "Or rather, a few of its languages." },
            { title: "Not supported by AI.", note: "Pashto, Balochi, Brahui, Sindhi, Saraiki and more were left out." },
            { title: "Every region sounds different.", note: "Same language, different voices." },
            { title: "So we started in Balochistan.", note: "The hardest place to start, so the method would work anywhere." },
            { title: "We hired native speakers.", note: "Through local offices in every province." },
            { title: "Every recording became data.", note: "{hours}+ hours so far, and growing." },
        ],
    },

    stages: {
        title: "Five stages, from voices to products",
        body: "Each stage is something we can now do for a new language.",
        imageAlt: "Native speakers at work in a Lingoscribe office",
        items: {
            voices: {
                title: "Voices",
                stat: "{count} regions",
                body: "Native speakers hired through local offices in {regions}.",
            },
            recordings: {
                title: "Recordings",
                stat: "{hours}+ hours",
                body: "Everyday speech: at the market, at home, on the way to work.",
                samplesLabel: "Some of the recordings",
            },
            text: {
                title: "Text",
                stat: "{hours}+ hours",
                body: "Transcribed in native script by speakers of the dialect; {translated}+ hours translated.",
            },
            models: {
                title: "Models",
                stat: "{count}+ live",
                body: "Speech to text, translation, summaries, speakers, names, keywords, text to speech, voice cloning and speech to speech.",
            },
            products: {
                title: "Products",
                stat: "{count} ways in",
                body: "Web platform, API, Dub Studio, WhatsApp and a YouTube extension.",
            },
        },
        // "Khyber Pakhtunkhwa, Sindh, Punjab, Balochistan and Gilgit-Baltistan"
        and: "and",
    },

    regions: {
        kp: "Khyber Pakhtunkhwa",
        sindh: "Sindh",
        punjab: "Punjab",
        balochistan: "Balochistan",
        gb: "Gilgit-Baltistan",
    },

    anywhere: {
        title: "Any language, around the world.",
        body: "Pakistan is where we started, not the limit. The same five stages work wherever AI doesn’t yet understand the people it serves.",
        cta: "Talk to us about a language",
        join: "Join as a native speaker",
        mapLabel: "Started here: {count}+ languages and dialects",
        items: {
            data: { title: "Native-speaker data", body: "Find, hire and manage speakers where the language is spoken, and record the everyday speech models need." },
            text: { title: "Transcription and translation at scale", body: "Native-script transcripts and translations, checked by people who speak the dialect." },
            models: { title: "Custom speech models", body: "Speech to text, text to speech and speech to speech, trained for the language and its dialects." },
            shipping: { title: "Shipped where people are", body: "Through an API, the web platform, video dubbing or a WhatsApp number." },
        },
    },

    team: {
        title: "The people behind it",
        roles: { cofounder: "Co-founder", cto: "CTO", cpo: "CPO", advisor: "Strategic advisor", dataops: "Data Ops" },
        linkedin: "{name} on LinkedIn",
    },

    cta: {
        title: "Hear what it does with your audio.",
        body: "Free to start. Sign up with Google or email, no card needed.",
        primary: "Start free",
        secondary: "Talk to sales",
    },
};
