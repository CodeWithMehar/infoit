"use client";
import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import Image from 'next/image';
export default function Counter() {
  const [counterOn, setCounterOn] = useState(false); // Initialize counterOn as false

  useEffect(() => {
    // Set counterOn to true after component mounts
    setCounterOn(true);
  }, []);

  return (
    <div className="w-full bg-[#ffffff] pt-0">
      <div className="flex items-center justify-center space-x-2">
     
<Image
  src="https://img.icons8.com/?size=160&id=UPyS5SRZwyVR&format=png"
  alt="Decorative Icon"
  width={20}      // max width jo tumne sm breakpoint pe di hai
  height={20}     // max height jo tumne sm breakpoint pe di hai
  className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px]"
/>
        <h3 className="text-[#7d963d] font-bold text-[16px] sm:text-[20px] uppercase font-gabriola">
          About Company
        </h3>
     <Image
  src="https://img.icons8.com/?size=160&id=UPyS5SRZwyVR&format=png"
  alt="Decorative Icon"
  width={20}   // maximum width (px)
  height={20}  // maximum height (px)
  className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px]"
/>
      </div>

      {/* Heading */}
      <h1 className="md:text-supra-xl text-center  sm:text-[35px]  lg:text-[45px] leading-[35px] sm:leading-[40px] md:leading-[45px] lg:leading-[50px] mb-3 sm:mb-5 font-calibri italic font-extrabold">
        What We Actually Do
      </h1>

      <div className="w-[100%] mt-10 mx-auto h-auto py-10 bg-gradient-to-r from-[#d7f885] via-[#6a8f0a] to-[#ddf89a] ring-4 ring-[#74912c] animate-gradient-flow bg-[length:200%_200%] flex flex-col sm:flex-row justify-center space-y-6 sm:space-y-0 sm:space-x-28">
        {/* Counter Items */}
        {[
          {
            end: 100,
            label: "Satisfied Clients",
            icon: "https://cdn-icons-gif.flaticon.com/15579/15579035.gif",
          },
          {
            end: 300,
            label: "Projects Completed",
            icon: "https://cdn-icons-gif.flaticon.com/15578/15578522.gif",
          },
          {
            end: 12,
            label: "Team Members",
            icon: "https://cdn-icons-gif.flaticon.com/16059/16059819.gif",
          },
          {
            end: 8,
            label: "Year's Experience",
            icon: "https://cdn-icons-gif.flaticon.com/12134/12134098.gif",
          },
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="flex items-center gap-2">
          
<Image
  src={item.icon}
  alt={`${item.label} Icon`}
  width={60}          // max width
  height={60}         // max height
  className="w-[40px] sm:w-[60px] rounded-full"
/>
              <h1 className="text-[40px] sm:text-[50px] font-bold text-white font-calibri">
                {counterOn && (
                  <CountUp start={0} end={item.end} duration={3} delay={0} />
                )}
                +
              </h1>
            </div>
            <div className="text-center">
              <h3 className="text-[16px] sm:text-[30px] text-white font-calibri italic">
                {item.label}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
