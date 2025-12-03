import type { MDXComponents } from "mdx/types";

import { cn } from "./lib/utils";
import Image from "next/image";

/*
const components = {
  h1: ({ className, ...props }) => (
    <h1
      className={cn(
        "text-white text-2xl md:text-4xl font-bold tracking-tight mt-8 md:mt-10 mb-2 md:mb-4",
        className,
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }) => (
    <h2
      className={cn(
        "text-white text-xl md:text-3xl font-semibold tracking-tight mt-8 md:mt-10 mb-2 md:mb-4",
        className,
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }) => (
    <h3
      className={cn(
        "text-white text-lg md:text-2xl font-semibold tracking-tight mt-6 md:mt-8 mb-2 md:mb-4",
        className,
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }) => (
    <h4
      className={cn(
        "text-white text-base md:text-xl font-semibold tracking-tight mt-6 md:mt-8 mb-2 md:mb-4",
        className,
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }) => (
    <p
      className={cn(
        "text-white text-sm md:text-base leading-7 mb-2 md:mb-4",
        className,
      )}
      {...props}
    />
  ),
  a: ({ className, ...props }) => (
    <a
      className={cn(
        "text-sm md:text-base font-medium underline underline-offset-4 !text-blue-600",
        className,
      )}
      {...props}
    />
  ),
  ul: ({ className, ...props }) => (
    <ul
      className={cn(
        "text-white my-4 md:my-6 ml-4 md:ml-6 list-disc",
        className,
      )}
      {...props}
    />
  ),
  ol: ({ className, ...props }) => (
    <ol
      className={cn(
        "text-white my-4 md:my-6 ml-4 md:ml-6 list-decimal",
        className,
      )}
      {...props}
    />
  ),
  li: ({ className, ...props }) => (
    <li
      className={cn("text-white text-sm md:text-base mt-0 md:mt-2", className)}
      {...props}
    />
  ),
  blockquote: ({ className, ...props }) => (
    <blockquote
      className={cn(
        "text-white mt-4 md:mt-6 border-l-2 pl-4 md:pl-6 italic",
        className,
      )}
      {...props}
    />
  ),
  code: ({ className, ...props }) => (
    <code
      className={cn(
        "text-white relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-xs md:text-sm",
        className,
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }) => (
    <pre
      className={cn(
        "text-white mt-4 md:mt-6 mb-4 md:mb-6 overflow-x-auto rounded-lg bg-muted p-2.5 md:p-4 text-wrap",
        className,
      )}
      {...props}
    />
  ),
  img: (props) => (
    <Image sizes="100vw" style={{ width: "100%", height: "auto" }} {...props} />
  ),
};
*/

export function useMDXComponents(comps: MDXComponents): MDXComponents {
  return {
    h1: ({ className, ...props }) => (
      <h1
        className={cn(
          "text-white text-2xl md:text-4xl font-bold tracking-tight mt-8 md:mt-10 mb-2 md:mb-4",
          className,
        )}
        {...props}
      />
    ),
    h2: ({ className, ...props }) => (
      <h2
        className={cn(
          "text-white text-xl md:text-3xl font-semibold tracking-tight mt-8 md:mt-10 mb-2 md:mb-4",
          className,
        )}
        {...props}
      />
    ),
    h3: ({ className, ...props }) => (
      <h3
        className={cn(
          "text-white text-lg md:text-2xl font-semibold tracking-tight mt-6 md:mt-8 mb-2 md:mb-4",
          className,
        )}
        {...props}
      />
    ),
    h4: ({ className, ...props }) => (
      <h4
        className={cn(
          "text-white text-base md:text-xl font-semibold tracking-tight mt-6 md:mt-8 mb-2 md:mb-4",
          className,
        )}
        {...props}
      />
    ),
    p: ({ className, ...props }) => (
      <p
        className={cn(
          "text-white text-sm md:text-base leading-7 mb-2 md:mb-4",
          className,
        )}
        {...props}
      />
    ),
    a: ({ className, ...props }) => (
      <a
        className={cn(
          "text-sm md:text-base font-medium underline underline-offset-4 !text-blue-600",
          className,
        )}
        {...props}
      />
    ),
    ul: ({ className, ...props }) => (
      <ul
        className={cn(
          "text-white my-4 md:my-6 ml-4 md:ml-6 list-disc",
          className,
        )}
        {...props}
      />
    ),
    ol: ({ className, ...props }) => (
      <ol
        className={cn(
          "text-white my-4 md:my-6 ml-4 md:ml-6 list-decimal",
          className,
        )}
        {...props}
      />
    ),
    li: ({ className, ...props }) => (
      <li
        className={cn(
          "text-white text-sm md:text-base mt-0 md:mt-2",
          className,
        )}
        {...props}
      />
    ),
    blockquote: ({ className, ...props }) => (
      <blockquote
        className={cn(
          "text-white mt-4 md:mt-6 border-l-2 pl-4 md:pl-6 italic",
          className,
        )}
        {...props}
      />
    ),
    code: ({ className, ...props }) => (
      <code
        className={cn(
          "text-white relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-xs md:text-sm",
          className,
        )}
        {...props}
      />
    ),
    pre: ({ className, ...props }) => (
      <pre
        className={cn(
          "text-white mt-4 md:mt-6 mb-4 md:mb-6 overflow-x-auto rounded-lg bg-muted p-2.5 md:p-4 text-wrap",
          className,
        )}
        {...props}
      />
    ),
    img: (props) => (
      <Image
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        {...props}
      />
    ),
    ...comps,
  };
}
