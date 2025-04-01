import Image from "next/image";
// import Link from "next/link";
import { SectionTag, SectionTitle } from "@/components/section-util-tags";
import { Button } from "@/components/ui/button";

import aboutOne from "/public/images/devon-about-1.png";
import aboutTwo from "/public/images/devon-about-2.png";
import aboutThree from "/public/images/devon-about-3.png";
import aboutFour from "/public/images/devon-about-wide.png";

const AboutUs = ({ showButtons = true, tagColor = "purple" }) => {
  return (
    <div className="max-w-screen-sm md:max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-28 md:py-32 px-5 md:px-0">
      <div className="col-span-full col-start-1 md:col-start-2">
        <SectionTag color={tagColor} text="About Us" />
      </div>

      <div className="col-span-full col-start-1 md:col-start-2">
        <SectionTitle className="text-2xl md:text-4xl">
          Who We Are
        </SectionTitle>
      </div>

      <div className="col-span-full col-start-1 md:col-start-2 col-end-2 md:col-end-12 font-light text-sm md:text-base">
        <p>
          At Devon Technologies LTD, we are redefining the legal landscape by building innovative digital solutions that enhance access to justice. Our mission is to empower legal professionals, with technology that streamlines workflows, improves efficiency, and facilitates seamless legal processes.
        </p>

        <p>
          With a deep understanding of the legal sector&apos;s unique challenges, we craft tailor-made solutions that address the evolving needs of modern legal systems. From Judic AI, our advanced legal speech processing platform, to our e-Filing Management System, we are committed to delivering cutting-edge tools that simplify case management, enable virtual hearings, and ensure secure document handling.
        </p>

        <p>
          Driven by innovation and a commitment to justice, we bridge the gap between legal institutions and technology—creating solutions that not only optimize daily tasks but also pave the way for a more accessible and efficient legal system.
        </p>

        <br />

        <p>
          At Devon Technologies LTD, we don&apos;t just build technology—we shape the future of legal processes.
        </p>
      </div>

      {showButtons && (
        <div className="col-span-full col-start-1 md:col-start-2 font-light flex gap-2.5 md:gap-5 items-center">
          <Button className="bg-devon-purple hover:bg-devon-purple/85" size="lg">
            Learn More
          </Button>

          <Button variant="outline" size="lg" className="ring-neutral-800 ring-2">
            Partner With Us
          </Button>
        </div>
      )}

      <div className="col-span-full col-start-1 md:col-start-2 col-end-2 md:col-end-12 grid grid-cols-2 md:grid-cols-8 grid-rows-2 gap-2.5 md:gap-5">
        <div className="col-span-1 md:col-span-3 bg-neutral-100 h-44 w-full rounded-md overflow-hidden">
          <Image
            src={aboutOne}
            alt=""
            height={500}
            width={500}
            className="size-full object-cover aspect-square md:aspect-video"
          />
        </div>
        <div className="col-span-1 md:col-span-3 bg-neutral-100 h-44 w-full rounded-md overflow-hidden">
          <Image
            src={aboutTwo}
            alt=""
            height={500}
            width={500}
            className="size-full object-cover aspect-square md:aspect-video"
          />
        </div>
        <div className="hidden md:block col-span-2 col-start-7 row-span-full bg-neutral-100 h-full w-full rounded-md overflow-hidden">
          <Image
            src={aboutThree}
            alt=""
            height={500}
            width={500}
            className="size-full object-cover aspect-video"
          />
        </div>
        <div className="col-span-2 md:col-span-6 bg-neutral-100 h-44 w-full rounded-md overflow-hidden">
          <Image
            src={aboutFour}
            alt=""
            height={500}
            width={500}
            className="size-full object-cover aspect-video"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
