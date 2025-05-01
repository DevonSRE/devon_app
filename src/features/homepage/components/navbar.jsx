import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { NavbarItems } from "./navbar-items";
import devonLogo from "/public/svg/devon-logo.svg";
import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

export default function Navbar() {
  return (
    <NavigationMenu className="bg-white z-50 w-full max-w-full">
      <header className="fixed top-0 bg-white z-50 w-full">
        <div className="relative size-full flex items-center justify-between px-5 md:px-12 lg:px-24 py-4 bg-white after:absolute after:bg-[url('/svg/devon-brand-patterns.svg')] after:w-full after:h-1 after:left-0 after:bottom-0 after:z-0">
          <div>
            {navbarItems.map((item) => (
              <div key={item.id}>
                {item.category === "logo" && (
                  <Link href={item.url} className="h-auto w-16 lg:w-24">
                    <Image src={devonLogo} alt="A logo of Devon" height={100} width={100} className="object-contain w-16 lg:w-24 h-auto" />
                  </Link>
                )}
              </div>
            ))}
          </div>

          <NavigationMenuViewport />

          <NavbarItems navItems={navbarItems} />

          <div className="hidden lg:block">
            {navbarItems.map((item) => (
              <div key={item.id}>
                {item.category === 'cta' && (
                  <Link href="/contact-us" className={cn(buttonVariants({ size: "lg" }))}>{item.value}</Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </header>
    </NavigationMenu>
  );
}

const navbarItems = [
  {
    id: 1,
    name: 'logo',
    category: 'logo',
    value: 'logo',
    url: '/',
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
