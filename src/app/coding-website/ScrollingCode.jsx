import React from 'react'
import { IoMdFlower } from "react-icons/io";
export default function ScrollingCode() {
  return (
    <div className="w-full overflow-hidden bg-[#effbce] py-4">
    <div className="whitespace-nowrap animate-scroll text-[50px] md:text-[70px] font-bold text-gray-800 flex items-center leading-[1.8] md:leading-[1.8]">
      {/* Repeating text and icon pairs */}
      {Array.from({ length: 5 }).map((_, index) => (
        <div className="flex items-center mx-4 font-calibri italic" key={index}>
          <span>Make your site code-friendly for optimal performance and maintainability </span>
          <IoMdFlower className="ml-5 text-[#7d963d] text-[40px] md:text-[70px] slow-spin" />
        </div>
      ))}
    </div>
  </div>
  )
}
