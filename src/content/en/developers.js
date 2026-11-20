// Text for the developers page (/developers). Endpoint and language lists are
// keyed by the ids in data/developers.js, which mirror the live API.
export const developers = {
    meta: {
        title: "Developers",
        description: "One API for speech to text, translation, summaries, names, keywords, speakers and speech, in 15+ languages and dialects. Eight endpoints and one key.",
    },

    hero: {
        title: "Build for the languages your users speak.",
        subtitle: "Eight endpoints and one key. Send audio, get back transcripts, translations, summaries and speech.",
        primary: "Get an API key",
        secondary: "Read the docs",
        note: "10 free minutes on sign-up.",
        request: "Request: transcribe a {language} clip",
        response: "Response",
    },

    endpoints: {
        title: "Endpoints",
        link: "Full reference",
        items: {
            transcribe: "Transcribe speech in the language it was spoken, as speaker segments with timestamps.",
            translate: "Translate the speech in an audio file, with timestamps.",
            summarization: "Summarise a conversation, from audio or from text.",
            ner: "Find people, places and other names, from audio or text.",
            keywordSpotting: "Find where keywords are spoken; transcript and translation are both searched.",
            diarization: "Who spoke when, as speaker-labelled time segments.",
            tts: "Turn text into speech with a male, female or cloned voice.",
            s2s: "Speech in one language to speech in another.",
        },
    },

    codes: {
        title: "Language codes",
        // {field} is shown as code
        body: "Pass one as {field}. Text to speech and speech-to-speech output support a subset; the reference lists which.",
    },

    basics: {
        title: "Before you call it",
        items: {
            auth: { title: "Authentication", body: "Send your key in the {header} header. Create keys in the dashboard." },
            audio: { title: "Audio", body: "mp3, wav or m4a as multipart form data. Text endpoints also take JSON." },
            minutes: {
                title: "Minutes",
                body: "Usage is counted in minutes of audio. Over your remaining minutes, a request returns {quota}. More than {rate} requests a minute returns {limited}.",
            },
            more: { title: "More minutes", body: "Start with 10 free minutes. For volume, talk to sales.", link: "Talk to sales" },
        },
    },

    cta: {
        title: "Build with Lingoscribe.",
        body: "Get a key and 10 free minutes. For volume or private deployment, talk to sales.",
        primary: "Get an API key",
        secondary: "Talk to sales",
    },
};
