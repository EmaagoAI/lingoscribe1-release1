// Light / dark theme. The site starts light; a visitor's choice is saved in
// localStorage and put on <html data-theme> before the first paint (by
// THEME_SCRIPT in the layout), so the page never flashes the wrong theme.

export const THEME_KEY = "theme";
export const THEMES = { light: "light", dark: "dark" };

export const THEME_SCRIPT = `try{if(localStorage.getItem("${THEME_KEY}")==="${THEMES.dark}")document.documentElement.dataset.theme="${THEMES.dark}"}catch(e){}`;

export const currentTheme = () =>
    document.documentElement.dataset.theme === THEMES.dark ? THEMES.dark : THEMES.light;

export function applyTheme(theme) {
    const root = document.documentElement;
    if (theme === THEMES.dark) root.dataset.theme = THEMES.dark;
    else delete root.dataset.theme;
    try { localStorage.setItem(THEME_KEY, theme); } catch { /* storage blocked: the choice lasts for this visit */ }
}
