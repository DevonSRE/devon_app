"use client";

import TableOfContents from "@/components/markdown/table-of-content";
import { cn } from "@/lib/utils";
import { ReactNode, useEffect, useState } from "react";

interface MDXLayoutProps {
  children: ReactNode;
  className?: string;
  mainClass?: string;
}

export function MDXLayout({ children, className, mainClass }: MDXLayoutProps) {
  const [headings, setHeadings] = useState<
    { id: string; text: string; level: number }[]
  >([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    try {
      // Extract headings from the document after it's rendered
      const elements = Array.from(
        document.querySelectorAll("h1, h2, h3, h4, h5, h6"),
      )
        .filter((element, index) => {
          element.id = element.id || `heading-${index}`;
          return element.id;
        })
        .map((element) => {
          return {
            id: element.id,
            text: element.textContent || "",
            level: parseInt(element.tagName.substring(1)),
          };
        });

      setHeadings(elements);

      // Set up intersection observer to detect which heading is currently visible
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveId(entry.target.id);
            }
          });
        },
        {
          rootMargin: "0px 0px -70% 0px",
          threshold: 0.5,
          // rootMargin: '0px 0px -80% 0px',
          // threshold: 0.1
        },
      );

      elements.forEach((heading) => {
        const element = document.getElementById(heading.id);
        if (element) {
          observer.observe(element);
        }
      });

      return () => {
        elements.forEach((heading) => {
          const element = document.getElementById(heading.id);
          if (element) {
            observer.unobserve(element);
          }
        });
      };
    } catch (error) {
      console.error("Error in MDXLayout:", error);
      // Don't rethrow the error, just log it
    }
  }, []);

  return (
    <div className="flex flex-col h-full w-full relative">
      <div className="flex flex-col md:flex-row gap-10">
        <aside
          className={cn(
            "md:w-64 flex-shrink-0 md:sticky top-20 self-start overflow-y-auto",
            "hidden md:block",
            className,
          )}
        >
          <TableOfContents headings={headings} activeId={activeId} />
        </aside>

        <main
          className={cn(
            "flex-1 min-w-0 prose text-white prose-a:no-underline prose-semibold:text-white prose-strong:text-white prose-bold:text-white prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-white prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg dark:prose-headings:text-white dark:prose-invert",
            "h-full md:border-l md:border-border px-4 w-full",
            mainClass,
          )}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
