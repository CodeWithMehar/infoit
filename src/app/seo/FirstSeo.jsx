import React from "react";
import { AiOutlineFileSearch } from "react-icons/ai";
import { PiArrowArcRightBold } from "react-icons/pi";
import { PiBuildingApartmentThin } from "react-icons/pi";
import { SiVorondesign } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import { IoRocketOutline } from "react-icons/io5";
import { CiLink } from "react-icons/ci";
export default function FirstSeo() {
  return (
    <div className="relative w-full pt-28 pb-36 flex items-center justify-center bg-white">
      {/* Large background word with low opacity */}
      <div className="absolute inset-0 flex items-center justify-center hidden sm:flex">
        <span className="text-[100px] md:text-[200px] lg:text-[250px] font-bold opacity-10 animate-ping select-none">
          STEPS
        </span>
      </div>

      {/* Overlay content */}
      <div className="relative z-10 text-center text-gray-900 flex flex-wrap justify-center items-center">
        {/* Card 1 */}
        <StepCard step={1} title="Keyword Research" icon={<AiOutlineFileSearch />} />
        <PiArrowArcRightBold className="text-[60px] text-[#7d963d] " />
        {/* Card 2 */}
        <StepCard step={2} title="On-Page Optimization" icon={<PiBuildingApartmentThin />} />
        <PiArrowArcRightBold className="text-[60px] text-[#7d963d] " />
        {/* Card 3 */}
        <StepCard step={3} title="Technical SEO" icon={<SiVorondesign />} />
        <PiArrowArcRightBold className="text-[60px] text-[#7d963d] " />
        {/* Card 4 */}
        <StepCard step={4} title="Content Creation" icon={<CgWebsite />} />
        <PiArrowArcRightBold className="text-[60px] text-[#7d963d] " />
        {/* Card 5 */}
        <StepCard step={5} title="Link Building" icon={<CiLink />} />
      </div>
    </div>
  );
}

const StepCard = ({ step, title, icon }) => {
  return (
    <div className="w-[15%] flex flex-col items-center space-y-4 px-20">
      <h3 className="text-gray-700 text-[30px]">{step.toString().padStart(2, '0')}</h3>
      <div className="w-[70px] h-[70px] rounded-full border-2 border-[#7d963d] flex items-center justify-center">
        {React.cloneElement(icon, { className: "text-[#7d963d] text-3xl slow-spin" })}
      </div>
      <p className="font-semibold text-[25px] capitalize font-calibri italic">{title}</p>
    </div>
  );
};
