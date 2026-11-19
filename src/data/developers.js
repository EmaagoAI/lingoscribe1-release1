// The public API as it really is (lingoplatform-backend, routes/processRoutes.js
// and the platform's API docs). Keep this in step when the API changes.

// Endpoints, in the order the docs list them. `id` keys the description in
// content/<locale>/developers.js.
export const ENDPOINTS = [
    { id: "transcribe", method: "POST", path: "/v1/transcribe" },
    { id: "translate", method: "POST", path: "/v1/translate" },
    { id: "summarization", method: "POST", path: "/v1/summarization" },
    { id: "ner", method: "POST", path: "/v1/ner" },
    { id: "keywordSpotting", method: "POST", path: "/v1/keyword-spotting" },
    { id: "diarization", method: "POST", path: "/v1/diarization" },
    { id: "tts", method: "POST", path: "/v1/tts" },
    { id: "s2s", method: "POST", path: "/v1/s2s" },
];

// The `language` codes the API takes, each paired with the language or dialect
// it means on this site (ids from data/languages.js), for its name.
export const API_LANGUAGES = [
    { code: "ur", variety: "ur" },
    { code: "en", variety: "en" },
    { code: "pesh", variety: "ps-peshawari" },
    { code: "afri", variety: "ps-afridi" },
    { code: "bitt", variety: "ps-bittani" },
    { code: "mehs", variety: "ps-mehsud" },
    { code: "wazi", variety: "ps-waziri" },
    { code: "pan", variety: "pa" },
    { code: "skr", variety: "skr" },
    { code: "sd", variety: "sd" },
    { code: "bal", variety: "bal" },
    { code: "makr", variety: "bal-makrani" },
    { code: "brh", variety: "brh" },
    { code: "fa", variety: "fa" },
    { code: "ar", variety: "ar" },
];

// Auth, errors and limits, as the API returns them.
export const API_RULES = {
    keyHeader: "x-api-key",
    quotaError: "403 QUOTA_EXCEEDED",
    rateError: "429",
    requestsPerMinute: 5,
};

// The hero's sample call: /v1/transcribe on this recording (data/recordings.js).
export const API_SAMPLE = {
    recording: "waziri",
    file: "waziri-market.mp3",
    lines: 1, // how many transcript segments the response shows
};
