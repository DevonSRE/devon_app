import React, { Fragment } from "react";
import Image from "next/image";
import solutionsPlaceholder from "/public/images/devon-solutions.png";
import { SectionTag, SectionTitle } from "@/components/section-util-tags";
import { Separator } from "@/components/ui/separator";
import { BoltIcon } from "@/components/icons/bolt-icon";
import { BoltBoardIcon } from "@/components/icons/bolt-board-icon";

import devonPatterns from "/public/svg/devon-d-digital-asset-outline.svg";

const Solutions = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 py-32 px-5 md:px-0">
        {/* patterns top right */}
        <Image
          src={devonPatterns}
          alt="patterns"
          height={700}
          width={700}
          className="absolute -top-80 -right-96 opacity-15 object-contain object-center -scale-y-100"
        />
        {/* patterns bottom left */}
        <Image
          src={devonPatterns}
          alt="patterns"
          height={700}
          width={700}
          className="absolute -bottom-72 -left-96 opacity-15 object-contain object-center -scale-x-100 scale-y-100"
        />

        <div className="col-span-full md:col-span-5 col-start-1 md:col-start-2">
          <SectionTag text="Our Solutions" color={'green'} />
        </div>

        <div className="col-span-full md:col-span-5 col-start-1 md:col-start-2">
          <SectionTitle className="text-4xl">
            Transforming Legal Workflows with Tailored <span className="text-green-500">Digital Solutions for Professionals <br /> </span>
          </SectionTitle>
        </div>

        <div className="col-span-full md:col-span-5 col-start-1 md:col-start-2">
          <p className="font-light text-sm md:text-base">
            Our innovative digital solutions streamline legal processes, enhancing efficiency and accessibility. Empower your practice with technology designed specifically for legal professionals.
          </p>
        </div>

        <div className="col-span-full md:col-span-5 col-start-1 md:col-start-2 flex items-center md:items-start justify-center md:justify-start gap-2 md:gap-5 h-fit">
          {headlines.map((headline, index) => (
            <Fragment key={headline.id}>
              <SolutionsHeadline headline={headline} />

              {index + 1 < headlines.length && (<Separator className="h-48" orientation="vertical" />)}
            </Fragment>
          ))}
        </div>

        <div className="col-span-full md:col-span-5 col-start-1 md:col-start-7 md:row-span-4 row-start-5 md:row-start-1 bg-gray-200 h-full rounded-xl overflow-hidden">
          <Image
            src={solutionsPlaceholder}
            alt="An image of a boy texting"
            height={500}
            width={500}
            className="object-cover object-center aspect-auto size-full"
          />
        </div>
      </div>
    </div>
  );
};

const headlines = [
  {
    id: 1,
    text: "Enhanced Efficiency",
    description: "Reduce administrative burdens and focus more on delivery justice to your clients",
    icon: <BoltBoardIcon className="size-8" />,
  },
  {
    id: 2,
    text: "Improved Access",
    description: "Bridge the gap between legal services and the public with our innovative tools.",
    icon: <BoltIcon className="size-8" />,
  },
];

export default Solutions;


const SolutionsHeadline = ({ headline }) => {
  return (
    <div className="w-full space-y-4">
      <div className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-green-100 to-white">
        {headline.icon}
      </div>

      <div className="font-semibold text-base md:text-lg">{headline.text}</div>
      <div className="font-light text-sm md:text-base">{headline.description}</div>
    </div>
  );
}
