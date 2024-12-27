import React from 'react';
import devonLogo from '../../../public/devon_logo.png';
import Image from 'next/image';
import apartOne from '../../../public/apart_one.png'
import apartTwo from '../../../public/apart_two.png'
import apartThree from '../../../public/apart_three.png'
import ContactUs from '../home/contact/page';
import Footer from '../footer/page';

const Services = () => {
  return (
    <div className='text-[#070707]'>
        <div className="bg-black md:py-10 text-white">
            <div className="flex justify-between md:px-28 px-4">
                <div className="flex flex-row items-center">
                <div className="md:ml-20">
                    <Image src={devonLogo} alt="Logo of Devon" />
                </div>
                            
                <p className="md:text-lg mt-5 text-sm">.Technologies</p>
                </div>
                <div className="mt-20 mr-2">
                <p className="md:text-3xl text-sm">What We Offer</p>
                </div>
            </div>
        </div>
        

        <div className='p-8'>
            {/* Why Choose Us */}
            <div className='text-center '>
                <div className="bg-[#EC1C241A] inline-block rounded p-1 px-2 mb-4">
                    <p className="text-[#EC1C24] text-sm font-light">Why Choose Us</p>
                </div>
                <h1 className="font-lexend font-semibold text-[28px] mb-6">
                    Crafting Solutions That Matter
                </h1>
                <p className="font-light text-sm">
                    We pride ourselves on building software that directly addresses real-world social  issues while<br />
                    providing long-term, scalable solutions for businesses. Our multi-tenant systems facilitate <br />
                    seamless communication across organizations and their partners, enhancing efficiency and <br/>
                    collaboration.
                </p>
            </div>
            {/* What Sets Us Apart */}
            <div className='text-center mt-10'>
                <div className="bg-[#EC1C241A] inline-block rounded p-1 px-2 mb-4">
                    <p className="text-[#EC1C24] text-sm font-light">What Sets Us Apart</p>
                </div>
                <h1 className="font-lexend font-semibold text-[28px] mb-6">
                    Innovative Solutions for a Smarter Future
                </h1>
                <p className="font-light text-sm">
                    We are passionate about building technology that addresses the<br />
                    challenges you face every day.
                </p>

            </div>  

            <div className='flex items-center justify-center mt-10'>
                <div>
                    {/* Grid One */}
                    <div className='md:flex flex-cols gap-4 mb-8'>
                        <Image src={apartOne} alt='An image of a girl texting' width={450}/>
                        <div className='md:py-10'>
                            <h4 className="font-lexend font-semibold text-lg mb-4">Social Impact technology</h4>
                            <p className="font-light text-sm break-words whitespace-normal max-w-[480px] mx-auto">
                                We prioritize projects that address significant social challenges, offering specialized solutions for NGOs, government bodies, and businesses committed to driving social change. This approach leverages data analytics, digital platforms, and other technological advancements to enhance decision-making, improve service delivery, and foster inclusivity.
                            </p>
                        </div>
                    </div>

                    {/* Grid Two */}
                    <div className='md:flex flex-cols gap-4 mb-8'>
                        <div className='md:py-10'>
                            <h4 className="font-lexend font-semibold text-lg mb-4">Broad Industry Application</h4> 
                            <p className="font-light text-sm break-words whitespace-normal max-w-[480px] mx-auto">
                                While our focus is on socially-driven projects, our versatility allows us to provide technology solutions across various industries. This broad industry application allows us to understand and address the unique challenges faced by different sectors, ensuring that our solutions are relevant and effective. By leveraging our diverse experience, we can tailor our technology to meet the specific needs of each industry, driving innovation and enhancing operational efficiency across the board.
                            </p>
                        </div>
                        <Image src={apartTwo} alt='An image of a boy texting' width={450}/>
                    </div>

                    {/* Grid Three */}
                    <div className='md:flex flex-cols gap-4 mb-8'>
                        <Image src={apartThree} alt='An image of people texting' width={450}/>
                        <div className='md:py-10'>
                            <h4 className="font-lexend font-semibold text-lg mb-4">Multi-Tenant Expertise</h4>     
                            <p className="font-light text-sm break-words whitespace-normal max-w-[480px] mx-auto">
                                Our multi-tenant expertise sets us apart as a leader in scalable software solutions. By designing systems that support multiple users or organizations on a single platform, we enable seamless communication and collaboration across different branches and partner entities. This approach not only enhances operational efficiency but also allows organizations to share resources and data securely.
                            </p>
                        </div>
                    </div>

                    {/* Grid Four */}
                    <div className='md:flex flex-cols gap-4'>
                        <div className='md:py-10'>
                            <h4 className="font-lexend font-semibold text-lg mb-4">Flexible Financial Solutions</h4>
                            <p className="font-light text-sm break-words whitespace-normal max-w-[480px] mx-auto">
                                We recognize that financial constraints can often hinder organizations from accessing the technology they need to drive change. This spread costs over time, making it easier for organizations to invest in essential software without compromising their mission. By prioritizing accessibility, we ensure that even those with limited resources can benefit from our advanced technology solutions.
                            </p>
                        </div>
                        <Image src={apartOne} alt='An image of a girl texting' width={450}/>
                    </div>

                </div>
            </div>  
        </div>
            
        <ContactUs/>
        <Footer/>
    </div>
  )
}

export default Services;
