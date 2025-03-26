"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import devonLogo from "/public/devon_logo.png";
import { useState } from "react";


const navbarItems = [
  {
    id: 1,
    name: 'logo',
    category: 'logo',
    value: 'logo',
    url: 'logo',
  },
  {
    id: 2,
    name: 'home',
    category: 'links',
    value: 'Home',
    url: '/',
  },
  {
    id: 3,
    name: 'about-us',
    category: 'links',
    value: 'About Us',
    url: '/about',
  },
  {
    id: 4,
    name: 'solutions',
    category: 'links',
    value: 'Solutions',
    url: '/solutions',
  },
  {
    id: 5,
    name: 'contact-us',
    category: 'cta',
    value: 'Contact Us',
    url: '/contact-us',
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <header className="flex items-center justify-between px-10 py-5">
      <div>
        {navbarItems.map((item) => (
          <div key={item.id}>
            {item.category === "logo" && (
              <Link href={item.url}>
                <Image src={devonLogo} alt="A logo of Devon" />
              </Link>
            )}
          </div>
        ))}
      </div>

      <nav>
        {navbarItems.map((item) => (
          <ul key={item.id}>
            {item.category === "links" && (
              <li key={item.id}>
                <Link href={item.url}>{item.value}</Link>
              </li>
            )}
          </ul>
        ))}
      </nav>

      <div>
        {navbarItems.map((item) => (
          <div key={item.id}>
            {item.category === 'cta' && (
              <button>{item.value}</button>
            )}
          </div>
        ))}
      </div>
    </header>
  );

  if (pathname === "/") {
    return (
      <>
        <div className="flex justify-between md:px-24 px-4 pt-6 bg-black">
          <div>
            <Image src={devonLogo} alt="A logo of Devon" />
          </div>
          <div className="bg-[#B8B8B826] hidden md:flex gap-8 text-sm px-14 py-3 rounded-3xl">
            <Link href="/" className={`${pathname === "/" ? "text-green-500" : "text-white"}`}>Home</Link>
            <Link href="/aboutus" className={`${pathname === "/aboutus" ? "text-green-500" : "text-white"}`}>About Us</Link>
            <Link href="/services" className={`${pathname === "/services" ? "text-green-500" : "text-white"}`}>Services</Link>
            <Link href="/contact" className={`${pathname === "/contact" ? "text-green-500" : "text-white"}`}>Contact</Link>
          </div>

          {/* Hamburger Menu */}
          <div className="md:hidden">
            <div
              onClick={handleClick}
              className="md:hidden relative cursor-pointer z-50"
            >
              {!nav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  width={40}
                  height={40}
                >
                  <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  width={40}
                  height={40}
                >
                  <path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"></path>
                </svg>
              )}
            </div>

            {/* Mobile Menu Items */}
            <ul
              className={
                !nav
                  ? "hidden"
                  : "absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center text-white"
              }
            >
              <li className="py-4 text-2xl">
                <Link href="/" onClick={handleClick}>Home</Link>
              </li>

              <li className="py-4 text-2xl">
                <Link href="/aboutus" onClick={handleClick}>About Us</Link>
              </li>

              <li className="py-4 text-2xl">
                <Link href="/services" onClick={handleClick}>Services</Link>
              </li>

              <li className="py-4 text-2xl">
                <Link href="/contact" onClick={handleClick}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <nav className="flex justify-between py-4 bg-[#E6E7E6] text-[#070707] px-4">
        <div className="md:ml-36">
          <Image
            src={devonLogo}
            alt="A logo of Devon"
            width={100}
            height={100}
          />
        </div>
        <div className="hidden md:flex gap-16 text-sm md:mr-20">
          <Link href="/" className={`${pathname === "/" ? "text-green-500" : "text-black"}`}>Home</Link>
          <Link href="/aboutus" className={`${pathname === "/aboutus" ? "text-green-500" : "text-black"}`}>About Us</Link>
          <Link href="/services" className={`${pathname === "/services" ? "text-green-500" : "text-black"}`}>Services</Link>
          <Link href="/contact" className={`${pathname === "/contact" ? "text-green-500" : "text-black"}`}>Contact</Link>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <div
            onClick={handleClick}
            className="md:hidden relative cursor-pointer z-50"
          >
            {!nav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="black"
                width={40}
                height={40}
              >
                <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="black"
                width={40}
                height={40}
              >
                <path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"></path>
              </svg>
            )}
          </div>

          {/* Mobile Menu Items */}
          <ul
            className={
              !nav
                ? "hidden"
                : "absolute top-0 left-0 w-full h-screen bg-[#E6E7E6] flex flex-col justify-center items-center text-black"
            }
          >
            <li className="py-4 text-2xl">
              <Link href="/" onClick={handleClick}>Home</Link>
            </li>

            <li className="py-4 text-2xl">
              <Link href="/aboutus" onClick={handleClick}>About Us</Link>
            </li>

            <li className="py-4 text-2xl">
              <Link href="/services" onClick={handleClick}>Services</Link>
            </li>

            <li className="py-4 text-2xl">
              <Link href="/contact" onClick={handleClick}>Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
