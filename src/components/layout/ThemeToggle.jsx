"use client";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { applyTheme, currentTheme, THEMES } from "@/lib/theme";

// Light / dark switch. Shows a moon in light mode and a sun in dark mode.
// `t` is content.common.theme.
export default function ThemeToggle({ t }) {
    // Until mounted the theme on <html> is unknown to React, so start from light
    // and correct after mount (the icon swap is the only visible difference).
    const [theme, setTheme] = useState(THEMES.light);
    useEffect(() => setTheme(currentTheme()), []);

    const dark = theme === THEMES.dark;
    const label = dark ? t.toLight : t.toDark;
    const flip = () => {
        const next = dark ? THEMES.light : THEMES.dark;
        applyTheme(next);
        setTheme(next);
    };

    return (
        <button type="button" onClick={flip} aria-label={label} title={label}
            className="grid size-[42px] place-items-center rounded-xl border border-rule text-fg transition duration-200 ease-soft hover:-translate-y-0.5 hover:border-primary">
            {dark
                ? <Sun key="sun" size={18} className="animate-spin-in" aria-hidden="true" />
                : <Moon key="moon" size={18} className="animate-spin-in" aria-hidden="true" />}
        </button>
    );
}
