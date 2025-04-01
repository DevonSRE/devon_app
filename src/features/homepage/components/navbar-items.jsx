"use client";


import { Fragment } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";


export function NavbarItems({ navItems }) {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between gap-4">
      <ul className="flex items-center justify-between gap-4">
        {navItems.map((item) => (
          <Fragment key={item.id}>
            {item.category === "links" && (
              <li key={item.id} className="relative">
                <Link href={item.url} className={cn("py-0.5 px-1 size-full font-light", {
                  "after:absolute after:w-full after:h-1.5 after:bg-white after:z-10 after:left-0 after:-bottom-6 font-medium": pathname === item.url
                })}
                >{item.value}</Link>
              </li>
            )}
          </Fragment>
        ))}
      </ul>

      <div className="font-light">
        Explore
      </div>
    </nav>
  );
}
