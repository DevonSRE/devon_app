import { SectionTag, SectionTitle } from "@/components/section-util-tags";
import Image from "next/image";

import nigeriaMap from "/public/svg/devon-nigeria-map.svg"

const ProductsHighlight = () => {
  return (
    <div className="relative bg-neutral-950 text-white text-center py-52 flex flex-col gap-5 items-center justify-center overflow-hidden">
      <SectionTag text="Product" color="green-dark" />
      <SectionTitle className="text-4xl">
        Our Products So Far
      </SectionTitle>
      <p className="font-light max-w-[900px]">At the heart of our mission lies the commitment to transforming the legal landscape through technology driven solutions. We&apos;ve developed a suite of innovative platforms designed to streamline workflows, enhance case management, and empower legal professionals. From virtual hearing to intelligent case management and real-time transcription, our products are crafted to <br />meet the evolving needs of the modern legal system. <br /> Explore our core solutions that are redefining how legal processes are managed.</p>

      {/* left map */}
      <Image
        src={nigeriaMap}
        alt="map"
        height={900}
        width={900}
        className="absolute -left-[28rem] top-24 object-cover object-center size-fit"
      />
      {/* right map */}
      <Image
        src={nigeriaMap}
        alt="map"
        height={900}
        width={900}
        className="absolute -right-[28rem] top-24 object-cover object-center size-fit -scale-x-100"
      />
    </div>
  );
};


export { ProductsHighlight };
