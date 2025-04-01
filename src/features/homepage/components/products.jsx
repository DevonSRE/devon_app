import React from "react";
import Image from "next/image";
import { SectionTag, SectionTitle } from "@/components/section-util-tags";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import judicAiProduct from "/public/svg/devon-judicai-product.svg"
import docketmasterProduct from "/public/svg/devon-docketmaster-product.svg"
import lawkonnectProduct from "/public/svg/devon-lawkonnect-product.svg"
import Link from "next/link";


const Projects = () => {
  return (
    <div className="text-white bg-neutral-950">
      <div className="max-w-screen-sm md:max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 py-40 px-5 md:px-0">
        <div className="col-span-full md:col-span-4 col-start-1 md:col-start-2">
          <SectionTag color={'gray'} text="Our Products" />
        </div>

        <div className="col-span-full md:col-span-4 col-start-1 md:col-start-2">
          <SectionTitle className="text-2xl md:text-4xl">
            Innovating the Future of Legal Technology
          </SectionTitle>
        </div>

        <div className="col-span-full md:col-span-4 col-start-1 md:col-start-2">
          <p className="font-light text-sm md:text-base">
            Explore our comprehensive suite of cutting-edge legal solutions, meticulously crafted to streamline complex legal processes, improve operational efficiency, and enhance access to justice. Our innovative tools are designed to empower legal professionals, optimize case management, and bridge the gap between technology and the legal system—ensuring faster, smarter, and more transparent legal outcomes.
          </p>
        </div>

        <div className="col-span-full md:col-span-4 col-start-1 md:col-start-2 mt-4">
          <Button variant="secondary" className="text-white bg-neutral-500" size="lg">
            Learn More
          </Button>
        </div>

        <div className="col-span-full md:col-span-5 col-start-1 md:col-start-6 col-end-2 md:col-end-12 h-full md:row-start-1 md:row-end-7 w-full flex flex-col gap-5">
          {projects.map((project) => (
            <ProductCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

const projects = [
  {
    id: 1, title: "Judic AI", img: (
      <div className="absolute -bottom-5 md:bottom-0 -right-28 md:right-0 w-80 md:w-full h-full">
        <Image
          src={judicAiProduct}
          alt="judic ai"
          height={500}
          width={500}
          className="absolute bottom-0 -right-2 w-full h-full aspect-video object-contain object-center"
        />
      </div>
    ), bgColor: "bg-devon-judic", textColor: "text-white",
  },
  {
    id: 2, title: "DocketMaster", img: (
      <div className="absolute -bottom-5 md:bottom-0 -right-28 md:right-0 w-80 md:w-full h-full">
        <Image
          src={docketmasterProduct}
          alt="docketmaster"
          height={500}
          width={500}
          className="absolute -bottom-3 right-0 w-full h-full aspect-video object-contain object-center"
        />
      </div>
    ), bgColor: "bg-devon-docketmaster", textColor: "text-[#FCFFBE]",
  },
  {
    id: 3, title: "LawKonnect", img: (
      <div className="absolute -bottom-5 mdrbottom-0 -right-28 md:right-0 w-80 md:w-full h-full">
        <Image
          src={lawkonnectProduct}
          alt="lawkonnect"
          height={500}
          width={500}
          className="absolute bottom-0 -right-6 w-full h-full aspect-video object-contain object-center"
        />
      </div>
    ), bgColor: "bg-devon-lawkonnect", textColor: "text-white",
  },
];

export default Projects;


const ProductCard = ({ title, img, bgColor, textColor }) => {
  return (
    <Link className="size-full" href="/solutions">
      <div className={cn("h-36 md:h-full w-full max-h-48 rounded-md flex items-center gap-2.5 md:gap-5 pl-10 overflow-hidden", bgColor)}>
        <p className={cn("whitespace-nowrap", textColor)}>{title}</p>
        <div className="h-full w-full relative">
          {img}
        </div>
      </div>
    </Link>
  );
};
