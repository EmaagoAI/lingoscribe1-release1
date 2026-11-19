"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { MAIN_NAV } from "@/config/navigation";
import { EXTERNAL, ROUTES } from "@/config/routes";
import { cx } from "@/lib/format";
import { newTab } from "@/lib/links";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

// Sticky top bar. Frosted, with a shadow and a reading-progress line that
// appear as the page scrolls. Below 1024px the links move into a menu.
// `t` is content.common.
export default function SiteHeader({ t }) {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const nav = MAIN_NAV.filter((item) => !(item.hideOnSelf && pathname === item.href));

    // Close the menu when the route changes, and stop the page scrolling behind it.
    useEffect(() => setOpen(false), [pathname]);
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [open]);

    return (
        <header className="scroll-shadow sticky top-0 z-20 border-b border-rule bg-header backdrop-blur-[14px] backdrop-saturate-150">
            <span aria-hidden="true" className="scroll-progress absolute inset-x-0 -bottom-px h-0.5 bg-linear-to-r from-primary to-tide" />
            <Container className="flex min-h-18 items-center justify-between gap-3 sm:gap-8">
                <Logo alt={t.brand} label={t.homeLabel} />

                <nav aria-label={t.nav.label} className="hidden gap-5 whitespace-nowrap text-[15px] font-medium lg:flex xl:gap-[30px]">
                    {nav.map((item) => (
                        <NavLink key={item.id} href={item.href} current={pathname === item.href}>{t.nav[item.id]}</NavLink>
                    ))}
                </nav>

                <div className="flex items-center gap-2 sm:gap-3.5">
                    <ThemeToggle t={t.theme} />
                    <Link href={EXTERNAL.signIn} {...newTab(EXTERNAL.signIn)} className="hidden whitespace-nowrap px-1.5 text-[15px] font-medium text-fg hover:text-primary lg:inline">{t.header.signIn}</Link>
                    <Button href={ROUTES.signup} className="max-[379px]:px-3.5 max-[339px]:px-3 max-[339px]:text-sm">{t.header.startFree}</Button>
                    <button type="button" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-controls="site-menu"
                        aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
                        className="grid size-[42px] place-items-center rounded-xl border border-rule text-fg lg:hidden">
                        {open ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </Container>

            {open && (
                <div id="site-menu" className="h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-rule bg-bg lg:hidden">
                    <Container className="flex flex-col gap-1 py-4">
                        {nav.map((item) => (
                            <Link key={item.id} href={item.href} {...newTab(item.href)} aria-current={pathname === item.href ? "page" : undefined}
                                className="rounded-xl px-3 py-3 text-lg font-medium text-fg hover:bg-soft">
                                {t.nav[item.id]}
                            </Link>
                        ))}
                        <div className="mt-4 grid gap-3">
                            <Button href={ROUTES.signup} size="lg">{t.header.startFree}</Button>
                            <Button href={EXTERNAL.signIn} variant="secondary" size="lg">{t.header.signIn}</Button>
                        </div>
                    </Container>
                </div>
            )}
        </header>
    );
}

// A nav link with an underline that grows from the left on hover, and stays
// under the page the visitor is on.
function NavLink({ href, current, children }) {
    return (
        <Link href={href} {...newTab(href)} aria-current={current ? "page" : undefined}
            className={cx(
                "relative py-3 text-fg-muted transition-colors hover:text-fg",
                "after:absolute after:inset-x-0 after:bottom-1.5 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-sm after:bg-primary after:transition-transform after:duration-300 after:ease-soft",
                "hover:after:scale-x-100 aria-[current=page]:text-fg aria-[current=page]:after:scale-x-100",
            )}>
            {children}
        </Link>
    );
}
