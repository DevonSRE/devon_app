import Image from "next/image";
import contactImg from "/public/contact_img.png";
import ContactusForm from "./contact-us-form";
import { SectionTag, SectionTitle } from "@/components/section-util-tags";


const ContactUs = () => {
  return (
    <div className="max-w-screen-xl mx-auto grid grid-cols-12 gap-y-8 gap-x-16 py-32">
      <div className="col-span-5 col-start-2">
        <SectionTag color={'red'} text="Contact Us" />
      </div>

      <div className="col-span-5 col-start-2">
        <SectionTitle className="text-4xl">
          Let&apos;s Build Something Great Together
        </SectionTitle>
      </div>

      <div className="col-span-5 col-start-2 font-light">
        <p>We invite you to share your challenges and together, we can explore tailored solutions that align with your goals and drive meaningful change.</p>
      </div>

      <div className="col-span-5 col-start-2 rounded-lg overflow-hidden bg-gray-300">
        <Image
          src={contactImg}
          alt="An image of two men shaking hands"
          height={530}
          width={530}
          className="object-fill object-center aspect-video size-full"
        />
      </div>

      <div className="row-start-1 row-span-4 col-start-7 col-end-12">
        <ContactusForm className="size-full" />
      </div>
    </div>
  );
};

export default ContactUs;
