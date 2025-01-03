import Image from "next/image";
import contactImg from "../../../../public/contact_img.png";
import ContactusForm from "@/app/component/ContactusForm";


const ContactUs = () => {
  
  return (
    <div className="flex justify-center">
      <div className="text-center my-6 text-[#070707] px-4 max-w-[1000px]">
        <div className="bg-[#EC1C241A] inline-block rounded p-1 px-2 mt-20">
          <p className="text-[#EC1C24] text-xs font-light">Contact Us</p>
        </div>
        <h1 className="font-lexend font-semibold text-[28px] mb-2">
          Let's Build Something Great Together
        </h1>
        <p className="font-light text-sm max-w-[640px] mx-auto">
          At Devon Technology Limited, we are passionate about using technology
          as a catalyst for change. Together, let's build a future where impactful software drives progress across industries and creates a better world for all.
        </p>

        <div className="mt-10 md:flex gap-10 justify-center">
          <div>
            <Image
              src={contactImg}
              alt="An image of two men shaking hands"
              height={530}
            />
          </div>
          <ContactusForm/>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
