import AboutUs from "@/features/homepage/components/about";
import { AboutUsHero } from "@/features/homepage/components/about/about-us-hero";
import { BoardMembers } from "@/features/homepage/components/about/board-members";
import { ChooseUs } from "@/features/homepage/components/about/choose-us";
import { CoreValues } from "@/features/homepage/components/about/core-values";
import { Team } from "@/features/homepage/components/about/team";
import { TeamStructure } from "@/features/homepage/components/about/team-structure";
import { VisionMission } from "@/features/homepage/components/about/vision-mission";
import ContactUs from "@/features/homepage/components/contact-us";

export default async function Page() {
  return (
    <main>
      <AboutUsHero />
      <AboutUs tagColor="green" showButtons={false} />
      <VisionMission />
      <CoreValues />
      <TeamStructure />
      <Team />
      <BoardMembers />
      <ChooseUs />
      <div className="bg-neutral-100">
        <ContactUs />
      </div>
    </main>
  );
}
