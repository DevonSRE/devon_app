"use client";

import { cn } from "@/lib/utils";

export default function TableOfContents({
  headings,
  activeId,
}: {
  headings: { id: string; text: string; level: number }[];
  activeId: string;
}) {
  if (headings.length === 0) {
    return (
      <div className="p-4">
        {/*<p className="text-lg font-semibold mb-4">Table of Contents</p>*/}
        <p className="text-sm text-muted-foreground">Loading...</p>
      </div>
    );
  }

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="px-6 max-h-[calc(100vh_-_80px)]">
      {/*<p className="text-lg font-semibold mb-4">Table of Contents</p>*/}
      <nav className="py-10">
        <ul className="space-y-2">
          {headings.map((heading) => (
            <li
              key={heading.id}
              style={{ paddingLeft: `${(heading.level - 1) * 0.75}rem` }}
              className="space-y-1.5 text-white"
            >
              <a
                href={`#${heading.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(heading.id);
                }}
                className={cn(
                  "block py-0.5 text-sm hover:text-white transition-colors pl-4",
                  // activeId === heading.id
                  //   ? "text-muted-foreground font-medium"
                  //   : "text-neutral-200",
                  activeId === heading.id
                    ? "font-semibold text-custom-lime border-l-4 border-custom-lime"
                    : "text-white font-normal",
                )}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
