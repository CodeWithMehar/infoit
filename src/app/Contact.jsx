"use client";
import React from "react";
import Image from "next/image";
export default function MyComponent() {
  return (
    <>
      <div className="w-full pt-8 sm:pt-16">
        {/* Section Title */}
        <div className="flex items-center justify-center space-x-2">
          <Image
            src="https://img.icons8.com/?size=160&id=UPyS5SRZwyVR&format=png"
            alt="Decorative Icon"
            width={20} // sm width ~ 5 * 4 = 20px
            height={20}
            className="w-4 h-4 sm:w-5 sm:h-5"
          />
          <h3 className="text-[#7d963d] font-bold text-2xl sm:text-2xl uppercase text-center font-gabriola">
            For Over 15 Years. For Millions of Users
          </h3>
          <Image
            src="https://img.icons8.com/?size=160&id=UPyS5SRZwyVR&format=png"
            alt="Decorative Icon"
            width={20} // Tailwind ke sm:w-5 h-5 ke around size
            height={20}
            className="w-4 h-4 sm:w-5 sm:h-5"
          />
        </div>

        {/* Heading */}
        <h1 className="text-center text-3xl sm:text-3xl md:text-5xl font-normal leading-snug sm:leading-tight my-2 sm:my-4 font-calibri italic">
          Powerful
          <br />
          <span className="font-bold"> Digital Solutions </span>
        </h1>
      </div>

      {/* Background Section */}
      <div
        className="bg-cover bg-center w-full flex flex-col items-center justify-center text-white text-center py-10 md:py-20 px-4"
        style={{
          backgroundImage:
            "url('https://wpdemo.archiwp.com/engitech/wp-content/uploads/sites/4/2020/03/bg-cta-home2.jpg')",
        }}
      >
        <h2 className="text-[20px] sm:text-[25px] font-semibold mb-2 sm:mb-4 font-calibri italic">
          Drop us a line! We are here to answer your questions 24/7
        </h2>
        <h1 className="text-[30px] sm:text-[40px] md:text-[50px] font-bold mb-4 sm:mb-6 font-calibri">
          NEED A CONSULTATION?
        </h1>
        <button className="bg-white text-[#7D963D] py-2 px-4 text-[10px] sm:text-[12px] lg:text-[14px] transition-all duration-500 ease-out relative overflow-hidden group hover:text-white border-2 border-[#7D963D] hidden md:block">
          <span className="relative z-10 font-gabriola">CONTACT NOW</span>
          <span className="absolute inset-0 bg-gradient-to-r from-[#7D963D] to-[#cdf171] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
        </button>
      </div>
    </>
  );
}
