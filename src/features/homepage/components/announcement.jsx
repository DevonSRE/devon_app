'use client';


import { Countdown } from "@/components/countdown";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Announcement = () => {
  return (
    <div className="fixed bottom-2 md:bottom-10 right-2 md:right-10 border-2 border-primary bg-white rounded-md md:rounded-xl flex items-center gap-5 md:gap-8 py-1.5 md:py-3 px-2 md:px-4 z-50">
      <div className="flex  items-center gap-2.5 md:gap-4">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-1 md:gap-2 lg:gap-6">
          <div className="max-w-fit lg:max-w-32 text-xs md:text-base font-semibold">JIT Summit {'&'} Launch Event</div>

          <Countdown targetDate="2025-05-06T10:00:00.000Z" />
        </div>

        <Separator orientation="vertical" className="hidden md:block h-12" />

        <Link href={'https://www.lsp.devontech.io/events/jitsummit'} target="_blank" className={cn(buttonVariants({ variant: "default" }), "bg-green-500 hover:bg-green-600",)}>Register Now</Link>
      </div>
    </div>
  );
};


export { Announcement };
