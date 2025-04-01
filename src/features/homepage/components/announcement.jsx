import { Countdown } from "@/components/countdown";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Announcement = () => {
  return (
    <div className="fixed bottom-10 right-10 border-2 border-primary bg-white rounded-xl flex items-center gap-8 py-3 px-4 z-50">
      <div className="max-w-32 font-semibold">JIT Summit {'&'} Launch Event</div>

      <div className="flex items-center gap-4">
        <div>
          <Countdown targetDate="2025-04-16T23:59:59" />
        </div>

        <Separator orientation="vertical" className="h-12" />

        <Link href={'https://www.lsp.devontech.io/events'} target="_blank" className={cn(buttonVariants({ variant: "default", size: "lg" }), "bg-green-500 hover:bg-green-600",)}>Register Now</Link>
      </div>
    </div>
  );
};


export { Announcement };
