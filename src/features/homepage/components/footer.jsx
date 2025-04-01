import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import devonLogo from "/public/svg/devon-logo-white.svg";

import facebook from "/public/svg/Facebook.svg"
import instagram from "/public/svg/Instagram.svg"
import x from "/public/svg/X.svg"
import linkedin from "/public/svg/LinkedIn.svg"
import youtube from "/public/svg/Youtube.svg"
import { LocateFixedIcon, MailIcon, PhoneCallIcon } from 'lucide-react';


const Footer = () => {
  const links = [
    { id: 1, name: "Our Solutions", url: "/solutions", },
    { id: 2, name: "Case Studies", url: "/solutions", },
    { id: 3, name: "About Us", url: "/about", },
    { id: 4, name: "Contact Us", url: "/contact-us", },
    { id: 5, name: "Get Started", url: "/contact-us", },
  ];
  const socials = [
    { id: 1, name: "Facebook", url: "/", icon: facebook },
    { id: 2, name: "Instagram", url: "/", icon: instagram },
    { id: 3, name: "X", url: "/", icon: x },
    { id: 4, name: "LinkedIn", url: "/", icon: linkedin },
    { id: 5, name: "YouTube", url: "/", icon: youtube },
  ];

  return (
    <div className="bg-neutral-950 text-white">
      <div className="max-w-screen-xl mx-auto grid grid-cols-12 gap-16 py-24">
        <div className="col-start-2 col-end-12 flex items-center justify-between">
          <div>
            <Image src={devonLogo} alt='Devon Logo' className='' width="100" height="100" />
          </div>

          <ul className="flex items-center gap-5">
            {links.map((link) => (
              <li key={link.id} className="size-full whitespace-nowrap">
                <Link href={link.url} className="font-light">{link.name}</Link>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-2 justify-start">
            <p>Social Media</p>

            <div className="flex gap-1 items-center">
              {socials.map((social) => (
                <Link key={social.id} href={social.url} className="w-6 h-6">
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

        <div className="font-light text-sm col-span-full col-start-3 col-end-11 flex gap-5 items-center justify-between">
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

        <div className="col-span-full flex items-center justify-center">
          <div className="border-y-2 border-neutral-200 max-w-fit py-4 px-16">
            &copy; Devon Technologies {new Date().getFullYear()}. All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer
