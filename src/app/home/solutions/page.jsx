import React from "react";
import Image from "next/image";
import solutionsOne from "../../../../public/solutions-one.png";
import solutionsTwo from "../../../../public/solutions-two.png";
import solutionsThree from "../../../../public/solutions-three.png";

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
        <p className="font-light text-sm">
          We are passionate about building technology that addresses the <br />
          challenges you face every day.
        </p>

        <div className="mt-10 text-left">
          <div className="md:flex gap-4 justify-center mb-6">
            <div className="border-2 border-[#E6E7E6] p-6 rounded-md mb-4">
              <Image src={solutionsOne} alt="An image of a girl texting" />
              <h2 className="font-lexend font-semibold text-[24px] mb-4">
                Social Impact technology
              </h2>
              <p className="font-light text-sm">
                Harnessing technological innovations and tools to address social
                challenges
                <br />
                and create positive change within communities.
              </p>
            </div>
            <div className="border-2 border-[#E6E7E6] p-6 rounded-md">
              <Image src={solutionsTwo} alt="An image of a boy texting" />
              <h2 className="font-lexend font-semibold text-[24px] mb-4">
                Broad Industry Application
              </h2>
              <p className="font-light text-sm">
                We pride ourselves on our ability to deliver
                <br />
                solutions that span a wide range of industries.
              </p>
            </div>
          </div>
          {/* Second Grid of Pictures */}

          <div className="md:flex gap-4 justify-center">
            <div className="border-2 border-[#E6E7E6] p-6 rounded-md mb-4">
              <Image
                src={solutionsThree}
                alt="An image of a people texting"
                className=""
              />
              <h2 className="font-lexend font-semibold text-[24px] mb-4">
                Multi-Tenant Expertise
              </h2>
              <p className="font-light text-sm">
                We design systems that support multiple users or
                <br />
                organizations enhancing efficiency and scalability.
              </p>
            </div>
            <div className="border-2 border-[#E6E7E6] p-6 rounded-md">
              <Image
                src={solutionsOne}
                alt="An image of a boy texting"
                className=""
              />
              <h2 className="font-lexend font-semibold text-[24px] mb-4">
                Flexible Financial Solutions
              </h2>
              <p className="font-light text-sm">
                We offer flexible financial solutions designed to accommodate
                various
                <br />
                budgets and funding situations.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Solutions;
