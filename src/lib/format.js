// Fills {placeholders} in a content string: fill("{n} hours", { n: 5 }) → "5 hours".
export function fill(template, values = {}) {
    return template.replace(/\{(\w+)\}/g, (match, key) => (key in values ? String(values[key]) : match));
}

// Seconds as m:ss, e.g. 75.4 → "1:15".
export function clock(seconds) {
    const s = Math.max(0, Math.floor(seconds));
    return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
}

// Joins class names, skipping empty ones.
export function cx(...classes) {
    return classes.filter(Boolean).join(" ");
}
