import React from "react";
import hire from "../../src/img/hire2.png";
import Image from "next/image";
export default function Form2() {
  return (
    <>
      <div className="w-full lg:w-full px-4 md:px-8 lg:px-8">
        <h1 className="text-3xl md:text-2xl lg:text-5xl leading-tight font-bold text-center md:text-left font-calibri italic">
          BOOST YOUR <span className="text-[#7d963d]">CAREER</span>
        </h1>

        <div className="flex justify-center md:justify-start mt-6 md:mt-6">
      <Image
  src={hire.src}
  alt="Career Boost"
  className="w-full"
  width={500} // ⬅️ isko actual width ke hisaab se adjust karo
  height={300} // ⬅️ isko actual height ke hisaab se adjust karo
/>

        </div>
      </div>
    </>
  );
}
