import React from "react";
// import heroOverlay from "../../../../public/hero_overlay.svg";
import heroImg from "../../../../public/hero.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-black text-white">
      {/* Image Overlay */}
      {/* <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${heroOverlay})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div> */}


      {/* Content Container */}
      <div className="md:relative md:block flex justify-center h-screen md:h-fit">
        <div className="md:absolute md:z-10 md:block flex items-center">
          <div className="md:py-40 md:pl-24 px-4 max-w-[800px]">
            <h1 className="font-lexend font-semibold md:text-[40px] md:pt-20 text-[28px]">
              Empowering Change Through
              Innovative Solutions
            </h1>
            <p className="font-lexend font-light text-sm md:mt-6 mt-4 max-w-[480px]">
              At Devon Technology, we strive to lead the way in developing
              software that addresses pressing social issues.
            </p>
            <div className="pb-20 flex md:gap-4 gap-2">
              <button className="bg-black border border-white mt-8 md:px-8 px-2 py-3 rounded-lg items-center">
                Explore Our Solution
              </button>
              <button className="bg-[#37B34A] mt-8 md:px-8 px-2 py-3 rounded-lg flex items-center gap-2 ">
                Book a Demo
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
          </div>
        </div>
        <div className="md:flex justify-end items-center z-0 hidden">
          <Image src={heroImg} alt="An image of the Ecllipse" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
