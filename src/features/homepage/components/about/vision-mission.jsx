
import { SectionTitle } from "@/components/section-util-tags";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const VisionMission = () => {
  return (
    <div className="bg-neutral-100">
      <div className="max-w-screen-xl mx-auto grid grid-cols-12 gap-8 py-32">
        <Card className="relative overflow-hidden border-none col-start-2 col-span-5 row-span-2 p-8 shadow-none">
          <CardHeader>
            <CardTitle>
              <SectionTitle className="text-4xl text-green-500">Mission Statement</SectionTitle>
            </CardTitle>
          </CardHeader>

          <CardContent className="font-light text-sm text-gray-500">
            <p>To collaborate with the Justice sector actors to build an operationalised tech-driven ecosystem that makes legal services and court processes more transparent, affordable, efficient, and convenient in a manner that improves access to justice and quick and just dispensation of justice.</p>

            <br />

            <p>To collaborate with the Justice sector stakeholder in building an operationalised tech-driven ecosystem that makes legal services and court processes more transparent, affordable, efficient, and convenient in a manner that improves access to justice and quick and just dispensation of justice.</p>
          </CardContent>

          <p className="absolute -bottom-72 -right-5 font-bold text-[420px] text-green-500/10">M</p>
        </Card>

        <Card className="relative overflow-hidden border-none col-start-7 col-end-12 p-8 shadow-none">
          <CardHeader>
            <CardTitle>
              <SectionTitle className="text-4xl text-devon-purple">Vision Statement</SectionTitle>
            </CardTitle>
          </CardHeader>

          <CardContent className="font-light text-sm text-gray-500">
            <p>To support the emergence of an efficient tech-driven legal ecosystem that significantly improves access to justice, ensuring quick and just dispensation of justice for all.</p>
          </CardContent>

          <p className="absolute -bottom-72 -right-5 font-bold text-[420px] text-devon-purple/10">V</p>
        </Card>

        <Card className="relative overflow-hidden border-none col-start-7 col-end-12 p-8 shadow-none">
          <CardHeader>
            <CardTitle>
              <SectionTitle className="text-4xl text-devon-indigo">The Goal</SectionTitle>
            </CardTitle>
          </CardHeader>

          <CardContent className="font-light text-sm text-gray-500 relative">
            <p>We are dedicated to empowering legal professionals by crafting intelligent, user-centric digital products that:</p>

            <ul className="list-disc">
              <li>Simplify Complex Legal Processes</li>
              <li>Enhance Access to Justice</li>
              <li>Drive Efficiency and Innovation</li>
            </ul>
          </CardContent>

          <p className="absolute -bottom-72 -right-5 font-bold text-[420px] text-devon-indigo/10">G</p>
        </Card>
      </div>
    </div>
  );
}

export { VisionMission };
