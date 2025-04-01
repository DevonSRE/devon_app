import { cn } from "@/lib/utils";

const SectionTitle = ({ children, className }) => {
  return (
    <h1 className={cn("font-bold text-3xl md:text-5xl", className)}>
      {children}
    </h1>
  );
}

const colorVariants = {
  green: {
    main: "text-green-600 bg-green-100",
    outline: "",
  },
  "green-dark": {
    main: "text-green-400 bg-green-950",
    outline: "p-px rounded-md bg-gradient-to-b from-green-950 via-green-700 to-green-950",
  },
  purple: {
    main: "text-devon-purple bg-devon-purple/10",
    outline: "",
  },
  "purple-dark": {
    main: "text-devon-purple bg-devon-purple/80",
    outline: "p-px rounded-md bg-gradient-to-b from-devon-purple via-devon-purple/70 to-devon-purple",
  },
  red: {
    main: "text-rose-600 bg-rose-100",
    outline: "",
  },
  "red-dark": {
    main: "text-rose-400 bg-rose-950",
    outline: "p-px rounded-md bg-gradient-to-b from-rose-950 via-rose-700 to-rose-950",
  },
  gray: {
    main: "text-neutral-100 bg-neutral-800",
    outline: "",
  },
  "gray-dark": {
    main: "text-neutral-400 bg-neutral-950",
    outline: "p-px rounded-md bg-gradient-to-b from-neutral-950 via-neutral-700 to-neutral-950",
  },
}

const SectionTag = ({ color, text, className }) => {
  return (
    <div className={cn(color ? colorVariants[color].outline : colorVariants['gray'].outline)}>
      <div className={cn(
        "py-1.5 px-2 md:px-4 rounded-md text-xs md:text-sm w-fit whitespace-nowrap",
        color ? colorVariants[color].main : colorVariants["gray"].main,
        className,
      )}>
        {text}
      </div>
    </div>
  );
}

export { SectionTitle, SectionTag, };
