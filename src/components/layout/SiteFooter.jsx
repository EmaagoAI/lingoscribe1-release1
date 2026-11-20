import Link from "next/link";
import { FOOTER_NAV } from "@/config/navigation";
import { fill } from "@/lib/format";
import { newTab } from "@/lib/links";
import Container from "@/components/ui/Container";
import Logo from "./Logo";

// Footer: logo and tagline, then link columns. `t` is content.common.
export default function SiteFooter({ t }) {
    const f = t.footer;
    return (
        <footer className="border-t border-rule bg-bg">
            <Container className="flex flex-col gap-12 pb-9 pt-16">
                <div className="flex flex-wrap justify-between gap-x-14 gap-y-8">
                    <div className="flex max-w-[300px] flex-col gap-3.5">
                        <Logo alt={t.brand} link={false} />
                        <p className="m-0 text-[15.5px] leading-normal text-fg-muted">{f.tagline}</p>
                    </div>
                    <div className="flex flex-wrap gap-x-16 gap-y-8">
                        {FOOTER_NAV.map((col) => (
                            <div key={col.id} className="flex min-w-[150px] flex-col gap-3">
                                <span className="text-sm font-semibold text-fg">{f.columns[col.id]}</span>
                                {col.links.map((l) => (
                                    <Link key={l.id} href={l.href} {...newTab(l.href)} className="text-[15px] text-fg-muted transition-colors hover:text-primary">
                                        {l.label ?? f.links[l.id]}
                                    </Link>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                <p className="m-0 border-t border-rule pt-5 text-sm text-fg-muted">{fill(f.copyright, { year: new Date().getFullYear() })}</p>
            </Container>
        </footer>
    );
}
