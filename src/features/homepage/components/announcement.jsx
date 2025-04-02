'use client';


import { Countdown } from "@/components/countdown";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Announcement = () => {
  return (
    <div className="fixed bottom-2 md:bottom-10 right-2 md:right-10 border-2 border-primary bg-white rounded-md md:rounded-xl flex flex-col md:flex-row items-center gap-5 md:gap-8 py-1.5 md:py-3 px-2 md:px-4 z-50">
      <div className="max-w-32 text-sm md:text-base font-semibold">JIT Summit {'&'} Launch Event</div>

      <div className="flex flex-col md:flex-row items-center gap-2.5 md:gap-4">
        <div>
          <Countdown targetDate="2025-04-16T23:59:59" />
        </div>

        <Separator orientation="vertical" className="hidden md:block h-12" />

        <Link href={'https://www.lsp.devontech.io/events/jitsummit'} target="_blank" className={cn(buttonVariants({ variant: "default", size: "lg" }), "bg-green-500 hover:bg-green-600",)}>Register Now</Link>
      </div>
    </div>
  );
};


export { Announcement };
