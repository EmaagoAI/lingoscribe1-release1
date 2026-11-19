// Text for the trust and data page (/trust). Every promise here restates the
// privacy policy (app/privacy-policy) and names the section it comes from;
// change them together. Promise cards are keyed by the ids in data/trust.js.
// (common.trust is the short version shown beside every closing band.)
export const trust = {
    meta: {
        title: "Trust and data",
        description: "What Lingoscribe does with your recordings: no training on identifiable audio without consent, kept only as long as needed, encrypted in transit and at rest.",
    },

    hero: {
        title: "Your audio stays yours.",
        subtitle: "What we do with recordings, and where in our privacy policy each promise comes from.",
        policy: "Read the privacy policy",
    },

    promises: {
        title: "What we promise",
        source: "Privacy policy, section {section}",
        items: {
            training: {
                title: "No training without consent",
                body: "Identifiable audio or text is never used to train models without consent. Evaluation uses de-identified, aggregated data, and you can opt out.",
            },
            retention: {
                title: "Kept only as long as needed",
                body: "Audio and text are kept only as long as needed to return your result, then deleted or anonymised.",
            },
            security: {
                title: "Encrypted in transit and at rest",
                body: "TLS in transit, encryption at rest, access controls and regular security assessments.",
            },
            selling: {
                title: "Never sold",
                body: "We don’t sell your personal information, or share your audio and text with anyone for advertising.",
            },
            deletion: {
                title: "Delete your account any time",
                body: "Ask us and your personal information is deleted or anonymised within 30 days, unless the law requires us to keep it.",
            },
            breach: {
                title: "Told within 72 hours",
                body: "If a breach affects your information, we notify you and the authorities as the law requires, within 72 hours where it applies.",
            },
        },
    },

    data: {
        title: "Recorded by speakers we hired",
        // {hours} is the total recorded, from data/home.js
        body: "Our {hours} hours of training data were recorded by native speakers we hired through local offices, not scraped from the internet.",
    },

    voices: {
        title: "Clone voices only with permission",
        // {email} becomes a mailto link
        body: "Voice cloning is for voices you have permission to use. To have a voice clip you uploaded deleted, write to {email}.",
    },

    cta: {
        title: "Need a security review?",
        body: "Tell us what your procurement team needs and we’ll prepare it.",
        primary: "Talk to sales",
        secondary: "Start free",
    },
};
