"use client";
import { useState } from "react";

interface Props {
  title: string;
  children?: React.ReactNode;
  defaultOpen?: boolean;
}

export function AccordionItem({ title, children, defaultOpen = false }: Props) {
  const [expanded, setExpanded] = useState(defaultOpen);

  return (
    <div className="py-2">
      <button
        type="button"
        className="flex items-center justify-between w-full text-left font-semibold py-2"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
      >
        <span>{title}</span>

        {/* Icon */}
        <svg
          className="fill-accent shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Toggle accordion</title>
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              expanded ? "rotate-180" : ""
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              expanded ? "rotate-180" : ""
            }`}
          />
        </svg>
      </button>

      {/* Content */}
      <div
        className={`grid text-sm text-slate-600 overflow-hidden transition-all duration-300 ease-in-out ${
          expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
}
