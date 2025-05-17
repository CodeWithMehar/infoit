import React, { useState, useEffect } from "react";
import { IoMdFlower } from "react-icons/io";
import Image from 'next/image';
export default function Testimonial() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This code runs on the client-side only
    setIsClient(true);
  }, []);

  return (
    <div className="w-full flex flex-col md:flex-row px-5 md:px-20 py-32 space-y-10 md:space-y-0 md:space-x-10 overflow-hidden">
      {/* Left div */}
      <div className="w-full md:w-1/2">
        <h2 className="text-[23px] font-bold uppercase text-[#7d963d] font-gabriola italic">
          testimonials
        </h2>
        <h1 className="text-[40px] md:text-[50px] capitalize leading-[55px] font-semibold py-2 font-calibri italic">
          Feedback from <br /> our clients
        </h1>
        <p className="text-gray-700 font-gabriola text-[20px] italic">
          Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia.
        </p>
        <button className="mt-5 bg-white text-[#7D963D] py-2 rounded-2xl px-6 md:px-10 text-sm lg:text-base transition-all duration-500 ease-out relative overflow-hidden group hover:text-white border-2 border-[#7D963D]">
          <span className="relative z-10 font-gabriola text-[20px]">ABOUT US</span>
          <span className="absolute inset-0 bg-gradient-to-r from-[#7D963D] to-[#cdf171] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
        </button>
      </div>
      {/* Right div */}
      <div className="w-full md:w-1/2 flex flex-col md:flex-row gap-10">
        {isClient && (
          <>
            <div className="flex-1 border rounded-xl bg-[#e2f3b5] px-5 py-5 flex flex-col items-center justify-center text-center hover:bg-[#7d963d] cursor-pointer shadow-inner transition-colors duration-1000 group relative">
          <Image
  src="https://cdn.pixabay.com/photo/2022/11/21/15/31/business-7607339_1280.jpg"
  alt="Client 1"
  width={70}
  height={70}
  className="rounded-full mb-4"
/>
              <h2 className="text-[20px] font-medium capitalize text-gray-600 py-5 group-hover:text-white transition-colors duration-1000 font-calibri italic">
                Adipiscing elit vitae dicta sunt explicabo. Nemo enim ipsam
                voluptatem quia.
              </h2>
              <h2 className="text-[20px] font-bold group-hover:text-white transition-colors duration-1000">
                John Dou
              </h2>
              <p className="text-gray-500 group-hover:text-white transition-colors duration-1000 font-gabriola">
                CEO, Business Co.
              </p>
              <IoMdFlower className="absolute -right-20 text-[#7d963d] text-[40px] md:text-[100px] slow-spin" />
            </div>
            <div className="flex-1 border rounded-xl bg-[#e2f3b5] px-5 py-5 flex flex-col items-center justify-center text-center hover:bg-[#7d963d] cursor-pointer shadow-inner transition-colors duration-1000 group">
           <Image
  src="https://cdn.pixabay.com/photo/2022/11/21/15/31/business-7607339_1280.jpg"
  alt="Client 2"
  width={70}
  height={70}
  className="rounded-full mb-4"
/>
              <h2 className="text-[20px] font-medium capitalize text-gray-600 py-5 group-hover:text-white transition-colors duration-1000 font-calibri italic">
                Adipiscing elit vitae dicta sunt explicabo. Nemo enim ipsam
                voluptatem quia.
              </h2>
              <h2 className="text-[20px] font-bold group-hover:text-white transition-colors duration-1000">
                John Dou
              </h2>
              <p className="text-gray-500 group-hover:text-white transition-colors duration-1000 font-gabriola">
                CEO, Business Co.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
