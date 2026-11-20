// Structure for the How we build page. Words are in content/<locale>/build.js;
// the hours come from data/home.js (SPEECH_DATA) so the site has one source.

// The story video, and its poster frame.
export const STORY_VIDEO = {
    src: "/media/build-story.mp4",
    poster: "/images/build-story-poster.jpg",
    width: 1280,
    height: 720,
};

// Regions with a local office, in the order they're named.
export const REGIONS = ["kp", "sindh", "punjab", "balochistan", "gb"];

// The five stages, in order. `image` or `samples` is what shows beside each.
export const STAGES = [
    { id: "voices", image: { src: "/images/build-voices.jpeg", width: 1600, height: 900 } },
    { id: "recordings", samples: ["makrani", "pesh", "bittani", "brahui", "bugti", "waziri"] }, // ids from data/recordings.js
    { id: "text", image: { src: "/images/build-text.jpeg", width: 1600, height: 900 } },
    { id: "models" },
    { id: "products" },
];

// What we can do for a new language.
export const ANYWHERE = ["data", "text", "models", "shipping"];

// The team, in the order shown. `role` keys the title in content
// (team.roles); `role`, `linkedin` and `photo` (an image in public/images/team)
// are optional: without a photo the card shows the initials.
export const TEAM = [
    { name: "Arslan Bhatti", role: "cofounder", initials: "AB", linkedin: "https://www.linkedin.com/in/arslan-bhatti-300b7b2a/", photo: "/images/team/arsalanbhatti.webp" },
    { name: "Imran Raza Malik", role: "cofounder", initials: "IM", linkedin: "https://www.linkedin.com/in/imran-raza-malik/", photo: "/images/team/imranraza.avif" },
    { name: "Hashham Masud", role: "advisor", initials: "HM", linkedin: "https://www.linkedin.com/in/hashaamp/", photo: "/images/team/hashhammasud.webp" },
    { name: "Mohsin Nasir", role: "cto", initials: "MN", linkedin: "https://www.linkedin.com/in/mohsin-nasir-a10829419/", photo: "/images/team/mohsinali.jpeg" },
    { name: "Muneeb Ahmad", role: "cpo", initials: "MA", linkedin: "https://www.linkedin.com/in/muneebahd/", photo: "/images/team/muneebahmed.jpeg" },
    { name: "Ramzan Bhatti", role: "dataops", initials: "RB", linkedin: "https://www.linkedin.com/in/ramzan-ali-bhatti-7a207a19b/", photo: "/images/team/ramzanbhatti.jpeg" },
];
