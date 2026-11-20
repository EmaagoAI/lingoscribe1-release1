import { LANGUAGES, VARIETIES } from "@/data/languages";
import { TTS_LANGUAGES } from "@/data/platform";

// What each language can do today, taken from what the product really offers.
// Language ids are the ones in data/languages.js.
//
//   speech to text   every live language and dialect (platform: features/stt/constants.js)
//   text to speech   data/platform.js TTS_LANGUAGES (platform: features/tts/constants.js)
//   speech to speech the playground's lists (platform: features/s2s/languages.js),
//                    "in" = can be spoken to it, "out" = it can speak it back

export const S2S = {
    in: ["ur", "en", "ps", "pa", "skr", "sd", "bal", "brh", "fa", "ar"],
    out: ["en", "ur", "ps", "pa", "sd", "ar", "bal"],
};

// One row per language, in the order data/languages.js lists them.
//   dialects  dialect ids (content.languages.dialects), empty if none
//   live      false for languages that are coming next
//   s2s       "both" | "in" | "out" | null
export const SUPPORT = Object.keys(LANGUAGES).map((id) => {
    const varieties = VARIETIES.filter((v) => v.language === id);
    const live = varieties.some((v) => v.status === "live");
    const canIn = S2S.in.includes(id);
    const canOut = S2S.out.includes(id);
    return {
        id,
        live,
        dialects: varieties.filter((v) => v.dialect).map((v) => v.dialect),
        stt: live,
        tts: TTS_LANGUAGES.includes(id),
        s2s: canIn && canOut ? "both" : canIn ? "in" : canOut ? "out" : null,
    };
});
