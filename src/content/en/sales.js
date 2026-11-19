// Text for the talk-to-sales page (/talk-to-sales). Interest labels are keyed
// by the ids in data/sales.js; language names come from content.languages.
export const sales = {
    meta: {
        title: "Talk to sales",
        description: "More minutes, longer recordings, Dub Studio, private deployment or a new language. Tell us what you need and sales will reply within one working day.",
    },

    intro: {
        title: "Talk to sales.",
        subtitle: "For more minutes, longer recordings, Dub Studio, private deployment or a new language.",
        steps: [
            "A reply within one working day",
            "A 30-minute call with a sample of your audio or video",
            "A plan and price for your volume",
        ],
        // {start} is a link to sign-up, {email} a mailto link
        aside: "Just want to try it? {start}. Or write to {email}.",
        start: "Start free with 10 minutes",
    },

    form: {
        interests: {
            label: "What do you need?",
            options: {
                minutes: "More minutes",
                api: "API at volume",
                lingodub: "Dub Studio invite",
                private: "Private deployment",
                language: "A new language",
            },
        },
        languages: { label: "Languages", other: "Other" },
        name: { label: "Name", error: "Enter your name." },
        email: { label: "Work email", error: "Enter a work email, like name@company.com." },
        org: { label: "Organisation", error: "Enter your organisation." },
        message: { label: "Anything else?", optional: "optional" },
        submit: "Send to sales",
        sending: "Sending…",
        invalid: "Please fix the highlighted fields.",
        failed: "Your message didn’t send. Please try again, or write to {email}.",
    },

    sent: {
        title: "Thanks, {name}. Sales will reply within one working day.",
        fallbackName: "there",
        summary: "You asked about: {interests}. Languages: {languages}.",
        none: "not given",
        start: "Start free while you wait",
        again: "Send another",
    },
};
