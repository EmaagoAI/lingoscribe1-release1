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
        // Bold figure, then the rest of the line.
        stats: [
            { value: "{hours} hours", label: "recorded with native speakers" },
            { value: "{count}+", label: "languages and dialects" },
        ],
    },

    story: {
        title: "The story so far",
        video: {
            caption: "Our story in 1 minute 38 seconds.",
            captionFlag: "[Add English and Urdu captions]",
            fallback: "Your browser can’t play this video.",
        },
        steps: [
            { title: "AI understands the world.", note: "Or rather, a few of its languages." },
            { title: "Not supported by AI.", note: "Pashto, Balochi, Brahui, Sindhi, Saraiki and more were left out." },
            { title: "Every region sounds different.", note: "Same language, different voices." },
            { title: "So we started in Balochistan.", note: "The hardest place to start, so the method would work anywhere." },
            { title: "We hired native speakers.", note: "Through local offices in every province." },
            { title: "Every recording became data.", note: "{hours} hours so far, and growing." },
        ],
    },

    stages: {
        title: "Five stages, from voices to products",
        body: "Each stage feeds the next, and each one is something we can now do again for a language AI has left out.",
        stage: "Stage {n}",
        items: {
            voices: {
                title: "Voices",
                stat: "{count} regions",
                body: "Native speakers, hired through an office in each province.",
            },
            recordings: {
                title: "Recordings",
                stat: "{hours} hours",
                body: "Everyday speech, not scripts read aloud in a booth.",
            },
            text: {
                title: "Text",
                stat: "{hours} hours",
                body: "Transcribed in native script, {translated} hours of it translated.",
            },
            models: {
                title: "Models",
                stat: "{count} live",
                body: "Speech, translation and voice, trained on the data above.",
            },
            products: {
                title: "Products",
                stat: "{count} ways in",
                body: "Platform, API, LingoDub, WhatsApp and a YouTube extension, with voice bots coming.",
            },
        },
        photos: {
            recording: {
                alt: "A recording session: the audio captured on screen while a native speaker talks across the table",
                caption: "Recording with native speakers, in one of five provincial offices.",
            },
            checking: {
                alt: "Two colleagues checking a transcript together at a Lingoscribe office",
                caption: "Transcribing in native script, checked by speakers of the dialect.",
            },
        },
        recordingTitle: "What a recording is",
        recordingBody: "Balochi in Makran, going to the market. Pashto in Peshawar, talking to a friend. Sindhi in Karachi, on the way to work. Punjabi in Lahore, ordering at a shop. Shina in Gilgit, talking about the news. Brahui in Quetta, a morning at home.",
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
