'use client';


import { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

import { XIcon } from "@/components/icons/x-icon";
import { LinkedInIcon } from "@/components/icons/linkedin-icon";
import { SectionTag, SectionTitle } from "@/components/section-util-tags";

import ceo from "/public/images/devon-ceo.png";
import pm from "/public/images/devon-pm.png";
import fe from "/public/images/devon-fe.png";
import ai from "/public/images/devon-ai.png";
import pd from "/public/images/devon-pd.png";
import fin from "/public/images/devon-fin.png";
import hr from "/public/images/devon-hr.png";
import devonPatterns from "/public/svg/devon-d-digital-asset-outline.svg";
import Link from "next/link";


const Team = () => {
  const [activeMember, setActiveMember] = useState(teamMembers[0]);

  return (
    <div className="overflow-hidden">
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
          <SectionTag color="green" text="Meet The Team" />
        </div>

        <div className="col-span-full md:col-span-4 col-start-1 md:col-start-2">
          <SectionTitle className="text-2xl md:text-4xl">The Team</SectionTitle>
        </div>

        <div className="col-start-1 md:col-start-2 col-end-2 md:col-end-12 grid grid-cols-1 md:grid-cols-9 gap-10 md:gap-20 h-[460px] w-full">
          <div className="bg-gray-200 col-span-full md:col-span-4 rounded-3xl overflow-hidden">
            <Image
              src={activeMember.imageUrl}
              alt={activeMember.name}
              height={500}
              width={400}
              className="object-cover object-top md:object-center size-full"
            />
          </div>

          <div className="col-start-1 md:col-start-5 col-span-full md:col-span-5 overflow-auto">
            {teamMembers.map((member) => {
              const isSelected = activeMember.id === member.id;
              return (<div
                key={member.id}
                className={cn("hover:cursor-pointer flex justify-between px-5 md:px-10 py-4 md:py-8 first:border-t border-b border-black", {
                  "text-green-500 border-b-green-500": isSelected,
                })}
                onClick={() => setActiveMember(member)}
              >
                <span className="font-semibold">{member.name}</span>
                <span className="font-light text-center md:text-start">{member.role}</span>
                <div className="flex items-center gap-1 md:gap-2">
                  {member.socials.map((social) => (
                    <Link
                      key={social.id}
                      href={social.link}
                      target="_blank"
                      className={cn("text-inherit p-1 rounded", {
                        "bg-green-500 text-white": isSelected,
                      })}
                    >{social.icon}</Link>
                  ))}
                </div>
              </div>)
            })}
          </div>
        </div>
      </div>
    </div>
  );
};


const teamMembers = [
  {
    id: 1,
    name: "Bemshima",
    role: "C.E.O",
    socials: [
      {
        id: 1,
        name: "X",
        icon: <XIcon />,
        link: "",
      },
      {
        id: 2,
        name: "LinkedIn",
        icon: <LinkedInIcon />,
        link: "",
      },
    ],
    imageUrl: ceo,
  },
  {
    id: 2,
    name: "Ireoluwa",
    role: "Product Manager",
    socials: [
      {
        id: 1,
        name: "X",
        icon: <XIcon />,
        link: "",
      },
      {
        id: 2,
        name: "LinkedIn",
        icon: <LinkedInIcon />,
        link: "",
      },
    ],
    imageUrl: pm,
  },
  {
    id: 3,
    name: "Godswill",
    role: "Frontend Engineer",
    socials: [
      {
        id: 1,
        name: "X",
        icon: <XIcon />,
        link: "",
      },
      {
        id: 2,
        name: "LinkedIn",
        icon: <LinkedInIcon />,
        link: "",
      },
    ],
    imageUrl: fe,
  },
  {
    id: 4,
    name: "Israel",
    role: "Artificial Intelligence Engineer",
    socials: [
      {
        id: 1,
        name: "X",
        icon: <XIcon />,
        link: "",
      },
      {
        id: 2,
        name: "LinkedIn",
        icon: <LinkedInIcon />,
        link: "",
      },
    ],
    imageUrl: ai,
  },
  {
    id: 5,
    name: "Benjamin",
    role: "Product Designer",
    socials: [
      {
        id: 1,
        name: "X",
        icon: <XIcon />,
        link: "",
      },
      {
        id: 2,
        name: "LinkedIn",
        icon: <LinkedInIcon />,
        link: "",
      },
    ],
    imageUrl: pd,
  },
  {
    id: 6,
    name: "Meshach",
    role: "Financial Manager",
    socials: [
      {
        id: 1,
        name: "X",
        icon: <XIcon />,
        link: "",
      },
      {
        id: 2,
        name: "LinkedIn",
        icon: <LinkedInIcon />,
        link: "",
      },
    ],
    imageUrl: fin,
  },
  {
    id: 7,
    name: "Vivian",
    role: "Human Resource Manager",
    socials: [
      {
        id: 1,
        name: "X",
        icon: <XIcon />,
        link: "",
      },
      {
        id: 2,
        name: "LinkedIn",
        icon: <LinkedInIcon />,
        link: "",
      },
    ],
    imageUrl: hr,
  },
];


export { Team };
