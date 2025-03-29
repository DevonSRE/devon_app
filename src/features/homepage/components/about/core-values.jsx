import { SectionTag, SectionTitle } from "@/components/section-util-tags";
import { Carousel } from "@/components/ui/apple-cards-carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CoreValues = () => {
  const coreValues = [
    { id: 1, name: "Innovation", icon: <p>Innovation</p>, },
    { id: 2, name: "Integrity", icon: <p>Integrity</p>, },
    { id: 3, name: "Collaboration", icon: <p>Collaboration</p>, },
    { id: 4, name: "Accessibility", icon: <p>Accessibility</p>, },
    { id: 5, name: "Customer Centricity", icon: <p>Customer Centricity</p>, },
    { id: 6, name: "Excellence", icon: <p>Excellence</p>, },
  ];

  const items = coreValues.map((value) => (
    <CoreValueCard key={value.id} name={value.name} icon={value.icon} />
  ));

  return (
    <div className="py-32">
      <div className="max-w-screen-xl mx-auto grid grid-cols-12 gap-8">
        <div className="col-span-full col-start-2">
          <SectionTag text="What Keeps Us Grounded" color="green" />
        </div>

        <div className="col-span-full col-start-2">
          <SectionTitle className="text-4xl">
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


const CoreValueCard = ({ name, icon }) => {
  return (
    <Card className="relative shadow-none border-none h-96 w-72 rounded-xl bg-green-500/10">
      <CardHeader className="pt-20">
        <CardTitle className="text-xl text-center">{name}</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center absolute bottom-0 right-0">
          {icon}
        </div>
      </CardContent>
    </Card>
  );
};


export { CoreValues };
