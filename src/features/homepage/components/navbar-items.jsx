"use client";


import { forwardRef, Fragment } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  // navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { CircleAlertIcon, FileTextIcon, GemIcon, MicIcon, PhoneCallIcon, UsersIcon } from "lucide-react";



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

      <ExploreNavMenu />
    </nav>
  );
}


const exploreItems = {
  solutions: [
    {
      icon: <GemIcon size={16} />,
      title: "Virtual Hearings",
      href: "",
      description: "Secure platforms for legal proceeding.",
    },
    {
      icon: <MicIcon size={16} />,
      title: "Transcript Generations",
      href: "",
      description: "AI-powered transcription for legal accuracy.",
    },
    {
      icon: <FileTextIcon size={16} />,
      title: "Case management",
      href: "",
      description: "Customizable platforms for managing cases.",
    },
  ],
  resources: [
    {
      icon: <PhoneCallIcon size={16} />,
      title: "Contact us",
      href: "/contact-us",
      description: "Get in touch for collaboration",
    },
    {
      icon: <CircleAlertIcon size={16} />,
      title: "Support Center",
      href: "",
      description: "Help and FAQs for users.",
    },
    {
      icon: <UsersIcon size={16} />,
      title: "User stories",
      href: "",
      description: "Real world impact for our solutions.",
    },
  ],
  information: [
    {
      icon: <GemIcon size={16} />,
      title: "Our Mission",
      href: "/about",
      description: "Committed to innovation and justice.",
    },
    {
      icon: <GemIcon size={16} />,
      title: "Our Team",
      href: "/about",
      description: "Meet the experts behind our solutions.",
    },
    {
      icon: <GemIcon size={16} />,
      title: "Careers",
      href: "",
      description: "Join us in transforming legal tech.",
    },
    {
      icon: <GemIcon size={16} />,
      title: "Privacy Policy",
      href: "",
      description: "Your data protection is our priority.",
    },
  ],
  integrations: [
    {
      icon: <GemIcon size={16} />,
      title: "Public API",
      href: "",
      description: "",
    },
  ],
};


const ExploreNavMenu = () => {
  return (
    <div className="font-light">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-light text-base">Explore</NavigationMenuTrigger>
          <NavigationMenuContent className="flex items-start w-[600px] gap-3 p-1 md:w-[1000px] lg:w-[1000px] ">
            <div className="p-4 space-y-2">
              <p className="text-green-500 font-semibold whitespace-nowrap">Explore Our Solutions</p>
              <ul className="grid w-full gap-3 p-1 md:grid-cols-1">
                {exploreItems.solutions.map((item) => (
                  <ListItem
                    key={item.title}
                    icon={item.icon}
                    title={item.title}
                    href={item.href}
                  >
                    {item.description}
                  </ListItem>
                ))}
              </ul>
            </div>

            <div className="p-4 space-y-2">
              <p className="text-green-500 font-semibold whitespace-nowrap">Additional Resources</p>
              <ul className="grid w-full gap-3 p-1 md:grid-cols-1">
                {exploreItems.resources.map((item) => (
                  <ListItem
                    key={item.title}
                    icon={item.icon}
                    title={item.title}
                    href={item.href}
                  >
                    {item.description}
                  </ListItem>
                ))}
              </ul>
            </div>

            <div className="p-4 space-y-2">
              <p className="text-green-500 font-semibold whitespace-nowrap">Company Information</p>
              <ul className="grid w-full gap-3 p-1 md:grid-cols-1">
                {exploreItems.information.map((item) => (
                  <ListItem
                    key={item.title}
                    icon={item.icon}
                    title={item.title}
                    href={item.href}
                  >
                    {item.description}
                  </ListItem>
                ))}
              </ul>
            </div>

            <div className="p-4 space-y-2">
              <p className="text-green-500 font-semibold whitespace-nowrap">API Integrations</p>
              <ul className="grid w-full gap-3 p-1 md:grid-cols-1">
                {exploreItems.integrations.map((item) => (
                  <ListItem
                    key={item.title}
                    icon={item.icon}
                    title={item.title}
                    href={item.href}
                  >
                    {item.description}
                  </ListItem>
                ))}
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </div>
  );
};


const ListItem = forwardRef((
  { className, icon, title, children, ...props }, ref,
) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-start gap-1.5">
            <div>{icon}</div>
            <div>
              <div className="text-sm font-medium leading-none">{title}</div>
              <p className="line-clamp-2 text-xs md:text-sm leading-snug text-muted-foreground">
                {children}
              </p>
            </div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
