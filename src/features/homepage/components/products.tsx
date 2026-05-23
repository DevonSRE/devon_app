import Image from "next/image";
import { SectionTag, SectionTitle } from "@/components/section-util-tags";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import Link from "next/link";

const Projects = () => {
  return (
    <div className="text-white bg-neutral-950">
      <div
        className={cn(
          "py-40 px-5 md:pl-10",
          "max-w-screen-sm md:max-w-screen-xl mx-auto",
          "grid grid-cols-1 md:grid-cols-12 gap-8 place-content-start md:place-content-center",
        )}
      >
        <div className="col-span-full md:col-span-4 md:row-start-3 flex flex-col gap-4">
          <div className="row-start-1 col-span-full md:col-span-4 col-start-1 md:col-start-2">
            <SectionTag color={"gray"} text="Our Products" />
          </div>

          <div className="row-start-2 col-span-full md:col-span-4 col-start-1 md:col-start-2">
            <SectionTitle className="text-2xl md:text-4xl">
              Innovating the Future of Legal Technology
            </SectionTitle>
          </div>

          <div className="row-start-3 col-span-full md:col-span-4 col-start-1 md:col-start-2">
            <p className="font-light text-sm md:text-base">
              Explore our comprehensive suite of cutting-edge legal solutions,
              meticulously crafted to streamline complex legal processes,
              improve operational efficiency, and enhance access to justice. Our
              innovative tools are designed to empower legal professionals,
              optimize case management, and bridge the gap between technology
              and the legal system—ensuring faster, smarter, and more
              transparent legal outcomes.
            </p>
          </div>

          <div className="row-start-4 col-span-full md:col-span-4 col-start-1 md:col-start-2 mt-4">
            <Link
              href="/solutions"
              className={cn(
                buttonVariants({ variant: "secondary", size: "lg" }),
                "text-white bg-neutral-500",
              )}
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="col-span-full md:col-span-5 col-start-1 md:col-start-6 col-end-2 md:col-end-12 h-full md:row-start-1 md:row-end-7 w-full flex flex-col justify-center items-center gap-5">
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
    id: 1,
    title: "JudicAI",
    img: (
      <div className="absolute -bottom-5 md:-bottom-8 lg:-bottom-6 xl:-bottom-2 -right-28 md:right-0 w-80 md:w-full h-full">
        <Image
          src={"/svg/devon-judicai-product.svg"}
          alt="judic ai"
          height={500}
          width={500}
          className="absolute bottom-0 -right-2 w-full h-full aspect-video object-contain object-center"
        />
      </div>
    ),
    bgColor: "bg-devon-judic",
    textColor: "text-white",
    urlId: "01",
  },
  {
    id: 2,
    title: "DocketMaster",
    img: (
      <div className="absolute -bottom-5 md:-bottom-8 lg:-bottom-1 xl:-bottom-2 -right-28 md:right-0 w-80 md:w-full h-full">
        <Image
          src={"/svg/devon-docketmaster-product.svg"}
          alt="docketmaster"
          height={500}
          width={500}
          className="absolute -bottom-3 right-0 w-full h-full aspect-video object-contain object-center"
        />
      </div>
    ),
    bgColor: "bg-devon-docketmaster",
    textColor: "text-[#FCFFBE]",
    urlId: "02",
  },
  /*{
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
  },*/
  {
    id: 4,
    title: "MeetSession",
    img: (
      <div className="absolute -bottom-5 md:-bottom-8 lg:-bottom-1 xl:-bottom-2 right-12 md:right-0 w-80 md:w-full h-full">
        <Image
          src={"/svg/devon-meetsession-banner.png"}
          alt="meetsession"
          height={500}
          width={500}
          className="absolute -bottom-3 -right-28 w-full h-full aspect-video object-contain object-center"
        />
      </div>
    ),
    bgColor: "bg-devon-meetsession",
    textColor: "text-white",
    urlId: "03",
  },
  // {
  //   id: 5,
  //   title: "Budeshi",
  //   img: (
  //     <div className="absolute -bottom-5 md:-bottom-8 lg:-bottom-1 xl:-bottom-2 -right-12 md:right-0 w-80 md:w-full h-full">
  //       <Image
  //         src={"/svg/devon-budeshi-banner.png"}
  //         alt="meetsession"
  //         height={500}
  //         width={500}
  //         className="absolute -bottom-3 -right-11 w-fit h-full aspect-video object-contain object-center"
  //       />
  //     </div>
  //   ),
  //   bgColor: "bg-linear-to-r/oklab from-devon-pale-blue to-purple-700 to-80%",
  //   textColor: "text-white",
  //   urlId: "04",
  // },
];

export default Projects;

const ProductCard = ({
  title,
  img,
  bgColor,
  textColor,
  urlId,
}: {
  title: string;
  img: React.ReactNode;
  bgColor: string;
  textColor: string;
  urlId: string;
}) => {
  return (
    <Link className="h-full md:h-48 w-full" href={`/solutions#${urlId}`}>
      <div
        className={cn(
          "h-36 md:h-full w-full max-h-full rounded-md flex items-center gap-2.5 md:gap-5 pl-10 overflow-hidden",
          bgColor,
        )}
      >
        <p
          className={cn(
            "whitespace-nowrap font-semibold text-base md:text-lg",
            textColor,
          )}
        >
          {title}
        </p>
        <div className="h-full w-full relative">{img}</div>
      </div>
    </Link>
  );
};
