import { ChevronDown } from "lucide-react";

// "On this page": a link to each policy section. On wide screens it sticks
// beside the policy; on small screens it folds into a dropdown above it, so
// the policy starts on the first screen.
//   title     content.privacy.contents
//   sections  content.privacy.sections
export default function PolicyContents({ title, sections }) {
    return (
        <>
            <details className="group rounded-xl border border-rule bg-panel lg:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3.5 text-[15px] font-semibold text-fg [&::-webkit-details-marker]:hidden">
                    {title}
                    <ChevronDown size={18} className="text-fg-muted transition-transform duration-300 group-open:rotate-180" aria-hidden="true" />
                </summary>
                <nav aria-label={title} className="px-4 pb-2"><Links sections={sections} /></nav>
            </details>

            <nav aria-label={title} className="hidden lg:sticky lg:top-28 lg:block lg:max-h-[calc(100svh-8rem)] lg:overflow-y-auto">
                <h2 className="m-0 mb-3 text-sm font-semibold text-fg">{title}</h2>
                <Links sections={sections} />
            </nav>
        </>
    );
}

function Links({ sections }) {
    return (
        <ol className="m-0 grid list-none gap-x-6 border-t border-rule p-0 sm:grid-cols-2 lg:grid-cols-1">
            {sections.map((s, i) => (
                <li key={s.id} className="border-b border-rule last:border-b-0 lg:last:border-b">
                    <a href={`#${s.id}`} className="flex gap-2.5 py-2 text-[14.5px] leading-snug text-fg-muted no-underline transition-colors hover:text-primary">
                        <span className="w-5 shrink-0 tabular-nums">{i + 1}.</span>{s.title}
                    </a>
                </li>
            ))}
        </ol>
    );
}
