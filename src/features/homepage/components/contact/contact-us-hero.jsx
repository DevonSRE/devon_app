'use client';


import { SectionTag, SectionTitle } from "@/components/section-util-tags";
import Image from "next/image";
import nigeriaMap from "/public/svg/devon-nigeria-map.svg";
import { MailIcon, MapPinnedIcon, PhoneCallIcon } from "lucide-react";
import { toast } from "sonner";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const ContactUsHero = () => {
  return (
    <div className="size-full relative">
      <div className="relative overflow-hidden w-full min-h-[calc(50dvh-70px)] pb-10 md:pb-16 bg-neutral-100 flex flex-col gap-3 md:gap-5 justify-center items-center px-5 md:px-0">
        <div>
          <SectionTag text={'Partner With Us'} color={'green'} />
        </div>

        <div className="text-center max-w-5xl">
          <SectionTitle className="text-2xl md:text-inherit">
            We&apos;d Love to talk to you
          </SectionTitle>
        </div>

        {/* left map */}
        <Image
          src={nigeriaMap}
          alt="Nigeria Map"
          height={1500}
          width={1500}
          className="absolute -bottom-52 md:-bottom-48 -left-64 md:-left-[400px] w-auto h-auto aspect-square object-contain object-center"
        />
        {/* right map */}
        <Image
          src={nigeriaMap}
          alt="Nigeria Map"
          height={1500}
          width={1500}
          className="-scale-x-100 absolute -bottom-52 md:-bottom-48 -right-64 md:-right-[400px] w-auto h-auto aspect-square object-contain object-center"
        />
      </div>

      <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-4 md:gap-10 absolute left-1/2 -translate-x-1/2 -bottom-24 md:-bottom-12">
        {contacts.map((contact) => (
          <ContactCard key={contact.id} {...contact} />
        ))}
      </div>
    </div>
  );
};


const contacts = [
  { id: 1, type: "phone", value: "+234 810 426 8727", icon: <PhoneCallIcon size={24} className="size-4 md:size-6" />, subText: "Copy to Clipboard" },
  { id: 2, type: "mail", value: "info@devontech.io", icon: <MailIcon size={24} className="size-4 md:size-6" />, subText: "Send a Mail" },
  { id: 3, type: "map", value: "Mercy Samuelson Estate, Block L, House No. 2, Plot 622, Karmo district, Abuja, Federal Capital Territory", icon: <MapPinnedIcon size={24} className="size-4 md:size-6" />, subText: "View of Google Maps" },
];

const ContactCard = (props) => {
  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Text copied to clipboard:", text);
        toast.success("Copied to clipboard");
      })
      .catch((err) => {
        console.error("Error copying text to clipboard:", err);
        toast.error("Error copying to clipboard");
      });
  };
  const handleClick = (type) => {
    switch (type) {
      case 'phone':
        copyToClipboard(props.value);
        break;
      case 'mail':
        if (window.location) {
          location.href = "mailto:" + props.value;
        } else {
          copyToClipboard(props.value);
        }
        break;
      case 'map':
        if (window.location) {
          location.href = `http://maps.google.com/?q=${props.value}`;
        }
        break;
      default:
        break;
    }
  };
  return (
    <div className="hover:cursor-pointer flex flex-col gap-1 md:gap-2" title={props.subText}>
      <div
        onClick={() => handleClick(props.type)}
        className="bg-white shadow-lg flex items-center justify-center gap-2 md:gap-4 px-2 md:px-8 py-1.5 md:py-4 min-h-16 md:min-h-20 w-fit rounded min-w-fit md:min-w-52 max-w-[600px]"
      >
        <div>{props.icon}</div>
        <Separator orientation="vertical" className="h-4 md:h-6" />
        <p className={cn("text-xs md:text-sm font-medium", props.value.length > 25 ? "w-72 md:w-96" : "whitespace-nowrap")}>{props.value}</p>
      </div>
      <small className="text-[9px] font-light bg-green-100/50 py-1 px-2 w-fit">{props.subText}</small>
    </div>
  );
};

export { ContactUsHero };
