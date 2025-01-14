import React from "react";
import Image from "next/image";
import mailImg from "../../../public/mail.png";
import phoneImg from "../../../public/phone.png";
// import locationImg from "../../../public/location.png";
import Footer from "../footer/page";
import ContactusForm from "../component/ContactusForm";

const Contact = () => {
  return (
    <>
        <div className=" text-[#070707] flex justify-center">
            <div className="p-3 md:p-0">
                <div className="bg-[#EC1C241A] inline-block rounded p-1 px-2 mt-20 mb-2">
                    <p className="text-[#EC1C24] text-sm font-light">Contact Us</p>
                </div>
                <h1 className="font-lexend font-semibold text-[28px] mb-2">
                    Let's Build Something Great Together
                </h1>
                <p className="font-light text-[14px]">
                    At Devon Technology Limited, we are passionate about using technology
                    as a catalyst <br />
                    for change. Together, let's build a future where impactfulsoftware
                    drives progress
                    <br />
                    across industries and create a better world for all.
                </p>

                <div className="bg-[#2A2B6B0D] md:px-20 md:pt-10 p-4 mt-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex flex-col md:gap-16 gap-4 pt-2">
                            <div className="bg-white border border-[#E6E7E6] flex gap-3 p-4 rounded-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#37B34A" width="30" height="30"><path d="M17.6569 15.6569L12 21.3137L6.34315 15.6569C3.21895 12.5327 3.21895 7.46734 6.34315 4.34315C9.46734 1.21895 14.5327 1.21895 17.6569 4.34315C20.781 7.46734 20.781 12.5327 17.6569 15.6569ZM5 22H19V24H5V22Z"></path></svg>
                                <p className="text-sm">
                                Mercy Samuelson Estate, Block L, House No. 2, Plot<br/> 
                                622, Karmo District, Abuja, Federal Capital Territory.
                                </p>
                            </div>
                            <div className="bg-white border border-[#E6E7E6] flex gap-3 p-6 rounded-sm">
                                <Image
                                src={mailImg}
                                alt="A mail Icon"
                                className=""
                                width="20"
                                height="20"
                                />
                                <p className="text-sm">info@devontech.io</p>
                            </div>
                            <div className="bg-white border border-[#E6E7E6] flex gap-3 p-6 rounded-sm">
                                <Image
                                src={phoneImg}
                                alt="A phone Icon"
                                className=""
                                width="20"
                                height="20"
                                />
                                <p className="text-sm">+234 801 080 0000</p>
                            </div>
                        </div>

                        <div className="max-w-lg">
                            {/* <form className="w-full max-w-lg">
                                
                                <div className="mb-4">
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

                                
                                <div className="mb-4">
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

                               
                                <div className="mb-4">
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
                            </form> */}
                            <ContactusForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  );
};

export default Contact;
