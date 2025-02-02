import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import devonLogo from "../../../public/devon_logo.png";
import mailImg from "../../../public/mail.png";
import phoneImg from "../../../public/phone.png";


const Footer = () => {
  return (
    <div className='bg-black flex justify-center p-6 md:py-16 text-white md:mt-10'>
        <div className=''>

            <div className='container mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                    {/* About Section */}
                    <div className='mb-2 space-y-6'>
                        <Image src={devonLogo} alt='Devon Logo'className='' width="150" height="150"/>
                        <p className='font-semibold text-[18px] mb-4'>Technology to build the future</p>
                        <p className='font-light text-sm mb-2'>
                            We believe technology holds the key to unlocking a <br/>
                            brighter tomorrow. We're not just building  software; we're<br/>
                            crafting impactful solutions that address the world's most pressing challenges.
                        </p>
                        <div className='flex space-x-4'>
                            <Link href='https://www.x.com' target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="25" height="25"><path d="M10.4883 14.651L15.25 21H22.25L14.3917 10.5223L20.9308 3H18.2808L13.1643 8.88578L8.75 3H1.75L9.26086 13.0145L2.31915 21H4.96917L10.4883 14.651ZM16.25 19L5.75 5H7.75L18.25 19H16.25Z"></path></svg></Link>
                            <Link href='https://www.linkedin.com/company/devon-technologies-ltd/posts/?feedView=all' target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="25" height="25"><path d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"></path></svg></Link>
                            <Link href='https://www.facebook.com/share/19m2A3dU1F/?mibextid=wwXIfr' target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="20" height="20"><path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47062 14 5.5 16 5.5H17.5V2.1401C17.1743 2.09685 15.943 2 14.6429 2C11.9284 2 10 3.65686 10 6.69971V9.5H7V13.5H10V22H14V13.5Z"></path></svg></Link>
                        </div>
                    </div>

                    <div className='mb-2 md:ml-20'>
                        <Link href="/"><p className='font-semibold text-[18px] mb-10'>Company</p></Link>
                        <ul className='space-y-10'>
                            <li><Link href="/aboutus"><p className='font-light text-sm'>About Us</p></Link></li>
                            <li><Link href="/services"><p className='font-light text-sm'>Service</p></Link></li>
                            <li><Link href="/contact"><p className='font-light text-sm'>Contact</p></Link></li>
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div className='mb-2'>
                        <p className='font-semibold text-[18px] mb-10'>Reach Out to Us:</p>
                        <div className='flex gap-6 mb-10'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#37B34A" width="30" height="30"><path d="M17.6569 15.6569L12 21.3137L6.34315 15.6569C3.21895 12.5327 3.21895 7.46734 6.34315 4.34315C9.46734 1.21895 14.5327 1.21895 17.6569 4.34315C20.781 7.46734 20.781 12.5327 17.6569 15.6569ZM5 22H19V24H5V22Z"></path></svg>
                            <p className='font-light text-sm'>
                                Mercy Samuelson Estate, Block L, House<br/>
                                No. 2, Plot 622, Karmo District, Abuja,
                                Federal Capital Territory.
                            </p>
                        </div>
                        <div className='flex gap-6 mb-10'>
                            <Image src={mailImg} alt='A mail Icon' className='' width="20" height="20"/>
                            <p className='font-light text-sm'> info@devontech.io </p>
                        </div>
                        <div className='flex gap-6 mb-10'>
                            <Image src={phoneImg} alt='A phone Icon' className='' width="20" height="20"/>
                            <p className='font-light text-sm'> +234 801 000 0000 </p>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="border-t-2 border-[#B8B8B833] my-4" />
            <p className='font-light text-sm'>&copy; Copyright Devon Technology. All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer
