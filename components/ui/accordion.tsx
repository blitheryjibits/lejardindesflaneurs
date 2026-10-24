import { AccordionItem } from "./accordion-item";

interface AccordionItemData {
  title: string;
  content: string;
  defaultOpen: boolean;
}

interface AccordionProps {
  items: AccordionItemData[];
}

export function Accordion({ items }: AccordionProps) {
  return (
    <div className="divide-y divide-slate-200">
      {items.map((item, i) => (
        <AccordionItem
          key={i}
          title={item.title}
          defaultOpen={item.defaultOpen}
        >
          <p className="pb-3">{item.content}</p>
        </AccordionItem>
      ))}
    </div>
  );
}
