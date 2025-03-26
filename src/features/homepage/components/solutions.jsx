import React from "react";
import Image from "next/image";
import solutionsOne from "/public/solutions-one.png";
import solutionsTwo from "/public/solutions-two.png";
import solutionsThree from "/public/solutions-three.png";

const Solutions = () => {
  return (
    <div className="flex justify-center">
      <div className="text-center mt-10 text-[#070707] px-4 max-w-[1000px]">
        <div className="bg-[#EC1C241A] inline-block rounded p-1 px-2 mt-20">
          <p className="text-[#EC1C24] text-sm font-light">Our Solutions</p>
        </div>
        <h1 className="font-lexend font-semibold text-[28px] mb-4">
          Innovative Solutions for a Smarter Future
        </h1>
        <p className="font-light text-sm mx-auto max-w-[450px]">
          We are passionate about building technology that addresses the
          challenges you face every day.
        </p>

        {/* First Grid of Pictures */}
        <div className="mt-10 text-left">
          <div className="md:flex gap-4 justify-center mb-6">
            <div className="border-2 border-[#E6E7E6] p-4 rounded-md mb-4 md:mb-0">
              <Image
                src={solutionsOne}
                alt="An image of a boy texting"
                className=""
                height={150}
              />
              <h2 className="font-lexend font-semibold text-[24px] mb-3">
                Social Impact technology
              </h2>
              <p className="font-light text-sm">
                Harnessing technological innovations and tools to address social challenges and create positive change within communities.
              </p>
            </div>
            <div className="border-2 border-[#E6E7E6] p-4 rounded-md md:max-w-[370px]">
              <Image
                src={solutionsTwo}
                alt="An image of a boy texting"
                className=""
                height={150}
              />
              <h2 className="font-lexend font-semibold text-[24px] mb-3">
                Broad Industry Application
              </h2>
              <p className="font-light text-sm">
                We pride ourselves on our ability to deliver solutions that span a wide range of industries
              </p>
            </div>
          </div>

          {/* Second Grid of Pictures */}
          <div className="md:flex gap-4 justify-center">
            <div className="border-2 border-[#E6E7E6] p-4 rounded-md md:max-w-[370px] mb-4 md:mb-0">
              <Image
                src={solutionsThree}
                alt="An image of a boy texting"
                className=""
                height={150}
              />
              <h2 className="font-lexend font-semibold text-[24px] mb-3">
                Multi-Tenant Expertise
              </h2>
              <p className="font-light text-sm">
                We design systems that support multiple users or organizations enhancing efficiency and scalability.
              </p>
            </div>
            <div className="border-2 border-[#E6E7E6] p-4 rounded-md">
              <Image
                src={solutionsOne}
                alt="An image of a boy texting"
                className=""
                height={150}
              />
              <h2 className="font-lexend font-semibold text-[24px] mb-3">
                Flexible Financial Solutions
              </h2>
              <p className="font-light text-sm">
                We make it easier for organizations to access the technology they need to drive social changes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
