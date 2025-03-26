import React from "react";
import heroImg from "/public/hero.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative w-full min-h-[calc(100dvh-70px)] bg-[url('/svg/devon-hero-bg.svg')] bg-neutral-950 bg-contain bg-right bg-no-repeat text-white flex items-center">
      {/* Content Container */}
      <div className="w-full min-h-full md:relative">
        <div className="w-full h-full">
          <div className="w-full grid grid-cols-12 gap-1">
            <h1 className="col-span-6 col-start-2 font-bold md:text-5xl md:pt-20 text-[28px]">
              Empowering <span className="text-green-500">Access to <br /> Justice</span> through Innovative Legal Solutions
            </h1>

            <p className="col-span-full col-start-2 font-light text-sm md:mt-6 mt-4 max-w-[600px]">
              At the forefront of legal technology, we craft bespoke digital solutions that enhace access to justice. Our mission is to modernize legal workflows, ensuring efficiency and equity for all legal professionals.
            </p>

            <div className="col-span-6 col-start-2 py-16 flex md:gap-4 gap-2">
              <Link href='/solutions'>
                <Button className="bg-green-600" size={'lg'}>
                  Explore Our Solutions
                </Button>
              </Link>
              <Link href='/contact'>
                <Button size={'lg'} variant={'secondary'}>
                  Partner With Us
                </Button>
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
        className="size-96 absolute bottom-0 -left-14"
      />
    </div>
  );
};

export default Hero;
