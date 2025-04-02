import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/section-util-tags";

const Hero = () => {
  return (
    <div className="bg-[url('/svg/devon-bg-eclipse.svg')] md:bg-[url('/svg/devon-hero-bg.svg')] bg-neutral-950 bg-cover md:bg-contain bg-left md:bg-right bg-no-repeat w-full relative">
      <div className="max-w-screen-xl mx-auto min-h-[calc(100dvh-70px)] w-full text-white flex flex-col md:flex-row justify-center md:justify-start items-center">
        {/* Content Container */}
        <div className="w-full min-h-full md:relative">
          <div className="w-full h-full">
            <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-1 px-5 md:px-0">
              <div className="col-span-full md:col-span-6 col-start-1 md:col-start-2">
                <SectionTitle className="pt-10 md:pt-20 text-center md:text-start">
                  Empowering <span className="text-green-500">Access to <br /> Justice</span> through Innovative Legal Solutions
                </SectionTitle>
              </div>

              <p className="col-span-full col-start-1 md:col-start-2 font-light text-center md:text-start text-xs md:text-sm md:mt-6 mt-4 max-w-full md:max-w-[600px]">
                At the forefront of legal technology, we craft bespoke digital solutions that enhace access to justice. Our mission is to modernize legal workflows, ensuring efficiency and equity for all legal professionals.
              </p>

              <div className="col-span-full md:col-span-6 col-start-1 md:col-start-2 py-8 md:py-16 flex justify-center md:justify-start gap-2 md:gap-4">
                <Link href='/solutions'>
                  <Button className="bg-green-600 hover:bg-green-700">
                    Explore Our Solutions
                  </Button>
                </Link>
                <Link href='/contact-us'>
                  <Button variant={'secondary'}>
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
          className="size-64 md:size-96 absolute bottom-0 -left-14"
        />
      </div>
    </div>
  );
};

export default Hero;
