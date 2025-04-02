'use client';


import Image from "next/image";

import { SectionTag, SectionTitle } from "@/components/section-util-tags";

import board1 from "/public/images/devon-board-obiora.png";
import defaultImage from "/public/svg/devon-white-plain-logo.svg";
import devonPatterns from "/public/svg/devon-d-digital-asset-outline.svg";


const BoardMembers = () => {
  return (
    <div className="bg-neutral-100 overflow-hidden">
      <div className="relative max-w-screen-sm md:max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 gap-x-5 md:gap-x-10 py-24 md:py-32 px-5 md:px-0">
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

        <div className="col-start-1 md:col-start-2 col-span-full">
          <SectionTag color="green" text="Meet the Backbone of the Team" />
        </div>

        <div className="col-span-full md:col-span-4 col-start-1 md:col-start-2">
          <SectionTitle className="text-2xl md:text-4xl">The Board</SectionTitle>
        </div>

        <div className="col-start-1 md:col-start-2 col-end-2 md:col-end-12 flex flex-col md:flex-row items-center md:items-start justify-center gap-2 md:gap-4 w-full">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex flex-col gap-4">
              <div className="h-80 w-80 bg-neutral-200 grid place-content-center rounded-xl overflow-hidden">
                {member.imageUrl ? (
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    height={500}
                    width={500}
                    className="object-cover object-center min-size-full"
                  />
                ) : (
                  <Image
                    src={defaultImage}
                    alt={member.name}
                    height={200}
                    width={200}
                    className="object-contain object-center size-full"
                  />
                )}
              </div>

              <div key={member.id} className="text-center">
                <p className="font-bold text-xl">{member.name}</p>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


const teamMembers = [
  {
    id: 1,
    name: "Mr. Chibuzor Ekewkwo",
    role: "Board Chairman",
    imageUrl: "",
  },
  {
    id: 2,
    name: "Mrs. Lucy James Abagi",
    role: "C.E.O PPDC",
    imageUrl: "",
  },
  {
    id: 3,
    name: "Mr. Obiora Chukwumba",
    role: "Board Member",
    imageUrl: board1,
  },
];


export { BoardMembers };
