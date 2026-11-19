// Text shared by every page: header, footer, and the recording player.
export const common = {
    // The data promises shown beside every closing "start free" band.
    trust: {
        title: "Your audio stays yours",
        items: ["No training on your audio without consent", "Deleted after processing", "Encrypted in transit and at rest"],
        link: "How we handle data",
    },
    brand: "Lingoscribe",
    homeLabel: "Lingoscribe home",

    nav: {
        label: "Main",
        home: "Home",
        platform: "Platform",
        developers: "Developers",
        lingodub: "Dub Studio",
        languages: "Languages",
        build: "How we build",
        openMenu: "Open menu",
        closeMenu: "Close menu",
    },

    header: {
        signIn: "Sign in",
        startFree: "Start free",
    },

    theme: {
        toDark: "Switch to dark theme",
        toLight: "Switch to light theme",
    },

    footer: {
        tagline: "Making AI understand people and the languages they speak.",
        columns: {
            product: "Product",
            company: "Company",
            contact: "Contact",
        },
        links: {
            platform: "Platform",
            whatsapp: "WhatsApp",
            developers: "Developers",
            lingodub: "Dub Studio",
            languages: "Languages",
            build: "How we build",
            solutions: "Solutions",
            trust: "Trust and data",
            sales: "Talk to sales",
            signIn: "Sign in",
            privacy: "Privacy policy",
        },
        copyright: "© {year} Lingoscribe",
    },

    player: {
        play: "Play the recording",
        pause: "Pause the recording",
        seek: "Jump to a point in the recording",
        status: {
            idle: "Press play to hear it translated",
            listening: "Listening",
            paused: "Paused",
            finished: "Done. Here is what came back.",
            done: "Done. Transcript, English, summary and keywords are ready.",
        },
        // What the player is doing while the clip plays, step by step.
        steps: {
            transcribe: "Transcribing",
            translate: "Translating",
            summarise: "Summarising",
            keywords: "Finding keywords",
        },
        language: "Language",
        languageCount: "{count}+ languages and dialects",
        moreComing: "{count}+, more coming",
        search: "Search {count}",
        searchLabel: "Search languages",
        chooseLanguage: "Choose a language",
        groups: {
            sample: "With a sample to play",
            all: "All languages and dialects",
            next: "Coming next",
        },
        sampleBadge: "Sample",
        comingSoon: "Coming soon",
        noMatch: "No language matches that. Tell us which one you need on the sales page.",
        translateInto: "Translate into",
        targetLanguage: "English",
        showLess: "Show less",
        showLessLabel: "Fold the player back to the slim bar",
        hint: "Move along the waveform to read any moment. Press play to hear it.",
        inShort: "In short:",
        noSample: {
            title: "{language} works today, there just isn’t a public sample yet.",
            body: "Upload your own {variety} audio and get the transcript, the English and a summary back. Free for your first 10 minutes.",
            cta: "Try it with your own audio",
            orHear: "Or hear a sample",
        },
        backToTranscript: "Back to the transcript",
    },
};
