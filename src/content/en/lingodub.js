// Text for the LingoDub page (/lingodub). Lists that pair with data are keyed
// by the ids in data/lingodub.js.
export const lingodub = {
    meta: {
        title: "LingoDub",
        description: "LingoDub splits the voices off the music, works out who is speaking, translates every line and rebuilds each speaker’s own voice in the new language. Invite-only.",
    },

    hero: {
        title: "Dub video automatically, line by line.",
        subtitle: "LingoDub splits the voices off the music, works out who is speaking, translates every line and rebuilds each speaker’s own voice in the new language. Then you review it, or you don’t.",
        primary: "Request an invite",
        note: "Invite-only for now. Bring a video and we’ll run your first clip with you.",
    },

    see: {
        title: "One video in. Every language out.",
        body: "Pick a language. What comes back is a finished cut, subtitles included.",
        source: "Source",
        dubInto: "Dub into",
        clip: "Evening bulletin",
        duration: "12:40",
        dubbed: "Dubbed · {lang}",
        play: "Play the dubbed clip",
        placeholder: "[YOUR VIDEO, DUBBED]",
        subsLabel: "Subtitle track",
        subs: { dub: "Dub subtitles", source: "Source", off: "Off" },
        bridge: "The flood water is going down.",
        note: "Each language is its own job, exported on its own. Clips here are placeholders",
        noteFlag: "[drop in the real exports we have rights to publish, and confirm the full language list]",
    },

    how: {
        title: "What happens when you upload",
        body: "Five stages, nothing to configure. All of it runs before you see the first line.",
        stagesLabel: "Pipeline stages",
        termsLabel: "What runs here",
        steps: {
            separate: {
                n: "M&E split", name: "Separate",
                text: "The voices are lifted off the music. Score, effects and room survive and are mixed back under the dub.",
                terms: ["source separation", "music identification"],
            },
            understand: {
                n: "Spotting", name: "Understand",
                text: "Speech is cut into natural lines, timed to the picture, and every speaker is tracked across the whole video.",
                terms: ["segmentation", "speaker diarization"],
            },
            translate: {
                n: "Transcription", name: "Translate",
                text: "The line is transcribed, bridged through English, then translated. The bridge stays on screen for your reviewer.",
                terms: ["transcription", "English bridge", "translation"],
            },
            voice: {
                n: "Casting and voicing", name: "Voice",
                text: "The speaker’s voice is rebuilt from their own audio. Where it can’t be, a matched voice takes over: same gender, close register.",
                terms: ["voice cloning", "gender matching", "natural tone"],
            },
            rebuild: {
                n: "Mix and lay-back", name: "Rebuild",
                text: "The line is fitted back to its own timing and mixed under the original music. Out comes video, audio and subtitles.",
                terms: ["alignment", "mix", "render"],
            },
        },
        demo: {
            speech: { title: "The speech", body: "goes on to stage 2" },
            music: { title: "Music, effects, room", body: "held back, never re-recorded" },
            span: "0:12 – 0:16",
            speaker: "Speaker 2",
            others: "Speaker 1 holds the other three",
            sourceTag: "{lang} · source",
            bridgeTag: "English · bridge",
            dubTag: "{lang} · dub",
            voice: ["cloned from Speaker 2", "female, same register", "calm, measured"],
            outputs: ["video · MP4", "audio · WAV", "subtitles · SRT"],
        },
        doneTitle: "All five run before you see the first line.",
        doneBody: "An email arrives when the first pass is ready, typically in",
        doneFlag: "[confirm turnaround]",
    },

    review: {
        title: "Then you review. Or you don’t.",
        body: "Everything the pipeline decided arrives as a draft. Change any part of it and redo a single line without re-running the video.",
        items: {
            breaks: { title: "Line breaks", body: "split, merge or delete" },
            transcript: { title: "Transcript", body: "fix a misheard word" },
            speaker: { title: "Speaker", body: "reassign a line" },
            translation: { title: "Translation", body: "rewrite the wording" },
            voice: { title: "Voice", body: "swap cloned for matched" },
            timing: { title: "Timing", body: "nudge a line that runs long" },
        },
        footer: "Nothing renders until you sign it off. Then export the video (MP4), the audio (WAV) or the subtitles (SRT).",
        imageAlt: "LingoDub editor: an Urdu video dubbed into Punjabi, each line with the Urdu source, an English bridge and the Punjabi dub, beside a video preview and a timeline",
    },

    features: {
        title: "Built for people who understand every word matters",
        items: {
            signoff: { title: "Nothing ships unreviewed", body: "Mark lines off as you go. The final render waits until you say the whole video is ready." },
            accent: { title: "Original accent", body: "Keep the speaker’s accent in the dub, line by line, when the audience expects it." },
            redo: { title: "Line-level redo", body: "Re-run the one line that is wrong instead of processing the whole video again." },
            preview: { title: "Source or dub preview", body: "Switch the player between the original and the dub to compare before you sign it off." },
        },
    },

    uses: {
        title: "Dub into the languages your audience speaks",
        body: "Urdu, Pashto, Punjabi, Sindhi and Arabic",
        bodyFlag: "[confirm the list]",
        items: {
            news: "Broadcasters and news: regional versions of every bulletin",
            education: "Education: lessons in a student’s home language",
            creators: "Creators and studios: one video, many audiences",
            public: "NGOs and public services: messages people understand",
        },
    },

    cta: {
        title: "Bring a video to try.",
        body: "Tell us what you publish and which languages you need, and we’ll run your first clip with you.",
        primary: "Request an invite",
        secondary: "See the platform",
    },

    // The data promises under the closing band, with the one about cloned voices.
    trust: {
        title: "Your audio, and the voices in it, stay yours",
        items: [
            "No training on your audio without consent",
            "A voice cloned from your video is used for your project and nothing else",
            "Deleted after processing",
            "Encrypted in transit and at rest",
        ],
        link: "How we handle data",
    },
};
