import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { Fragment } from "react";

import ppdc from "/public/svg/devon-partner-ppdc.svg";
import devend from "/public/svg/devon-partner-devend.svg";
import macarth from "/public/svg/devon-partner-macarth.svg";
import usdos from "/public/svg/devon-partner-usdos.svg";
// import budeshi from "/public/svg/devon-partner-budeshi.svg";

const Partners = () => {
  return (
    <div className="py-4 px-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-8 md:gap-y-4 w-full bg-white">
      {partners.map((partner, index) => (
        <Fragment key={partner.id}>
          <Image
            src={partner.logo}
            alt={partner.name}
            height={200}
            width={400}
            className="object-contain object-center size-fit"
          />
          {index + 1 < partners.length && (<Separator orientation="vertical" className="h-4 md:h-8" />)}
        </Fragment>
      ))}
    </div>
  );
};


const partners = [
  { id: 1, name: "ppdc", logo: ppdc, },
  { id: 2, name: "devend", logo: devend, },
  { id: 3, name: "macarthur", logo: macarth, },
  { id: 4, name: "usdos", logo: usdos, },
  // { id: 5, name: "budeshi", logo: budeshi, },
];


export { Partners };
