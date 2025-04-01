import { SectionTag, SectionTitle } from "@/components/section-util-tags";
import Image from "next/image";
import nigeriaMap from "/public/svg/devon-nigeria-map.svg";

const AboutUsHero = () => {
  return (
    <div className="relative w-full min-h-[calc(50dvh-70px)] bg-neutral-950 text-white flex flex-col gap-5 justify-center items-center overflow-hidden px-5 md:px-0">
      <div>
        <SectionTag text={'About Us'} color={'gray'} />
      </div>

      <div className="text-center max-w-5xl">
        <SectionTitle className="text-2xl md:text-5xl">
          Transforming Legal Processes Through Innovation
        </SectionTitle>
      </div>

      {/* left map */}
      <Image
        src={nigeriaMap}
        alt="Nigeria Map"
        height={1500}
        width={1500}
        className="absolute bottom-12 md:-bottom-80 -left-72 md:-left-[420px] w-auto h-auto aspect-square object-contain object-center"
      />
      {/* right map */}
      <Image
        src={nigeriaMap}
        alt="Nigeria Map"
        height={1500}
        width={1500}
        className="-scale-x-100 absolute bottom-12 md:-bottom-80 -right-72 md:-right-[420px] w-auto h-auto aspect-square object-contain object-center"
      />
    </div>
  );
};


export { AboutUsHero };
