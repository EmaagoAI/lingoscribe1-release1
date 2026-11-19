import { LANGUAGES, VARIETIES } from "@/data/languages";
import { fill } from "./format";

// Display name of a language or dialect in the site's language, e.g. "Pashto, Waziri".
// `t` is content.languages.
export function varietyLabel(variety, t) {
    const language = t.names[variety.language];
    return variety.dialect ? fill(t.withDialect, { language, dialect: t.dialects[variety.dialect] }) : language;
}

export const nativeName = (variety) => LANGUAGES[variety.language]?.native ?? "";

// Whether a language is written right to left (Arabic-script ones are; English isn't).
export const isRtl = (language) => LANGUAGES[language]?.rtl ?? true;

// Recordings are translated into English, so one already in English has no
// separate translation to show.
export const isTranslated = (language) => language !== "en";

export const varietyForRecording = (recordingId) => VARIETIES.find((v) => v.recording === recordingId);
