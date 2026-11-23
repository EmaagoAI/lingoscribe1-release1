// The languages Lingoscribe supports. Their display names (English, or any
// future site language) are content: content/<locale>/languages.js, under the
// same ids. Only facts that don't change with the site language live here.

// Each language: its name in its own script, and whether that script is
// written right to left.
export const LANGUAGES = {
    ur: { native: "اردو", rtl: true },
    en: { native: "", rtl: false },
    ps: { native: "پښتو", rtl: true },
    pa: { native: "پنجابی", rtl: true },
    skr: { native: "سرائیکی", rtl: true },
    sd: { native: "سنڌي", rtl: true },
    bal: { native: "بلوچی", rtl: true },
    brh: { native: "براہوئی", rtl: true },
    fa: { native: "فارسی", rtl: true },
    ar: { native: "العربية", rtl: true },
    hno: { native: "ہندکو", rtl: true },
    ks: { native: "کٲشُر", rtl: true },
};

// What can be picked: a language, or one dialect of it. In display order.
//   status     "live" today, or "next" (coming)
//   recording  id of a playable sample in data/recordings.js, if there is one
export const VARIETIES = [
    { id: "ps-peshawari", language: "ps", dialect: "peshawari", status: "live", recording: "pesh" },
    { id: "ps-afridi", language: "ps", dialect: "afridi", status: "live", recording: "afridi" },
    { id: "ps-bittani", language: "ps", dialect: "bittani", status: "live", recording: "bittani" },
    { id: "ps-mehsud", language: "ps", dialect: "mehsud", status: "live", recording: "mehsud" },
    { id: "ps-waziri", language: "ps", dialect: "waziri", status: "live", recording: "waziri" },
    { id: "ur", language: "ur", status: "live", recording: "urdu" },
    { id: "pa", language: "pa", status: "live", recording: "punjabi" },
    { id: "skr", language: "skr", status: "live", recording: "saraiki" },
    { id: "sd", language: "sd", status: "live", recording: "sindhi" },
    { id: "bal", language: "bal", status: "live", recording: "bugti" },
    { id: "bal-makrani", language: "bal", dialect: "makrani", status: "live", recording: "makrani" },
    { id: "brh", language: "brh", status: "live", recording: "brahui" },
    { id: "fa", language: "fa", status: "live", recording: "persian" },
    { id: "ar", language: "ar", status: "live", recording: "arabic" },
    { id: "en", language: "en", status: "live", recording: "english" },
    { id: "hno", language: "hno", status: "next" },
    { id: "ks", language: "ks", status: "next" },
];

// Languages shown in their own script in the scrolling band on the home page.
export const SCRIPT_BAND = ["ur", "ps", "pa", "skr", "sd", "bal", "brh", "fa", "ar"];

export const getVariety = (id) => VARIETIES.find((v) => v.id === id);
export const liveVarieties = () => VARIETIES.filter((v) => v.status === "live");
