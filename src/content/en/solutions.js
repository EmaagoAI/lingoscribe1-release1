// Text for the solutions page (/solutions). Sectors are keyed by the ids in
// data/solutions.js (the same ids the home page's "Who uses it" uses).
export const solutions = {
    meta: {
        title: "Solutions",
        description: "Lingoscribe for contact centres and telecom, and for media and broadcast: transcripts, English translation, keywords, summaries, subtitles and dubbing in regional languages.",
    },

    hero: {
        title: "For teams that hear many languages every day.",
        tabsLabel: "Sector",
        later: "Government, banking and research pages follow.",
    },

    labels: {
        problem: "The problem today",
        how: "How it works",
        gets: "What your team gets",
        products: "Products used",
    },

    products: { api: "API", platform: "Platform", lingodub: "Dub Studio" },

    sectors: {
        contactCentres: {
            tab: "Contact centres and telecom",
            title: "Hear every caller, in their own dialect.",
            body: "Callers switch to Pashto, Balochi or Saraiki, and most quality checks only cover Urdu. Lingoscribe makes every call searchable and scored.",
            problems: [
                "Calls in regional languages go unreviewed",
                "Complaints and cancellations are missed",
                "Agents’ notes don’t match what was said",
            ],
            steps: [
                { title: "Send recordings", body: "From your call platform through the API, as calls finish or in batches." },
                { title: "Transcribe and translate", body: "Each speaker in their own script, plus English." },
                { title: "Spot what matters", body: "Keywords such as “refund” or “cancel”, a summary and speaker identification." },
            ],
            gets: [
                "Transcript per speaker, with timestamps",
                "English translation",
                "Keyword alerts and a call summary",
                "Names and places mentioned",
            ],
        },
        media: {
            tab: "Media and broadcast",
            title: "Monitor, subtitle and dub regional content.",
            body: "Regional news and talk shows reach millions but are hard to monitor and stay locked to one audience.",
            problems: [
                "Regional channels are hard to monitor at scale",
                "Subtitles are manual and slow",
                "Content reaches only one language group",
            ],
            steps: [
                { title: "Transcribe and translate", body: "Regional broadcasts become searchable text, with an English translation." },
                { title: "Subtitle", body: "Translated subtitles, including on YouTube with the extension." },
                { title: "Dub", body: "Turn the best content into another language with Dub Studio." },
            ],
            gets: [
                "Searchable transcripts of every bulletin",
                "Translated subtitles",
                "Dubbed video, audio or subtitle files",
                "Names, places and topics per programme",
            ],
        },
    },

    cta: {
        title: "Bring a recording from your team.",
        body: "We’ll run your own audio through Lingoscribe with you, or start free and try it yourself.",
        primary: "Start free",
        secondary: "Talk to sales",
    },
};
