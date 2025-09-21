import { cn } from "@/lib/utils";

function HeroSection() {
  return (
    <div className="space-y-3 md:space-y-5 w-full h-[70dvh] md:h-[640px] bg-primaryBg flex flex-col items-center justify-center text-secondary px-7 md:px-10">
      <SectionHeaders className="font-bold">
        <span>
          Legal Information &{" "}
          <span className="text-custom-lime">Privacy Policies</span>
        </span>
      </SectionHeaders>

      <p className="w-full md:w-[850px] text-center">
        Access all essential information about your privacy, rights, and
        software usage in one convenient place. Stay informed with our
        comprehensive policies on data protection, user rights, and software
        licensing—all designed to keep you secure and empowered while using our
        platform.
      </p>
    </div>
  );
}

function SectionHeaders(props) {
  return (
    <p
      className={cn(
        "text-xl lg:text-4xl text-center font-medium capitalize text-white",
        props.className,
      )}
    >
      {props.children}
    </p>
  );
}

export { HeroSection };
