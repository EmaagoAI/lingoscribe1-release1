import en from "./en";

// All site text, by locale. To add a language: copy content/en to
// content/<code>, translate the strings, and register it here.
const LOCALES = { en };

export const DEFAULT_LOCALE = "en";

export function getContent(locale = DEFAULT_LOCALE) {
    return LOCALES[locale] ?? LOCALES[DEFAULT_LOCALE];
}
