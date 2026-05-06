"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

import { SectionTag, SectionTitle } from "@/components/section-util-tags";
import Link from "next/link";
import { LinkedInIcon } from "@/components/icons/custom-icons";
import { DriveImage } from "@/components/drive-image";

/*
const fin =
  "https://drive.google.com/file/d/1GNuwMZ7mFafeizrAKqSb9JwZd3KRs-vf/view";
*/
const hr =
  "https://drive.google.com/file/d/1BaA8evTRv_a1wa7x3oL64JbVgMJdNJ7k/view";

const Team = () => {
  const [activeMember, setActiveMember] = useState(teamMembers[0]);

  return (
    <div className="overflow-hidden">
      <div className="relative max-w-screen-sm md:max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 gap-x-5 md:gap-x-10 py-24 md:py-32 px-5 md:px-0">
        {/* patterns top right */}
        <Image
          src={"/svg/devon-d-digital-asset-outline.svg"}
          alt="patterns"
          height={700}
          width={700}
          className="absolute -top-80 -right-96 opacity-15 object-contain object-center -scale-y-100"
        />
        {/* patterns bottom left */}
        <Image
          src={"/svg/devon-d-digital-asset-outline.svg"}
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
            <DriveImage
              src={activeMember.imageUrl}
              alt={activeMember.name}
              height={200}
              width={100}
              className="object-cover object-top md:object-center size-full"
            />
          </div>
          <div className="col-start-1 md:col-start-5 col-span-full md:col-span-5 overflow-auto">
            {teamMembers.map((member) => {
              const isSelected = activeMember.id === member.id;
              return (
                <div
                  key={member.id}
                  className={cn(
                    "hover:cursor-pointer flex justify-between px-5 md:px-10 py-4 md:py-5 first:border-t border-b border-black text-sm",
                    {
                      "text-green-500 border-b-green-500": isSelected,
                    },
                  )}
                  onClick={() => setActiveMember(member)}
                >
                  <span className="font-semibold">{member.name}</span>
                  <span className="font-light text-center md:text-start">
                    {member.role}
                  </span>
                  <div className="flex items-center gap-1 md:gap-2">
                    {member.socials.map((social) => (
                      <Link
                        key={social.id}
                        href={social.link}
                        target="_blank"
                        className={cn("text-inherit p-1 rounded", {
                          "bg-green-500 text-white": isSelected,
                        })}
                      >
                        {social.icon}
                      </Link>
                    ))}
                  </div>
                </div>
              );
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
    name: "Bemshima Peter",
    role: "C.E.O",
    socials: [
      /*
      {
        id: 1,
        name: "X",
        icon: <XIcon />,
        link: "",
      },
      */
      {
        id: 2,
        name: "LinkedIn",
        icon: <LinkedInIcon />,
        link: "https://www.linkedin.com/in/bemshima-peter/",
      },
    ],
    imageUrl:
      "https://drive.google.com/file/d/1HVfQfxb22FupVFAV4soa6cV65LmHQqe8/view",
  },
  {
    id: 2,
    name: "Ireoluwa Omojola",
    role: "Product Manager",
    socials: [
      /*
      {
        id: 1,
        name: "X",
        icon: <XIcon />,
        link: "",
      },
      */
      {
        id: 2,
        name: "LinkedIn",
        icon: <LinkedInIcon />,
        link: "https://www.linkedin.com/in/ireoluwa-omojola/",
      },
    ],
    imageUrl: "/images/profile/devon-pm.png",
  },
  {
    id: 3,
    name: "Rukayat Tayo Abdulganiyu",
    role: "Product Manager Assistant",
    socials: [
      /*
      {
        id: 1,
        name: "X",
        icon: <XIcon />,
        link: "",
      },
      */
      {
        id: 2,
        name: "LinkedIn",
        icon: <LinkedInIcon />,
        link: "https://www.linkedin.com/in/rukayat-abdulganiyu",
      },
    ],
    imageUrl:
      "https://drive.google.com/file/d/1932XGBgHLvP64yp6BXxwyRVUcNk880Pg/view",
  },
  {
    id: 4,
    name: "Godswill Nasara",
    role: "Frontend Engineer",
    socials: [
      /*
      {
        id: 1,
        name: "X",
        icon: <XIcon />,
        link: "",
      },
      */
      {
        id: 2,
        name: "LinkedIn",
        icon: <LinkedInIcon />,
        link: "https://www.linkedin.com/in/godswill-nasara/",
      },
    ],
    imageUrl:
      "https://drive.google.com/file/d/1v9WhXkHngHGoXfb-Jq092hCHAwnviffm/view",
  },
  {
    id: 5,
    name: "Israel Adegoke",
    role: "Artificial Intelligence Engineer",
    socials: [
      /*
      {
        id: 1,
        name: "X",
        icon: <XIcon />,
        link: "",
      },
      */
      {
        id: 2,
        name: "LinkedIn",
        icon: <LinkedInIcon />,
        link: "https://www.linkedin.com/in/israeladegoke-aidol/",
      },
    ],
    imageUrl:
      "https://drive.google.com/file/d/1EhggeRQIRvgh07U-3-UZnPp-b080y34n/view",
  },
  {
    id: 6,
    name: "Adejoh Godwin",
    role: "Software Engineer",
    socials: [
      /*
      {
        id: 1,
        name: "X",
        icon: <XIcon />,
        link: "",
      },
      */
      {
        id: 2,
        name: "LinkedIn",
        icon: <LinkedInIcon />,
        link: "https://www.linkedin.com/in/godwin-adejoh/",
      },
    ],
    imageUrl:
      "https://drive.google.com/file/d/1RV5LGAAxbHRtBNL8hP8DCtkZlQc2j93q/view",
  },
  {
    id: 7,
    name: "Benjamin Benjamin",
    role: "Product Designer",
    socials: [
      /*
      {
        id: 1,
        name: "X",
        icon: <XIcon />,
        link: "",
      },
      */
      {
        id: 2,
        name: "LinkedIn",
        icon: <LinkedInIcon />,
        link: "https://www.linkedin.com/in/bendesignrr/",
      },
    ],
    imageUrl:
      "https://drive.google.com/file/d/1KR9xtC31b9d96TLF8ENdWXkmBYGXMJMt/view",
  },
  /*
  {
    id: 8,
    name: "Meshach Auta Bulusson",
    role: "Finance Manager",
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
        link: "https://www.linkedin.com/in/meshach-bulusson-aca-737383242/",
      },
    ],
    imageUrl: fin,
  },
  */
  {
    id: 9,
    name: "Vivian Daniel-Nwaorisara",
    role: "Human Resource Manager",
    socials: [
      /*
      {
        id: 1,
        name: "X",
        icon: <XIcon />,
        link: "",
      },
      */
      {
        id: 2,
        name: "LinkedIn",
        icon: <LinkedInIcon />,
        link: "https://www.linkedin.com/in/vivian-daniel-7a07821bb/",
      },
    ],
    imageUrl: hr,
  },
];

export { Team };
