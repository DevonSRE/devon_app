import React, { Fragment } from "react";
import { SectionTitle } from "@/components/section-util-tags";
import { Separator } from "@/components/ui/separator";
import map from "/public/svg/devon-nigeria-map.svg";
import Image from "next/image";

// import avatarImg from "../../../../public/avatar.png";
// import Image from "next/image";

const OurImpact = () => {
  return (
    <div className="bg-neutral-950 text-white relative">
      <div className="max-w-screen-sm md:max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 pt-48 pb-32 md:py-52 px-5 md:px-0">
        {/* pattern design desktop */}
        <div className="hidden md:block bg-[url('/svg/devon-logo-digital-asset.svg')] bg-left-top bg-no-repeat w-full h-24 absolute top-0 left-0" />
        {/* pattern design mobile */}
        <div className="md:hidden bg-[url('/svg/devon-logo-digital-asset.svg')] bg-left-top bg-no-repeat bg-contain w-full h-20 absolute top-0 left-0" />

        <div className="col-span-full md:col-span-5 col-start-1 md:col-start-2">
          <SectionTitle className="text-2xl md:text-4xl">
            <span className="text-devon-purple">Our Impact </span> Through <br /> Innovative Software Solutions
          </SectionTitle>
        </div>

        <div className="col-span-full md:col-span-5 col-start-1 md:col-start-2">
          <p className="font-light text-neutral-400">
            At Devon Technology, we are proud to have empowered over 20 organizations across Nigeria. Our innovative software solutions have successfully addressed critical social issues, fostering collaboration and efficiency.
          </p>
        </div>

        <div className="col-span-full md:col-span-5 col-start-1 md:col-start-2 flex items-center justify-between md:justify-start gap-5 md:gap-10 w-full md:w-auto h-fit">
          {stats.map((stat, index) => (
            <Fragment key={stat.id}>
              <StatsDisplay stat={stat} />

              {index + 1 < stats.length && (<Separator className="h-36 bg-neutral-800" orientation="vertical" />)}
            </Fragment>
          ))}
        </div>

        <div className="hidden md:block col-span-4 col-start-8 row-span-4 row-start-1 h-full rounded-xl overflow-hidden">
          <Image
            src={map}
            alt="An image of a boy texting"
            height={500}
            width={500}
            className="object-contain object-center aspect-auto size-full"
          />
        </div>

        {/* pattern design */}
        <div className="hidden md:block bg-[url('/svg/devon-logo-digital-asset.svg')] bg-left-top bg-no-repeat w-full h-24 absolute bottom-0 left-0 -scale-y-100" />
      </div>
    </div>
  );
};

const stats = [
  {
    id: 1,
    text: "95%",
    description: "Client satisfaction rate based on feedback surveys.",
  },
  {
    id: 2,
    text: "100",
    description: "Successful project completed in the last year.",
  },
];

export default OurImpact;


const StatsDisplay = ({ stat }) => {
  return (
    <div className="w-fit space-y-4">
      <div className="bg-gradient-to-b from-neutral-500 to-transparent p-px size-fit rounded-md">
        <div className="w-fit py-3.5 px-8 font-semibold text-4xl rounded-md bg-neutral-950">
          {stat.text}
        </div>
      </div>

      <div className="font-light max-w-56">{stat.description}</div>
    </div>
  );
};
