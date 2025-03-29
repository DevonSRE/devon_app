import { cn } from "@/lib/utils";

const SectionTitle = ({ children, className }) => {
  return (
    <h1 className={cn("font-bold text-5xl", className)}>
      {children}
    </h1>
  );
}

const colorVariants = {
  green: "text-green-600 bg-green-100",
  purple: "text-devon-purple bg-devon-purple/10",
  red: "text-rose-600 bg-rose-100",
  gray: "text-neutral-100 bg-neutral-800",
}

const SectionTag = ({ color, text, className }) => {
  return (
    <div className={cn(
      "py-1.5 px-4 rounded-md text-sm w-fit",
      color ? colorVariants[color] : colorVariants["gray"],
      className,
    )}>
      {text}
    </div>
  );
}

export { SectionTitle, SectionTag, };
