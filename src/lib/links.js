// True for links that leave the site (http/https), false for paths, #anchors, mailto: and tel:.
export function isExternal(href) {
    return typeof href === "string" && /^https?:\/\//i.test(href);
}

// Props that open external links in a new tab; none for internal ones.
// Spread onto a link: <Link href={href} {...newTab(href)}>.
export function newTab(href) {
    return isExternal(href) ? { target: "_blank", rel: "noopener noreferrer" } : {};
}
