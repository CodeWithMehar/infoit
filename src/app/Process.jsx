"use client";
import React from "react";
import text1 from "../img/text1.png";
import text2 from "../img/text2.png";
import text3 from "../img/text3.png";
import text4 from "../img/text4.png";
import ring from "../img/ring.png";

export default function Process() {
  return (
    <div className="w-full h-auto bg-[#fffffd] pt-10 relative overflow-hidden">
      <img
        src={ring.src}
        alt="Decorative ring"
        className="absolute left-[40%] top-[20%] animate-ping"
      />
      {/* Header Section */}
      <div className="flex items-center justify-center space-x-2">
        <img
          src="https://img.icons8.com/?size=160&id=UPyS5SRZwyVR&format=png"
          alt="Decorative Icon"
          className="w-[20px] h-[20px]"
        />
        <h3 className="text-[#7d963d] font-bold text-[20px] uppercase font-gabriola">
          Work Process
        </h3>
        <img
          src="https://img.icons8.com/?size=160&id=UPyS5SRZwyVR&format=png"
          alt="Decorative Icon"
          className="w-[20px] h-[20px]"
        />
      </div>

      <h1 className="text-center  md:text-[45px] font-normal leading-[50px] font-supra capitalize text-supra-xl font-calibri italic">
        Our
        <span className="font-bold"> development process</span>
      </h1>

      <img
        src="https://exdesigners.shop/techbe/assets/img/shape/workProcessShape1_1.png"
        className="absolute animate-ping"
        alt="Background shape"
      />

      {/* Process Items Container */}
      <div className="flex flex-wrap justify-center items-center min-h-screen gap-8 md:gap-10 relative">
        {/* Each Process Item */}
        <ProcessItem
          title="Requirement"
          description="Requirements are the features, functions."
          imgSrc={text1.src}
          iconSrc="https://exdesigners.shop/techbe/assets/img/icon/processIcon1_1.png"
        />
        <ProcessItem
          title="UI/UX Design"
          description="Focuses on the look and feel of the product."
          imgSrc={text2.src}
          iconSrc="https://exdesigners.shop/techbe/assets/img/icon/processIcon1_2.png"
        />
        <ProcessItem
          title="Prototype"
          description="A prototype is an early sample or model."
          imgSrc={text3.src}
          iconSrc="https://exdesigners.shop/techbe/assets/img/icon/processIcon1_3.png"
        />
        <ProcessItem
          title="Development"
          description="Development is the process of building the actual product."
          imgSrc={text4.src}
          iconSrc="https://exdesigners.shop/techbe/assets/img/icon/processIcon1_4.png"
        />
      </div>
    </div>
  );
}

// Component for each process step
function ProcessItem({ title, description, imgSrc, iconSrc }) {
  return (
    <div className="relative w-[90%] max-w-[250px] bg-white rounded-b-full overflow-hidden transition-all duration-300 group flex flex-col justify-center shadow-2xl z-[9]">
      <div className="flex items-center justify-center w-[70px] h-[70px] bg-[#7e9f2a] rounded-full border-4 border-white shadow-2xl animate-bounce absolute top-0 left-[35%] transform -translate-x-1/2">
        <img
          src={iconSrc}
          alt={`${title} icon`}
          className="w-1/2 h-1/2" // Adjust the size as needed
        />
      </div>
      <div className="flex flex-col items-center justify-center p-4 text-[#7d963d] text-center gap-5 mt-12">
        <h2 className="font-extrabold text-[24px] md:text-[30px] font-calibri italic">{title}</h2>
        <p className="text-xl md:text-xl font-gabriola">{description}</p>
        <img
          src={imgSrc}
          alt={`${title} illustration`}
          className="w-[60px] h-[60px] md:w-[70px] md:h-[70px]"
        />
      </div>

      <div className="absolute inset-0 transition-all duration-1000 group-hover:opacity-100 opacity-0 rounded-b-full">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#7d963d] rounded-b-full border-l-8 border-r-8 border-b-10 border-transparent transition-all duration-1000 group-hover:border-[#7d963d]"></div>
      </div>
    </div>
  );
}
