import React from "react";
// import avatarImg from "../../../../public/avatar.png";
// import Image from "next/image";

const Success = () => {
  return (
    <div className="text-[#070707] text-left mt-20 px-4 flex justify-center">
      <div className="md:flex gap-10">

        <h2 className="font-lexend font-semibold text-[28px] mb-6 max-w-[500px]">
          Transforming Communities: Our Impact Through Innovative Software Solutions
        </h2>


        {/* <div className="border-[#E6E7E6] border-2 p-6 rounded-sm">
          <div className="flex mb-4 gap-4">
            <Image
              src={avatarImg}
              alt="Avatar"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="text-[18px] font-normal">Liam Williams</p>
              <p className="text-[16px] font-light">
                Global Clean Water Initiative
              </p>
            </div>
          </div>

          <p className="text-[14px] font-light">
            Devon Technology has been an invaluable partner in our mission to{" "}
            <br />
            provide clean water access to underserved communities. Their <br />
            innovative platform has especially reduced our operational costs by{" "}
            <br />
            15%, improved resource allocation, and enabled us to reach more{" "}
            <br />
            people than ever before. We are incredibly grateful for their <br />
            commitment to social impact and their dedication to helping us
            achieve <br />
            our goals.
          </p>
        </div> */}

        {/* Description */}
        <div className="mt-2 max-w-[550px]">
          <p className="text-sm font-light mb-8">
            At Devon Technology, we are proud to have empowered over 100 organizations worldwide. Our innovative software solutions have successfully addressed critical social issues, fostering collaboration and efficiency.
          </p>

          {/* Stats */}
          <div className="flex gap-6">
            <div className="grid grid-rows">
              <p className="text-2xl font-semibold">95%</p>
              <p className="text-sm font-light">Client satisfaction rate based on feedback surveys.</p>
            </div>

            <div className="grid grid-rows">
              <p className="text-2xl font-semibold">100</p>
              <p className="text-sm font-light">Successful projects completed in the last year.</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Success;
