import { SectionTag, SectionTitle } from "@/components/section-util-tags";
import { Carousel } from "@/components/ui/apple-cards-carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const CoreValues = () => {
  const items = coreValues.map((value) => (
    <CoreValueCard key={value.id} {...value} />
  ));

  return (
    <div className="py-24 md:py-32 px-5 md:px-0">
      <div className="max-w-screen-sm md:max-w-screen-xl mx-auto grid grid-cols-12 gap-4 md:gap-8">
        <div className="col-span-full col-start-1 md:col-start-2">
          <SectionTag text="What Keeps Us Grounded" color="green" />
        </div>

        <div className="col-span-full col-start-1 md:col-start-2">
          <SectionTitle className="text-2xl md:text-4xl">
            Core Values
          </SectionTitle>
        </div>
      </div>

      <div className="h-fit w-full">
        <Carousel items={items} />
      </div>
    </div>
  );
};

const coreValues = [
  { id: 1, name: "Innovation", icon: "/svg/devon-innovation-logo.svg" },
  { id: 2, name: "Integrity", icon: "/svg/devon-integrity-logo.svg" },
  { id: 3, name: "Collaboration", icon: "/svg/devon-collabo-logo.svg" },
  {
    id: 4,
    name: "Accessibility",
    icon: "/svg/devon-accessibility-logo.svg",
  },
  {
    id: 5,
    name: "Customer Centricity",
    icon: "/svg/devon-integrity-logo.svg",
  },
  { id: 6, name: "Excellence", icon: "/svg/devon-innovation-logo.svg" },
];

const CoreValueCard = (props: { name: string; icon: string }) => {
  return (
    <Card className="overflow-hidden relative shadow-none border-none h-72 md:h-96 w-48 md:w-72 rounded-xl bg-green-500/10">
      <CardHeader className="pt-10 md:pt-20">
        <CardTitle className="text-lg md:text-xl text-center">
          {props.name}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="w-44 md:w-52 h-44 md:h-52 flex items-center justify-center absolute -bottom-4 right-0">
          <Image
            src={props.icon}
            alt={props.name}
            height={500}
            width={500}
            className="object-contain object-center"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export { CoreValues };
