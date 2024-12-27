import Image from "next/image";
import aboutOne from "../../../../public/about_one.png";
import aboutTwo from "../../../../public/about_two.png";
import aboutThree from "../../../../public/about_three.png";
import aboutFour from "../../../../public/about_four.png";

const AboutUs = () => {
  return (
    <div className="flex justify-center text-center">
      <div className="px-4 max-w-[760px] text-[#070707] mt-20">
        <div className="bg-[#EC1C241A] inline-block rounded p-1 px-2 mb-4">
          <p className="text-[#EC1C24] text-sm font-light">About Us</p>
        </div>
        <h1 className="font-lexend font-semibold text-[28px] mb-8">
          Empowering Organizations to Drive Social Change
        </h1>
        <p className="font-light text-sm">
          At Devon Technology Limited, our vision is to lead in developing software that empowers organizations to tackle social issues effectively.  We believe in creating lasting positive impact through technology, fostering collaboration and efficiency across industries.
        </p>
        <div className="flex justify-center">
          <button className="bg-[#37B34A] text-white mt-6 px-8 py-3 rounded-lg font-light flex items-center gap-2 ">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M13 6l6 6-6 6"
              />
            </svg>
          </button>
        </div>


        <div className="grid grid-cols-2 mt-6 gap-4">
          <div className="space-y-6">
            <div>
              <Image
                src={aboutOne}
                alt="An image of people collaborating"
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Image src={aboutTwo} alt="An image of people collaborating" width={200}/>
              <Image src={aboutThree} alt="An image of people collaborating" width={200}/>
            </div>
            
          </div>
          <div>
            <Image
              src={aboutFour}
              alt="An image of people collaborating"
              height={360}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
