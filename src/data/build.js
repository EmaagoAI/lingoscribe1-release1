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
    { id: "voices", image: { src: "/images/build-voices.webp", width: 266, height: 359 } },
    { id: "recordings", samples: ["makrani", "pesh", "bittani", "brahui", "bugti", "waziri"] }, // ids from data/recordings.js
    { id: "text", image: { src: "/images/build-text.webp", width: 656, height: 362 } },
    { id: "models" },
    { id: "products" },
];

// What we can do for a new language.
export const ANYWHERE = ["data", "text", "models", "shipping"];

// The team. `role` keys the title in content (team.roles); `linkedin` is optional.
export const TEAM = [
    { name: "Arslan Bhatti", role: "cofounder", initials: "AB", linkedin: "https://www.linkedin.com/in/arslan-bhatti-300b7b2a/" },
    { name: "Imran Raza Malik", role: "cofounder", initials: "IM", linkedin: "https://www.linkedin.com/in/imran-raza-malik/" },
    { name: "Mohsin Nasir", role: "cto", initials: "MN", linkedin: "https://www.linkedin.com/in/mohsin-nasir-a10829419/" },
    { name: "Muneeb", role: "cpo", initials: "M", linkedin: "https://www.linkedin.com/in/muneebahd/" },
    { name: "Hashham Masud", role: "advisor", initials: "HM", linkedin: "https://www.linkedin.com/in/hashaamp/" },
];
