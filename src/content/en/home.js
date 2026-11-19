// Text of the home page, section by section, top to bottom.
export const home = {
    hero: {
        title: ["Making", "AI", "understand", "people."],
        subtitle: "Most AI hears noise in these languages. Lingoscribe hears what people mean.",
        primary: "Start free",
        secondary: "Talk to sales",
        lensBadge: "Lingoscribe",
    },

    tools: {
        title: "What you can do with it",
        tablistLabel: "Tools",
        soon: "Soon",
        touring: "Playing through each tool. Pick one to stop.",
        showing: "Showing {tool}.",
        items: {
            transcribe: {
                name: "Transcribe",
                body: "Speech to text in the speaker’s own script, with timestamps and speaker identification.",
                cta: "Try speech to text",
            },
            translate: {
                name: "Translate",
                body: "Into English or Urdu, line by line, keeping the timestamps.",
                cta: "Try translation",
            },
            analyse: {
                name: "Analyse",
                body: "A summary, the names and places mentioned, and the keywords you search for.",
                cta: "Try it on your audio",
            },
            speak: {
                name: "Speak",
                body: "Text to speech in eight languages: a male or female voice, or your own voice from a short clip.",
                cta: "Try text to speech",
            },
            speechToSpeech: {
                name: "Speech to speech",
                body: "Say it in 10 languages and hear it in another.",
                cta: "Try speech to speech",
            },
            dub: {
                name: "Dub video",
                body: "Dub Studio dub a whole video, line by line, and lets you fix any line (invite only).",
                cta: "See Dub Studio",
            },
            voiceAgents: {
                name: "Voice agents",
                body: "Agents that answer calls and talk back in the caller’s own language. In development, with early access for contact centres.",
                cta: "Ask about early access",
            },
        },
        // Labels inside the demo panels.
        demos: {
            summary: "Summary",
            keywords: "Keywords",
            search: "Search",
            searchBody: "Find any keyword in the transcript or the translation, with the moment it was said.",
            inLanguage: "“{text}” in {language}",
            voices: { male: "Male", female: "Female", own: "Your own voice, from 9 seconds" },
            speechSteps: { say: "You say it", english: "In English", target: "In {language}", spoken: "Spoken" },
            dubImageAlt: "Dub Studio editor with the source, English and dubbed lines side by side",
            caller: "Caller",
            agent: "Voice agent",
            agentNote: "Understands the caller, replies in a natural voice, and hands over to a person when needed.",
        },
    },

    languages: {
        title: "{count}+ languages and dialects, live today",
        listLabel: "Languages and dialects",
        next: "{language}, next",
        more: "+{count} more",
        hear: "Play the {language} recording",
        note: "Click to hear a real recording in that language.",
    },

    ways: {
        title: "Use it where you already work",
        items: {
            browser: { title: "In the browser", body: "Upload or record audio. Nothing to install." },
            api: { title: "Through the API", body: "Eight endpoints and one key." },
            whatsapp: { title: "On WhatsApp", body: "Forward a voice note, get the text back." },
            youtube: { title: "On YouTube", body: "Translated subtitles on any video." },
            lingodub: { title: "With Dub Studio", body: "Dub whole videos. Invite-only." },
        },
    },

    built: {
        title: "Built with the people who speak it.",
        body: "Most AI learns from what is already online, and these languages barely are. So we recorded them ourselves, with native speakers. The same method works for any language AI doesn’t yet understand.",
        links: { build: "How we build", anywhere: "Bring us a language" },
        statsLabel: "Our speech data so far",
        unit: "hours",
        stats: {
            recorded: "Recorded by native speakers",
            transcribed: "Transcribed in native script",
            translated: "Translated",
        },
        note: "Speakers hired through local offices in five regions, recording everyday speech: at the market, at home, on the way to work.",
    },

    sectors: {
        title: "Who uses it",
        link: "See how",
        items: {
            contactCentres: { title: "Contact centres", body: "Every call searchable and scored, in the caller’s own dialect." },
            media: { title: "Media and broadcast", body: "Monitor regional news, then subtitle it and dub it." },
            public: { title: "Public services", body: "Hear people in the language they actually speak." },
            research: { title: "Research and NGOs", body: "Field interviews transcribed and translated, at scale." },
        },
    },

    cta: {
        title: "Hear your own audio, in your language.",
        body: "Free to start. Sign up with Google or email, no card needed.",
        primary: "Start free",
        secondary: "Talk to sales",
    },
};
