import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

const Products = () => {
  return (
    <div className="bg-white size-full py-28 px-5 md:px-7 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">
      {products.map((product, index) => (
        <Product key={product.id} {...product} isReversed={index % 2 !== 0} />
      ))}
    </div>
  );
};

const Product = ({
  isReversed = false,
  ...product
}: { isReversed?: boolean } & TSolutionsProducts) => {
  return (
    <div
      id={product.id}
      className={cn(
        "col-span-full grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12",
        "rounded-lg h-full w-full overflow-hidden",
        "py-8 md:py-16 px-6 md:px-12",
        "bg-neutral-100",
      )}
    >
      <div
        className={cn(
          "col-span-full md:col-span-7 rounded-lg h-64 sm:h-80 md:h-96 relative",
          product.bgColor,
          {
            "col-start-1 md:col-start-6": isReversed,
          },
        )}
      >
        <p className="absolute top-10 left-10 font-semibold text-lg md:text-2xl text-white">
          {product.name}
        </p>
        <div className="absolute bottom-0 right-0 w-40 md:w-80 lg:w-108 h-40 md:h-full">
          <Image
            src={product.banner}
            alt={product.name}
            height={400}
            width={400}
            className={cn("object-cover object-left", "size-full")}
          />
        </div>
      </div>

      <div
        className={cn(
          "relative space-y-2.5 md:space-y-5 col-span-full md:col-span-5",
          {
            "col-start-1 md:row-start-1": isReversed,
          },
        )}
      >
        <p className="text-xl md:text-3xl font-bold">{product.name}</p>
        <div className={cn("flex flex-col", "text-xs md:text-sm font-light")}>
          <p>{product.description}</p>
          {product.bulletpoints && (
            <ul className="list-disc">
              {product.bulletpoints.map((bullet, idx) => (
                <li key={product.id + `${bullet.substring(2, 10)}` + idx}>
                  {bullet}
                </li>
              ))}
            </ul>
          )}
        </div>

        <Link
          href={product.link}
          className={cn(
            "z-30",
            buttonVariants({ variant: "default", size: "lg" }),
            product.bgColor,
          )}
          target="_blank"
        >
          Explore Product
        </Link>

        <span
          className={cn(
            "pointer-events-none absolute -bottom-64 text-[350px] font-bold opacity-5",
            isReversed ? "left-0" : "right-0",
          )}
        >
          {product.id}
        </span>
      </div>
    </div>
  );
};

type TSolutionsProducts = {
  name: string;
  description: string;
  id: string;
  logo: string;
  banner: string;
  link: string;
  bgColor: string;
  bulletpoints?: string[];
};
const products: TSolutionsProducts[] = [
  {
    id: "01",
    name: "JudicAI",
    logo: "",
    banner: "/svg/devon-judicai-banner.png",
    description:
      "An independent court proceeding recorder, transcriber and case management system. Judic AI is a cutting-edge legal speech processing platform designed to streamline and optimize the workflows of judges, clerks, lawyers, and legal aides. Optimized with Virtual Hearing Capability.",
    link: "https://www.lsp.devontech.io/",
    bgColor: "bg-devon-green",
  },
  {
    id: "02",
    name: "DocketMaster",
    logo: "",
    banner: "/svg/devon-docketmaster-banner.png",
    description:
      "Our advanced E-Filing Management System empowers legal practitioners to seamlessly file and manage cases with ease. Designed with legal practitioners in mind.",
    link: "#",
    bgColor: "bg-devon-docketmaster",
  },
  // { id: "03", name: "LawKonnect", logo: "", banner: lawkonnectBanner, description: "A virtual law firm app, connecting citizens to legal services in a more convenient and affordable way and legal professionals and citizens to continuing legal education pro-bono services.", link: "", bgColor: "bg-devon-lawkonnect", },
  {
    id: "03",
    name: "MeetSession",
    logo: "",
    banner: "/svg/devon-meetsession-banner.png",
    description:
      "MeetSession is a mobile-first recording and transcription app tailored for lawyers, legal professionals, and organizations. It enables you to:",
    bulletpoints: [
      "Record meetings or cross-examinations easily via your phone or compatible microphone.",
      "Transcribe audio into accurate text, even in noisy environments.",
      "Automatically differentiate speakers, so you know who said what.",
      "Organize transcripts and recordings into folders, sorted by case or topic for easy retrieval.",
      "Operate securely, with data encryption and privacy as foundational features.",
      "Access your files on the go, anytime, anywhere via the app.",
    ],
    link: "https://meetsession.devontech.io/",
    bgColor: "bg-devon-meetsession",
  },
  // {
  //   id: "04",
  //   name: "Budeshi",
  //   logo: "",
  //   banner: "/svg/devon-budeshi-banner.png",
  //   description:
  //     "Budeshi is an open contracting and public procurement transparency platform designed to link budget data, procurement records, and service delivery outcomes in one unified digital environment. The platform helps governments, civil society organizations, and citizens monitor how public funds are spent and how efficiently projects are executed. ",
  //   link: "https://grants.budeshi.ng/",
  //   bgColor: "bg-devon-budeshi",
  // },
];

export { Products };
