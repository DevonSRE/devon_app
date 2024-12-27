import React from "react";
import medicareImg from "../../../../public/medicare.png";
import learnImg from "../../../../public/learning.png";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="flex justify-center">
      <div className="text-left mt-20 text-[#070707] px-4">
        <div className="bg-[#EC1C241A] inline-block rounded p-1 px-2 mt-20 mb-4">
          <p className="text-[#EC1C24] text-sm font-light">
            Completed Projects
          </p>
        </div>
        <h1 className="font-lexend font-semibold text-[26px] md:text-[28px] mb-6">
          Delivering Transformational Technology <br />
          Solutions Across All Sectors
        </h1>

        <div className="mt-10 text-left">
          <div className="md:flex gap-10">
            <div className="border-2 border-[#E6E7E6] p-4 rounded-md mb-4">
              <div className="border-2 border-[#EFEEF6] p-6 justify-center bg-[#EFEEF6] flex mb-2">
                <Image src={medicareImg} alt="An image of medicare logo" />
              </div>
              <h2 className="font-lexend font-semibold text-[20px] mb-4">
                Rural Healthcare Access: <br />
                Med-icare
              </h2>
              <p className="font-light text-[14px]">
                We developed a telemedicine platform <br />
                connecting patients in rural communities
                <br />
                with urban specialists, improving access <br />
                to diagnosis and treatment.
              </p>
            </div>

            <div className="border-2 border-[#E6E7E6] p-4 rounded-md mb-4">
              <div className="border-2 border-[#EFEEF6] justify-center bg-[#EFEEF6] flex mb-2">
                <Image
                  src={learnImg}
                  alt="An image of a learning app"
                  className="w-45 h-40"
                />
              </div>
              <h2 className="font-lexend font-semibold text-[20px] mb-4">
                An Interactive Learning
                <br />
                Platform
              </h2>
              <p className="font-light text-[14px]">
                We developed an interactive and <br />
                engaging online learning platform with
                <br />
                personalized learning paths and access to <br />
                educational resources for underprivileged <br />
                students.
              </p>
            </div>

            <div className="border-2 border-[#E6E7E6] p-4 rounded-md mb-4">
              <div className="border-2 border-[#EFEEF6] p-6 justify-center bg-[#EFEEF6] flex  mb-2">
                <Image src={medicareImg} alt="An image of medicare logo" />
              </div>
              <h2 className="font-lexend font-semibold text-[20px] mb-4">
                Rural Healthcare Access: <br />
                Med-icare
              </h2>
              <p className="font-light text-[14px]">
                We developed a telemedicine platform <br />
                connecting patients in rural communities
                <br />
                with urban specialists, improving access <br />
                to diagnosis and treatment.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Projects;