import Image from "next/image";
import contactImg from "../../../../public/contact_img.png";
import React from "react";

const ContactUs = () => {
  return (
    <div className="text-center my-6 text-[#070707] md:px-40 px-4">
      <div className="bg-[#EC1C241A] inline-block rounded p-1 px-2 mt-20">
        <p className="text-[#EC1C24] text-sm font-light">Contact Us</p>
      </div>
      <h1 className="font-lexend font-semibold text-[28px] mb-2">
        Let's Build Something Great Together
      </h1>
      <p className="font-light text-sm">
        At Devon Technology Limited, we are passionate about using technology as a catalyst for <br />
        change. Together, let's build a future where impactful software drives progress across industries<br/>
        and creates a better world for all.
      </p>

      <div className="mt-10 md:flex gap-10 justify-center">
        <div>
          <Image src={contactImg} alt="An image of two men shaking hands" height={550} />
        </div>
        <div className="pt-6">
          <form className="w-full text-left">
            {/* Full Name */}
            <div className="mb-6">
              <label
                htmlFor="fullname"
                className="block text-sm font-medium text-[#070707] mb-2"
              >
                Full Name
              </label>
              <div className="flex gap-4">
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  placeholder="First name"
                  className="w-full px-4 py-2 border border-[#E6E7E6] rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400 placeholder:text-sm placeholder-[#B8B8B8]"
                />
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  placeholder="Last name"
                  className="w-full px-4 py-2 border border-[#E6E7E6] rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400 placeholder:text-sm placeholder-[#B8B8B8]"
                />
              </div>
            </div>

            {/* Email */}
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="userexample.com"
                className="w-full px-4 py-2 border border-[#E6E7E6] rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400 placeholder:text-sm placeholder-[#B8B8B8]"
              />
            </div>

            {/* Phone Number */}
            <div className="mb-6">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-600 mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                className="w-full px-4 py-2 border border-[#E6E7E6] rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400 placeholder:text-sm placeholder-[#B8B8B8]"
              />
            </div>

            {/* How Can I Help */}
            <div className="mb-6">
              <label
                htmlFor="help"
                className="block text-sm font-medium text-gray-600 mb-2"
              >
                How can we help?
              </label>
              <textarea
                id="help"
                name="help"
                rows="4"
                className="w-full px-4 py-2 border border-[#E6E7E6] rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400 placeholder:text-sm placeholder-[#B8B8B8]"
              />
            </div>

            {/* Submit Button */}
            <button className="bg-[#37B34A] mt-8 px-12 py-3 rounded-lg  flex items-center gap-2 text-white">
              Send Message
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
