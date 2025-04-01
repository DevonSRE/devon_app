import ContactusForm from "../contact-us-form";
import { SectionTitle } from "@/components/section-util-tags";


const ContactUs = () => {
  return (
    <div className={"max-w-screen-sm md:max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-y-8 gap-x-8 md:gap-x-16 py-32 px-5 md:px-0"}>
      <div className="col-span-full md:col-span-5 col-start-1 md:col-start-2">
        <ContactusForm className="size-full" />
      </div>

      <div className="col-span-full md:col-span-5 col-start-1 md:col-start-7 font-light space-y-2.5 md:space-y-5 row-start-1">
        <SectionTitle className="text-2xl md:text-4xl">
          Let&apos;s Work Together
        </SectionTitle>

        <p className="text-sm md:text-base">We&apos;re passionate about building innovative legal solutions that drive real impact. Whether you&apos;re a legal institution, a technology partner, or an organization committed to improving access to justice, we&apos;re ready to collaborate.</p>
      </div>
    </div>
  );
};

export default ContactUs;
