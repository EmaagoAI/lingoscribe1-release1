// Text for the languages page (/languages). Language names themselves are in
// content/<locale>/languages.js; this file is only the page's own words.
export const languagesPage = {
    meta: {
        title: "Languages",
        description: "Urdu, Pashto and its dialects, Punjabi, Saraiki, Sindhi, Balochi, Brahui, Persian, Arabic and English, built with native speakers. Play real recordings and see what comes back.",
    },

    hero: {
        title: "{count}+ languages and dialects, built with native speakers.",
        subtitle: "Each model is trained on speech recorded by native people from the region it comes from. Pick a recording and play it to see what comes back.",
        primary: "Start free",
        link: "Bring us a language",
    },

    player: {
        choose: "Choose a recording",
        real: "Real recordings by native speakers",
        playFrom: "Play from {time}",
        returns: "What Lingoscribe returns",
        steps: {
            transcribe: "Transcribe",
            translate: "Translate",
            summarise: "Summarise",
            keywords: "Find keywords",
        },
        hint: "Press play, or click a line. The transcript, translation, summary and keywords appear as Lingoscribe listens.",
        summary: "Summary.",
        keywords: "Keywords",
        footer: "Your own audio works the same way, in every tool.",
        cta: "Try it with your own audio",
    },

    support: {
        title: "What each language supports",
        body: "Speech to speech “in” means you can speak it; “out” means Lingoscribe can speak it back.",
        columns: {
            language: "Language",
            dialects: "Dialects",
            stt: "Speech to text",
            tts: "Text to speech",
            s2s: "Speech to speech",
        },
        yes: "Yes",
        notYet: "Not yet",
        none: "—",
        s2s: { both: "In and out", in: "In only", out: "Out only" },
        soon: "Coming soon",
        tryIt: "Try it",
        tryItLabel: "Try {language}",
    },

    more: {
        title: "Need a language we don’t cover yet?",
        body: "We built these from native speech, region by region. We can do the same for yours.",
        primary: "Bring us a language",
        secondary: "Talk to sales",
    },

    cta: {
        title: "Hear your own audio, in your language.",
        body: "Free to start. Sign up with Google or email, no card needed.",
        primary: "Start free",
        secondary: "Talk to sales",
    },
};
