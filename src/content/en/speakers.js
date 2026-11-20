// Text for the join-as-a-native-speaker page (/native-speakers). Help labels
// are keyed by the ids in data/speakers.js; language names come from
// content.languages.
export const speakers = {
    meta: {
        title: "Join as a native speaker",
        description: "Speak a regional language? Join our network of native speakers and help build AI that understands your language.",
    },

    intro: {
        title: "Join as a native speaker.",
        subtitle: "Speak a regional language? Help build AI that understands it. Tell us about yourself and we’ll be in touch.",
        steps: [
            "We read every application",
            "A short call in your language",
            "Paid work recording, transcribing or checking speech",
        ],
        // {email} is a mailto link
        aside: "Questions first? Write to {email}.",
    },

    form: {
        help: {
            label: "How would you like to help?",
            options: {
                record: "Recording speech",
                transcribe: "Transcribing",
                translate: "Translating",
                review: "Checking quality",
            },
        },
        languages: { label: "Languages you speak natively", other: "Other", error: "Pick at least one language." },
        name: { label: "Name", error: "Enter your name." },
        email: { label: "Email", error: "Enter an email, like name@example.com." },
        phone: { label: "Phone or WhatsApp", optional: "optional" },
        city: { label: "City or region", error: "Enter where you live." },
        message: { label: "Anything else?", optional: "optional" },
        submit: "Send application",
        sending: "Sending…",
        invalid: "Please fix the highlighted fields.",
        failed: "Your application didn’t send. Please try again, or write to {email}.",
    },

    sent: {
        title: "Thanks, {name}. We’ll be in touch.",
        fallbackName: "there",
        summary: "Languages: {languages}. You can help with: {help}.",
        none: "not given",
        home: "Back to the site",
        again: "Send another",
    },
};
