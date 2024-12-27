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
      <div className="flex justify-center z-10 h-screen">
        <div className="flex justify-center items-center md:w-[1000px]">
          <div className="md:p-20 p-4">
            <h1 className="font-lexend font-semibold text-[40px] md:pt-20 ">
              Empowering Change Through
              <br /> Innovative Solutions
            </h1>
            <p className="font-lexend font-light text-sm mt-10">
              At Devon Technology, we strive to lead the way in developing
              software
              <br />
              that addresses pressing social issues.
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
        <div className="md:flex justify-center items-center z-0 hidden">
          <Image src={heroImg} alt="An image of the Ecllipse" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
