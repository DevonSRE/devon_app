import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { NavbarItems } from "./navbar-items";
import devonLogo from "/public/svg/devon-logo.svg";


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
  return (
    <header className="flex items-center justify-between px-24 py-4 bg-white relative after:absolute after:bg-[url('/svg/devon-brand-patterns.svg')] after:w-full after:h-1 after:left-0 after:bottom-0 after:z-0">
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

      <NavbarItems navItems={navbarItems} />

      <div>
        {navbarItems.map((item) => (
          <div key={item.id}>
            {item.category === 'cta' && (
              <Button size="lg">{item.value}</Button>
            )}
          </div>
        ))}
      </div>
    </header>
  );
}
