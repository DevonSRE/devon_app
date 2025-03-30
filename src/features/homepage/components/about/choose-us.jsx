import Image from "next/image";
import { cn } from "@/lib/utils";
import * as motion from "motion/react-client"

import { SectionTitle } from "@/components/section-util-tags";

import { InnovationIcon, CommitmentIcon, SecureIcon, TailorIcon } from "@/components/icons/choose-icons";

const ChooseUs = () => {
  return (
    <div className="max-w-screen-xl mx-auto grid grid-cols-12 gap-8 gap-x-10 py-32">
      <div className="col-start-2 col-end-12 grid grid-cols-12 gap-12">
        <div className="h-48 w-72 max-w-full col-span-4">
          <SectionTitle className="mb-2.5 text-4xl">Why Choose Us</SectionTitle>
          <p className="font-light">We understand the unique challenges of the legal sector. We are commited to empowering legal professionals to do their best work.</p>
        </div>

        {reasons.map((reason) => (
          <TiltingCard key={reason.id} {...reason} className="col-span-4" />
        ))}
      </div>
    </div>
  );
};

const TiltingCard = ({ className, icon, heading, body }) => {
  const cardVariants = {
    initial: { transform: "rotate(0deg)", transition: { duration: 1.2, type: "spring", stiffness: 30 } },
    animate: { transform: "rotate(-10deg)", transition: { duration: 1.2, type: "spring", stiffness: 30 } }
  }
  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      whileHover="animate"
      className={cn(
        "relative group p-5 pt-0 h-48 w-80 max-w-full bg-neutral-100 hover:bg-devon-green hover:text-white rounded-xl duration-500 ease-out transition-colors space-y-2",
        className,
      )}>
      <div className="relative bg-white/40 w-10 h-12 p-1 text-devon-green group-hover:text-white group-hover:bg-neutral-100/20 rounded-br-xl">
        <div className="absolute bottom-1">
          {icon}
        </div>
      </div>

      <p className="font-semibold text-neutral-950 group-hover:text-white">{heading}</p>

      <p className="font-light text-xs text-neutral-950 group-hover:text-white">{body}</p>
    </motion.div>
  );
};


const reasons = [
  {
    id: 1,
    icon: <InnovationIcon />,
    heading: "Innovation Meets Expertise",
    body: "Our team combines legal knowledge with technological innovation to deliver reliable, future-proof solutioins.",
  },
  {
    id: 2,
    icon: <CommitmentIcon />,
    heading: "Commitment to Access to Justice",
    body: "We believe technology should empower and open legal systems to everyone, making processes more transparent and accessible.",
  },
  {
    id: 3,
    icon: <SecureIcon />,
    heading: "Secure and Scalable",
    body: "Our platforms prioritise security and scalability, ensure that legal data is handled with the utmost care and precision.",
  },
  {
    id: 4,
    icon: <TailorIcon />,
    heading: "Tailor-Made Legal Solutions",
    body: "We design products specifically for the legal space, understanding and addressing the unique needs of legal professionals.",
  },
];

export { ChooseUs };
