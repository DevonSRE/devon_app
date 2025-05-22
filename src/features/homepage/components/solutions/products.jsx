import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

import judicaiBanner from "/public/svg/devon-judicai-banner.svg";
import docketmasterBanner from "/public/svg/devon-docketmaster-banner.svg";
// import lawkonnectBanner from "/public/svg/devon-lawkonnect-banner.svg";
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


const Product = ({ isReversed = false, ...product }) => {
  return (
    <div className="bg-neutral-100 rounded-lg h-full w-full col-span-full grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 py-8 md:py-16 px-6 md:px-12 overflow-hidden">
      <div className={cn("col-span-full md:col-span-7 rounded-lg h-80 md:h-96 relative", product.bgColor, {
        "col-start-1 md:col-start-6": isReversed,
      })}>
        <p className="absolute top-10 left-10 font-semibold text-lg md:text-2xl text-white">{product.name}</p>
        <Image
          src={product.banner}
          alt={product.name}
          height={400}
          width={400}
          className="object-cover object-center absolute bottom-0 right-0"
        />
      </div>

      <div className={cn("relative space-y-2.5 md:space-y-5 col-span-full md:col-span-5", {
        "col-start-1 md:row-start-1": isReversed,
      })}>
        <p className="text-xl md:text-3xl font-bold">{product.name}</p>
        <p className="text-xs md:text-sm font-light">{product.description}</p>
        <Link
          href={product.link}
          className={cn(
            "z-30",
            buttonVariants({ variant: "default", size: "lg" }),
            product.bgColor,
          )}
          target="_blank"
        >Explore Product</Link>

        <span className={cn("pointer-events-none absolute -bottom-64 text-[350px] font-bold opacity-5", isReversed ? "left-0" : "right-0")}>{product.id}</span>
      </div>
    </div>
  );
};

const products = [
  { id: "01", name: "Judic AI", logo: "", banner: judicaiBanner, description: "An independent court proceeding recorder, transcriber and case management system. Judic AI is a cutting-edge legal speech processing platform designed to streamline and optimize the workflows of judges, clerks, lawyers, and legal aides. Optimized with Virtual Hearing Capability.", link: "https://www.lsp.devontech.io/", bgColor: "bg-devon-green", },
  { id: "02", name: "Docket Master", logo: "", banner: docketmasterBanner, description: "Our advanced E-Filing Management System empowers legal practitioners to seamlessly file and manage cases with ease. Designed with legal practitioners in mind.", link: "#", bgColor: "bg-devon-docketmaster", },
  // { id: "03", name: "LawKonnect", logo: "", banner: lawkonnectBanner, description: "A virtual law firm app, connecting citizens to legal services in a more convenient and affordable way and legal professionals and citizens to continuing legal education pro-bono services.", link: "", bgColor: "bg-devon-lawkonnect", },
];


export { Products };
