import { CONTACT_EMAIL } from "@/config/routes";
import Rich from "@/components/ui/Rich";

// The policy itself, from content.privacy.sections: numbered sections made of
// paragraphs, sub-headings and lists, each with an anchor for the contents list.
const email = <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-link underline underline-offset-4 hover:text-primary">{CONTACT_EMAIL}</a>;
const Text = ({ children }) => <Rich text={children} values={{ email }} />;

export default function PolicyBody({ sections }) {
    return (
        <div className="flex min-w-0 flex-col gap-12 md:gap-14">
            {sections.map((section, i) => (
                <section key={section.id} id={section.id} aria-labelledby={`${section.id}-title`} className="scroll-mt-28">
                    <h2 id={`${section.id}-title`}
                        className="m-0 mb-4 text-balance text-2xl font-semibold leading-tight tracking-[-0.025em] text-fg md:text-[28px]">
                        <span className="mr-2.5 tabular-nums text-fg-muted">{i + 1}.</span>{section.title}
                    </h2>
                    <div className="flex flex-col gap-4 text-pretty text-base leading-[1.7] text-fg-muted md:text-[16.5px]">
                        {section.blocks.map((block, j) => <Block key={j} block={block} />)}
                    </div>
                </section>
            ))}
        </div>
    );
}

function Block({ block }) {
    if (block.h3) return <h3 className="m-0 mt-2 text-[17px] font-semibold text-fg">{block.h3}</h3>;
    if (block.list) {
        return (
            <ul className="m-0 flex list-disc flex-col gap-2 pl-6 marker:text-primary">
                {block.list.map((item, k) => (
                    <li key={k}>
                        {item.term && <strong className="font-semibold text-fg">{item.term}: </strong>}
                        <Text>{item.text}</Text>
                    </li>
                ))}
            </ul>
        );
    }
    if (block.name) {
        return <p className="m-0"><strong className="font-semibold text-fg">{block.name}</strong><br /><Text>{block.p}</Text></p>;
    }
    return <p className="m-0"><Text>{block.p}</Text></p>;
}
