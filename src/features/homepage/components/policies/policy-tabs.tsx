import { cn } from "@/lib/utils";
import Link from "next/link";

const PolicyTabs = () => {
  return (
    <div
      className={cn(
        "border-b border-neutral-800 md:border-neutral-700 py-5 md:py-8",
        "bg-primaryBg text-secondary",
        "flex justify-center items-center gap-8 md:gap-10",
      )}
    >
      <Link href="/policy">Privacy Policy</Link>
    </div>
  );
};

export { PolicyTabs };
