import { Fragment } from "react";

// A content string with {placeholders} swapped for elements, e.g.
//   <Rich text="Send it in the {header} header." values={{ header: <Code>x-api-key</Code> }} />
// so translated text keeps its own word order around inline code or links.
export default function Rich({ text, values }) {
    return text.split(/(\{\w+\})/).map((part, i) => {
        const key = part.match(/^\{(\w+)\}$/)?.[1];
        return <Fragment key={i}>{key && key in values ? values[key] : part}</Fragment>;
    });
}
