// Words that float behind the home hero. Outside the lens they show in their
// own script; inside it, the same word shows in English with its language.
//
//   lang     language id (see data/languages.js), used for the label and lang attribute
//   meaning  the English shown inside the lens
//   x, y     position in % of the hero
//   depth    far | mid | near: size, opacity and blur (see LensHero)
//   bob      seconds for one float cycle; delay offsets it so words don't move together
//   edge     beside the heading on phones: hidden on small phones (see LensHero)
//   wide     fills the gap beside the heading: shown only on large screens (1536px+)
export const LENS_WORDS = [
    { lang: "ur", word: "آواز", meaning: "voice", x: 1.4, y: 2.7, depth: "mid", bob: 6, delay: -1 },
    { lang: "ps", word: "خلک", meaning: "people", x: 12.3, y: 13.9, depth: "near", bob: 7, delay: -2 },
    { lang: "fa", word: "صدا", meaning: "voice", x: 23.2, y: 12.5, depth: "far", bob: 8, delay: -3 },
    { lang: "ps", word: "ژبه", meaning: "language", x: 34.1, y: 11.1, depth: "mid", bob: 5, delay: -4 },
    { lang: "ar", word: "سوق", meaning: "market", x: 45.0, y: 5.5, depth: "near", bob: 6, delay: 0 },
    { lang: "sd", word: "ٻولي", meaning: "language", x: 55.9, y: 8.3, depth: "far", bob: 7, delay: -1 },
    { lang: "ur", word: "دوست", meaning: "friend", x: 66.8, y: 6.9, depth: "mid", bob: 8, delay: -2 },
    { lang: "ps", word: "مننه", meaning: "thank you", x: 77.7, y: 5.5, depth: "near", bob: 5, delay: -3 },
    { lang: "fa", word: "مردم", meaning: "people", x: 85.0, y: 12.0, depth: "far", bob: 6, delay: -4 },
    { lang: "ar", word: "صوت", meaning: "voice", x: 91.4, y: 2.7, depth: "mid", bob: 7, delay: 0 },
    { lang: "pa", word: "بولی", meaning: "language", x: 2.3, y: 30.6, depth: "near", bob: 8, delay: -1, edge: true },
    { lang: "ps", word: "بازار", meaning: "market", x: 13.2, y: 29.2, depth: "far", bob: 5, delay: -2 },
    { lang: "ur", word: "سنو", meaning: "listen", x: 71.0, y: 15.5, depth: "far", bob: 7, delay: -3 },
    { lang: "sd", word: "پاڻي", meaning: "water", x: 81.4, y: 19.4, depth: "mid", bob: 8, delay: -4 },
    { lang: "ar", word: "شكرا", meaning: "thank you", x: 92.3, y: 30.6, depth: "near", bob: 5, delay: 0, edge: true },
    { lang: "ps", word: "کور", meaning: "home", x: 3.2, y: 45.9, depth: "far", bob: 6, delay: -1 },
    { lang: "fa", word: "خانه", meaning: "home", x: 14.1, y: 44.5, depth: "mid", bob: 7, delay: -2 },
    { lang: "ur", word: "لوگ", meaning: "people", x: 82.3, y: 47.3, depth: "near", bob: 6, delay: -4, edge: true },
    { lang: "ps", word: "پیسې", meaning: "money", x: 93.2, y: 45.9, depth: "far", bob: 7, delay: 0 },
    { lang: "ar", word: "لغة", meaning: "language", x: 4.1, y: 61.1, depth: "mid", bob: 8, delay: -1 },
    { lang: "ur", word: "خبر", meaning: "news", x: 15.0, y: 59.7, depth: "near", bob: 5, delay: -2, edge: true },
    { lang: "ps", word: "ملګری", meaning: "friend", x: 83.2, y: 62.5, depth: "far", bob: 8, delay: -4 },
    { lang: "fa", word: "ممنون", meaning: "thank you", x: 94.1, y: 61.1, depth: "mid", bob: 5, delay: 0 },
    { lang: "ar", word: "صديق", meaning: "friend", x: 5.0, y: 76.4, depth: "near", bob: 6, delay: -1, edge: true },
    { lang: "pa", word: "پانی", meaning: "water", x: 15.9, y: 75.0, depth: "far", bob: 7, delay: -2 },
    { lang: "ps", word: "سبزي", meaning: "vegetables", x: 84.1, y: 77.8, depth: "mid", bob: 6, delay: -4 },
    { lang: "ur", word: "گھر", meaning: "home", x: 95.0, y: 76.4, depth: "near", bob: 7, delay: 0, edge: true },
    { lang: "ps", word: "اوبه", meaning: "water", x: 5.9, y: 91.7, depth: "far", bob: 8, delay: -1 },
    { lang: "ur", word: "زبان", meaning: "language", x: 16.8, y: 90.3, depth: "mid", bob: 5, delay: -2 },
    { lang: "ur", word: "سلام", meaning: "hello", x: 27.7, y: 88.9, depth: "near", bob: 6, delay: -3 },
    { lang: "ur", word: "آواز", meaning: "voice", x: 33.0, y: 79.0, depth: "far", bob: 7, delay: -4 },
    { lang: "ps", word: "خلک", meaning: "people", x: 41.4, y: 86.1, depth: "mid", bob: 8, delay: 0 },
    { lang: "fa", word: "صدا", meaning: "voice", x: 52.3, y: 97.3, depth: "near", bob: 5, delay: -1 },
    { lang: "ps", word: "ژبه", meaning: "language", x: 63.2, y: 95.9, depth: "far", bob: 6, delay: -2 },
    { lang: "ar", word: "سوق", meaning: "market", x: 74.1, y: 94.5, depth: "mid", bob: 7, delay: -3 },
    { lang: "sd", word: "ٻولي", meaning: "language", x: 85.0, y: 93.1, depth: "near", bob: 8, delay: -4 },
    { lang: "ur", word: "دوست", meaning: "friend", x: 95.9, y: 91.7, depth: "far", bob: 5, delay: 0 },
    // the gap between the button and the player
    { lang: "ur", word: "بات", meaning: "talk", x: 36.0, y: 73.0, depth: "mid", bob: 6, delay: -2 },
    { lang: "ps", word: "غږ", meaning: "voice", x: 52.0, y: 71.0, depth: "near", bob: 7, delay: -4 },
    { lang: "sd", word: "ڳالهه", meaning: "talk", x: 66.0, y: 74.0, depth: "far", bob: 5, delay: -1 },
    { lang: "ur", word: "کہانی", meaning: "story", x: 27.0, y: 30.0, depth: "near", bob: 7, delay: -1, wide: true },
    { lang: "fa", word: "شهر", meaning: "city", x: 36.0, y: 21.0, depth: "far", bob: 6, delay: -3, wide: true },
    { lang: "sd", word: "ماڻهو", meaning: "people", x: 30.0, y: 52.0, depth: "mid", bob: 8, delay: -2, wide: true },
    { lang: "ar", word: "كلمة", meaning: "word", x: 25.0, y: 71.0, depth: "near", bob: 5, delay: -4, wide: true },
    { lang: "ps", word: "سندره", meaning: "song", x: 64.0, y: 21.0, depth: "far", bob: 7, delay: -2, wide: true },
    { lang: "pa", word: "گل", meaning: "talk", x: 72.0, y: 32.0, depth: "mid", bob: 6, delay: 0, wide: true },
    { lang: "ur", word: "دل", meaning: "heart", x: 70.0, y: 53.0, depth: "near", bob: 8, delay: -3, wide: true },
    { lang: "ar", word: "بيت", meaning: "home", x: 75.0, y: 71.0, depth: "far", bob: 5, delay: -1, wide: true },
];
