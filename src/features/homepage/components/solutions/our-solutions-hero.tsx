import { SectionTag, SectionTitle } from "@/components/section-util-tags";

const OurSolutionsHero = () => {
  return (
    <div className="w-full h-[calc(100dvh-80px)] bg-[url('/svg/devon-solutions-hero-bg.svg')] bg-no-repeat bg-cover bg-center bg-black flex flex-col gap-4 md:gap-8 items-center justify-start text-white text-center p-16 md:p-24">
      <SectionTag text="Our Solutions" color={'green-dark'} />

      <SectionTitle className="max-w-[950px]">
        Innovative Solutions for the Modern Legal System
      </SectionTitle>

      <p className="font-light max-w-[950px] text-sm md:text-base text-neutral-300">At the forefront of legal technology, we craft bespoke legal solutions that enhance access to justice. Our mission is to modernize legal workflows, ensuring efficiency and equity for all legal professionals.</p>
    </div>
  );
};


export { OurSolutionsHero };
