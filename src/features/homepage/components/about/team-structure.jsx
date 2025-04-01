'use client';


import { useState } from "react";
import { cn } from "@/lib/utils";
import { SectionTag, SectionTitle } from "@/components/section-util-tags";
import Image from "next/image";
import devonStamp from "/public/svg/devon-stamp-logo.svg"
import { motion } from "motion/react";
import toggleIcon from "/public/svg/devon-subcontent-toggle.svg"


const TeamStructure = () => {
  const [activeFocus, setActiveFocus] = useState(structures[0]);
  const [showSubContent, setShowSubContent] = useState(false);

  const subContentContainerVariants = {
    initial: { translateX: "0px", transition: { duration: 0.2, type: "spring", stiffness: 50 }, },
    animate: { translateX: "-300px", transition: { duration: 0.2, type: "spring", stiffness: 50 }, },
  };
  const subContentToggleVariants = {
    initial: { translateX: "0px", borderRadius: "0px", transition: { duration: 0.2, type: "spring", stiffness: 50 }, },
    animate: { translateX: "-70px", borderRadius: "50px", transition: { duration: 0.2, type: "spring", stiffness: 50 }, },
  };
  const subContentItemsVariants = {
    initial: { transform: "rotate(0deg)", transition: { duration: 0.2, type: "spring", stiffness: 50 }, },
    animate: { transform: "rotate(-10deg)", transition: { duration: 0.2, type: "spring", stiffness: 50 }, },
  };
  const subContentListItemsVariants = {
    initial: { opacity: 0, transition: { duration: 0.2, }, },
    animate: { opacity: 1, transition: { delay: 0.3, duration: 1, }, },
  }

  return (
    <div className="bg-neutral-950 text-white">
      <div className="max-w-screen-xl mx-auto grid grid-cols-12 gap-8 gap-x-10 py-24">
        <div className="col-start-2 col-span-full">
          <SectionTag color="green" text="The Team" />
        </div>

        <div className="col-span-4 col-start-2">
          <SectionTitle className="text-4xl">Team Structure</SectionTitle>
        </div>

        <div className="col-span-5 col-start-2 flex flex-col gap-10">
          {structures.map((structure) => (
            <div
              key={structure.id}
              className={cn("flex items-center justify-between gap-4 hover:cursor-pointer", {
                "text-green-500": structure.id === activeFocus.id,
              })}
              onClick={() => setActiveFocus(structure)}
            >
              <small>{structure.id}</small>
              <SectionTitle className="text-3xl">{structure.name}</SectionTitle>
              <div>----------&gt;</div>
            </div>
          ))}
        </div>

        <div className="col-start-7 col-end-12 row-start-2 row-span-2 flex flex-col gap-10">
          <SectionTitle className="text-4xl ml-20">Focus</SectionTitle>

          <div className="relative rounded-xl bg-white text-neutral-950 min-h-[520px]">
            <div className="absolute -top-10 -left-10 bg-white p-1 rounded-full">
              <Image
                src={devonStamp}
                alt="logo"
                height={100}
                width={100}
                className="object-center object-contain aspect-square size-full"
              />
            </div>

            <div className="relative overflow-hidden size-full space-y-5 p-16">
              <SectionTitle className="text-4xl">{activeFocus.id}</SectionTitle>
              <p className="font-light text-neutral-500">{activeFocus.description}</p>

              <motion.div
                variants={subContentContainerVariants}
                initial="initial"
                animate={showSubContent ? "animate" : "initial"}
                className="absolute -right-[408px] -bottom-10 h-fit flex items-start gap-2"
              >
                <motion.div
                  variants={subContentToggleVariants}
                  animate={showSubContent ? "animate" : "initial"}
                  className="bg-emerald-500 text-white py-2 px-8 w-fit cursor-fancy"
                  onClick={() => { setShowSubContent((prev) => !prev) }}
                >
                  <Image
                    src={toggleIcon}
                    alt="toggle-icon"
                    height={24}
                    width={24}
                    className="object-contain object-center size-6"
                  />
                </motion.div>

                <motion.div
                  variants={subContentItemsVariants}
                  animate={showSubContent ? "animate" : "initial"}
                  className="bg-white shadow-xl p-2.5 rounded-3xl mt-14"
                >
                  <div className="p-5 bg-emerald-500 space-y-10 rounded-xl h-[450px] w-96">
                    <div style={{ transform: "rotate(10deg)" }} className="p-10 space-y-5">
                      <motion.p
                        variants={subContentListItemsVariants}
                        animate={showSubContent ? "animate" : "initial"}
                        className="font-bold text-4xl text-green-100/50"
                      >{activeFocus.subContent.title}</motion.p>

                      <motion.ul
                        variants={subContentListItemsVariants}
                        animate={showSubContent ? "animate" : "initial"}
                        className="space-y-5 list-disc ml-5 text-neutral-100 max-w-52"
                      >
                        {activeFocus.subContent.items.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </motion.ul>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const structures = [
  {
    id: "01",
    name: "Product & Technology",
    description: "This team is the engine behind your digital solutions, responsible for designing, building and maintaining your legal technology platforms. They turn innovative ideas into fully functional products that enhance legal processes. Their work software development, product design, and ensuring your platforms are reliable, scalable, and user-friendly. This team prioritises security, compliance, and the seamless integration of advanced technologies like AI and virtual hearing systems.",
    subContent: { id: 1, title: "Product", items: ["Product development team", "Engineering and Software development team", "Quality Assurance (QA) team"] },
  },
  {
    id: "02",
    name: "Business & Operations",
    description: "Focused on driving growth and ensuring smooth day-to-day functions. This team manages business strategy, client relationships and operational efficiency. They identify market opportunities, establish strategic partnerships, and streamline internal processes to delivery exceptional service. Additionally, they oversee customer support and ensure compliance with legal regulations, including secure case management and user verification.",
    subContent: { title: "Business", items: ["Business development & partnership team", "Operations & Support team", "Legal & Compliance team",] },
  },
  {
    id: "03",
    name: "Creative & Marketing",
    description: "Tasked with shaping the company brand identity and communicating its value, this team manages all aspects of marketing, design, and public engagement. The craft compelling narratives for your products, create user-centered designs, and execute multi-channel marketing campaigns. Their goal is to increase brand awareness, educate legal professionals, and position your company as a leader in legal technology.",
    subContent: { title: "Creative", items: ["Marketing & Communications team", "Design & User Experience (UI/UX) team"] },
  },
  {
    id: "04",
    name: "Leadership & Strategy",
    description: "Guiding the company's vision and long term success, this team sets strategic goals and foster a culture of innovation and excellence. They are responsible for making high-level decisions, managing key stakeholder relationships, and ensuring the organization remains agile and forward-thinking. This team also oversees talent management - attracting and supporting top talent to drive company's mission forward.",
    subContent: { title: "Leadership", items: ["Executive & Strategy team", "Human Resources (HR) & Talent team"] },
  },
];

export { TeamStructure };
