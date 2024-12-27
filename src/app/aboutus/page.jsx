import React from "react";
import devonLogo from "../../../public/devon_logo.png";
import aboutThree from "../../../public/about_three.png";
import teamImg from "../../../public/team.png";
import Image from "next/image";
import Footer from "../footer/page";
import ContactUs from "../home/contact/page";



const AboutUs = () => {
  return (
    <div className="text-[#070707]">
      <div className="bg-black md:py-10 text-white">
        <div className="flex justify-between md:px-28 px-4">
            <div className="flex flex-row items-center">
                <div className="md:ml-20">
                    <Image src={devonLogo} alt="Logo of Devon" />
                </div>
                        
                <p className="md:text-lg mt-5 text-sm">.Technologies</p>
            </div>
            <div className="mt-20 mr-8">
                <p className="md:text-3xl text-sm">About Us</p>
            </div>
        </div>
      </div>

      <div className="mt-4">
        <div className="px-4">

            <div className="md:flex flex-cols gap-8 mb-6 justify-center items-center">
                <div className="pt-8 ">
                    {/* Who Are We? */}
                    <div className="text-left ">
                        <div className="bg-[#EC1C241A] inline-block rounded p-1 px-2 mb-4">
                            <p className="text-[#EC1C24] text-sm font-light">
                            Who Are We?
                            </p>
                        </div>
                        <h1 className="font-lexend font-semibold text-[24px] mb-4">
                            Leading the Future of Impactful Software
                        </h1>
                        <p className="font-light text-sm">
                            At Devon Technology Limited, we are not just a software company; we are your<br />
                            partners in creating meaningful change. Our vision is to lead the charge in <br />
                            developing innovative software solutions that empower organizations to tackle <br />
                            pressing social issues, foster collaboration, and generate lasting positive impacts <br/>
                            across various industries. We believe that technology can bridge gaps, enhance <br/>
                            connectivity, and promote social responsibility — one solution at a time.
                        </p>
                    </div>
                    {/* Our Mission */}
                    <div className="text-left mt-10">
                        <div className="bg-[#EC1C241A] inline-block rounded p-1 px-2 mb-4">
                            <p className="text-[#EC1C24] text-sm font-light">
                                Our Mission
                            </p>
                        </div>
                        <h1 className="font-lexend font-semibold text-[24px] mb-4">
                            Our Commitment to You
                        </h1>
                        <p className="font-light text-sm">
                            We exist to support organizations by providing advanced software solutions tailored<br />
                            specifically to your unique needs. Our mission is clear: to drive social change and<br />
                            empower growth through scalable, multi-tenant syaytems. We understand the <br />
                            finacial challenges many organizations face, which is why we are dedicated to <br/>
                            ensuring that everyone has access to the tools they need.
                        </p>
                    </div>

                </div>
                
                <Image
                src={aboutThree}
                alt="An image of people collaborating"
                height={400}
                />
            </div>
            

            {/* Who We Serve */}
            <div>
                <div className="text-center mt-10 md:mt-20">
                    <div className="bg-[#EC1C241A] inline-block rounded p-1 px-2 mb-4">
                        <p className="text-[#EC1C24] text-sm font-light">Who We Serve</p>
                    </div>
                    <h1 className="font-lexend font-semibold text-[24px] mb-8">
                        Ideal Partners for Social Change
                    </h1>
                    <p className="font-light text-sm">
                        We thrive with organizations who are eageer to drive social change through<br />
                        innovative software solutions.
                    </p>
                </div>

                <div className="md:px-40 mt-10">
                    <div className="grid grid-cols md:grid-cols-3 gap-6">
                        <div className="bg-white border-2 border-[#E6E7E6] p-6 rounded-md">                            
                            <p className="text-sm">Social enterprises dedicated to innovation and corporate social responsibility.</p>
                        </div>
                        <div className="bg-white border-2 border-[#E6E7E6] p-6 rounded-md">                            
                            <p className="text-sm">Government agencies aiming to streamline operations and enhance communication.</p>
                        </div>
                        <div className="bg-white border-2 border-[#E6E7E6] p-6 rounded-md">                            
                            <p className="text-sm">Health and education institutions looking to improve operations or deliver impactful campaigns.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols md:grid-cols-2 gap-6 mt-4">
                        <div className="bg-white border-2 border-[#E6E7E6] p-6 rounded-md">                            
                            <p className="text-sm">Non-Governmental Organizations (NGOs) focused on community outreach and social welfare.</p>
                        </div>
                        <div className="bg-white border-2 border-[#E6E7E6] p-6 rounded-md">                            
                            <p className="text-sm">Businesses in sectors like real estate, fitness, AI, and internet security seeking scalable software systems.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Team */}
            <div>
                <div className="text-center mt-10 md:mt-20">
                    <div className="bg-[#EC1C241A] inline-block rounded p-1 px-2 mb-4">
                        <p className="text-[#EC1C24] text-sm font-light">Our Team</p>
                    </div>
                    <h1 className="font-lexend font-semibold text-[24px] mb-6">
                        Meet the Devon Technology Team
                    </h1>
                    <p className="font-light text-sm">
                        Our team is composed of dedecated professionals who are passionate<br/>
                        about leveraging technology to create impactful solutions.
                    </p>
                </div>
                <div className="flex justify-center">
                    <Image
                        src={teamImg}
                        alt="A mail Icon"
                        className="mt-8"
                    />
                </div>
            </div>
            
        </div>
        

      </div>
      <ContactUs/>
      <Footer />
    </div>
  );
};

export default AboutUs;
