import ContactUs from "@/features/homepage/components/contact/contact-us";
import { ContactUsHero } from "@/features/homepage/components/contact/contact-us-hero";

export default async function Page() {
  return (
    <main>
      <ContactUsHero />
      <ContactUs />
    </main>
  );
}
