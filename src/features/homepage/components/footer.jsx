import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import devonLogo from "/public/svg/devon-logo-white.svg";

import facebook from "/public/svg/Facebook.svg"
import instagram from "/public/svg/Instagram.svg"
import x from "/public/svg/X.svg"
import linkedin from "/public/svg/LinkedIn.svg"
// import youtube from "/public/svg/Youtube.svg"
import { LocateFixedIcon, MailIcon, PhoneCallIcon } from 'lucide-react';
import { Separator } from '@/components/ui/separator';


const Footer = () => {
  return (
    <div className="bg-neutral-950 text-white">
      <div className="max-w-screen-sm md:max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 place-items-center md:place-items-stretch gap-8 md:gap-16 py-24 px-5 md:px-0">
        <div className="col-start-1 md:col-start-2 col-end-2 md:col-end-12 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0">
          <div>
            <Image src={devonLogo} alt='Devon Logo' className='' width="100" height="100" />
          </div>

          <ul className="flex flex-wrap md:flex-nowrap items-center justify-center md:justify-start gap-8 md:gap-5 w-full md:w-auto">
            {links.map((link) => (
              <li key={link.id} className="size-fit md:size-full whitespace-normal md:whitespace-nowrap">
                <Link href={link.url} className="font-light text-xs md:text-base text-nowrap">{link.name}</Link>
              </li>
            ))}
          </ul>

          <Separator className="md:hidden bg-neutral-400 max-w-52" />

          <div className="flex flex-col gap-4 md:gap-2 items-center md:items-start justify-center md:justify-start w-full md:w-auto">
            <p className="text-sm md:text-base">Social Media</p>

            <div className="flex gap-2.5 md:gap-1 items-center">
              {socials.map((social) => (
                <Link key={social.id} href={social.url} target="_blank" className="w-6 h-6">
                  <Image
                    src={social.icon}
                    alt={social.name}
                    height={24}
                    width={24}
                    className="w-full h-full"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <Separator className="md:hidden bg-neutral-400 max-w-52" />

        <div className="font-light text-xs md:text-sm col-span-full col-start-1 md:col-start-3 col-end-2 md:col-end-11 flex flex-col-reverse md:flex-row gap-2.5 md:gap-5 items-center justify-between">
          <div className="flex gap-5 items-center">
            <div className="p-2 rounded-full bg-white text-neutral-950 grid place-content-center"><LocateFixedIcon size={16} /></div>
            <p className="max-w-sm">Mercy Samuelson Estate, Block L, House No. 2, Plot 622, Karmo District Abuja, Federal Capital Territory</p>
          </div>

          <div className="flex gap-5 items-center">
            <div className="p-2 rounded-full bg-white text-neutral-950 grid place-content-center"><MailIcon size={16} /></div>
            <Link href="mailto:info@devontech.io">info@devontech.io</Link>
          </div>

          <div className="flex gap-5 items-center">
            <div className="p-2 rounded-full bg-white text-neutral-950 grid place-content-center"><PhoneCallIcon size={16} /></div>
            <Link href="tel:+2348104268727">+234 810 426 8727</Link>
          </div>
        </div>

        <div className="col-span-full flex flex-col md:flex-row items-center justify-center">
          <div className="border-y-2 border-neutral-200 max-w-fit py-4 px-16">
            &copy; Devon Technologies {new Date().getFullYear()}. All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
}

const links = [
  { id: 1, name: "Our Solutions", url: "/solutions", },
  { id: 2, name: "Explore", url: "/solutions", },
  { id: 3, name: "About Us", url: "/about", },
  { id: 4, name: "Get Started", url: "/contact-us", },
  // { id: 5, name: "Contact Us", url: "/contact-us", },
];
const socials = [
  { id: 1, name: "Facebook", url: "https://www.facebook.com/share/1BPLqp3CbU/?mibextid=wwXIfr", icon: facebook },
  { id: 2, name: "Instagram", url: "https://www.instagram.com/devon_technologies_ltd?igsh=MXQxczNsMXJ6b29iYQ==", icon: instagram },
  { id: 3, name: "X", url: "https://x.com/DevonTechio", icon: x },
  { id: 4, name: "LinkedIn", url: "https://www.linkedin.com/company/devon-technologies-ltd/about/?viewAsMember=true", icon: linkedin },
];

export default Footer
