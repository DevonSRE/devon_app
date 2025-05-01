import React from "react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { SectionTitle } from "@/components/section-util-tags";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <div className="bg-[url('/svg/devon-bg-eclipse.svg')] lg:bg-[url('/svg/devon-hero-bg.svg')] bg-neutral-950 bg-cover md:bg-contain bg-left md:bg-right bg-no-repeat w-full relative">
      <div className="max-w-screen-sm sm:max-w-screen-md md:max-w-screen-xl xl:max-w-screen-2xl mx-auto min-h-[calc(100dvh-70px)] w-full text-white flex flex-col md:flex-row justify-center md:justify-start items-center">
        {/* Content Container */}
        <div className="w-full min-h-full md:relative -translate-y-24 md:-translate-y-16 lg:-translate-y-0">
          <div className="w-full h-full">
            <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-1 px-5 md:px-0">
              <div className="col-span-full md:col-span-6 col-start-1 md:col-start-2">
                <SectionTitle className="pt-10 md:pt-20 text-center md:text-start 2xl:text-5xl">
                  Empowering <span className="text-green-500">Access to <br /> Justice</span> through Innovative Legal Solutions
                </SectionTitle>
              </div>

              <p className="col-span-full col-start-1 md:col-start-2 font-light text-center md:text-start text-xs md:text-sm xl:text-base md:mt-6 mt-4 max-w-full md:max-w-[600px]">
                At the forefront of legal technology, we craft bespoke digital solutions that enhace access to justice. Our mission is to modernize legal workflows, ensuring efficiency and equity for all legal professionals.
              </p>

              <div className="col-span-full md:col-span-6 col-start-1 md:col-start-2 py-8 md:py-16 flex justify-center md:justify-start gap-2 md:gap-4">
                <Link href='/solutions' className={cn(buttonVariants(), "bg-green-600 hover:bg-green-700 xl:py-6 xl:text-lg")}>
                  Explore Our Solutions
                </Link>
                <Link href='/contact-us' className={cn(buttonVariants({ variant: 'secondary' }), "xl:py-6 xl:text-lg")}>
                  Partner With Us
                </Link>
              </div>

            </div>
          </div>
        </div>

        <Image
          src="/svg/devon-hero-illustration.svg"
          alt="A pattern of Devon"
          width={500}
          height={500}
          className="size-52 md:size-96 absolute bottom-0 -left-14 pointer-events-none"
        />
      </div>
    </div>
  );
};

export default Hero;
