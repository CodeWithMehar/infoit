"use client";
import React, { useEffect, useState } from "react";
import FirstCoding from "./FirstCoding";
import CaseCode from "./CaseCode";
import ScrollingCode from "./ScrollingCode";
import Testimonial from "../seo/Testimonial";
import TabsComponent from "../Tab";
import Form2 from "../Form2";
import Form from "../Form";
import SocialIcons from "../socialicons";
import star from "../../img/star2.png";
import logo from "../../img/logo.png";
import Image from 'next/image';
export default function Page() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures component only renders on the client side
  }, []);

  if (!isClient) return null;
  return (
    <>
      <div
        className="relative w-full h-screen bg-cover bg-center flex flex-col md:flex-row"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&w=600")',
        }}
      >
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-90"></div>

        {/* Content inside the overlay */}
        <div className="relative flex flex-col md:flex-row items-center justify-center h-full w-full text-white text-3xl font-bold px-5 md:px-20 pt-10 md:pt-20 space-y-8 md:space-y-0">
          {/* Left Side */}
          <div className="w-full md:w-1/2 relative flex flex-col items-center md:items-start">
            {/* <img
              src={star.src}
              className="absolute left-[60%] bottom-[60%] h-[200px] w-[200px] slow-spin"
              alt="Spinning Shape"
            /> */}
            {/* <img
              src={logo.src}
              className="w-[50px] h-[50px] absolute left-[74%] bottom-[79%]"
            /> */}
            <h1 className="text-[40px] md:text-[70px] leading-[70px] capitalize text-center md:text-left pt-5 font-calibri italic">
              Our latest
              <br />
              program for <br />
              Web Development
            </h1>
            <p className="text-[14px] md:text-[20px] text-gray-400 leading-normal mt-3 md:mt-5 text-center md:text-left font-gabriola">
              Establish a strong online foundation with on-point technical SEO
              and internet marketing services.
            </p>
            <button className="mt-5 bg-white text-[#7D963D] py-1 px-10 md:text-[12px] transition-all duration-500 ease-out relative overflow-hidden group hover:text-white hidden md:block border-2 border-[#7D963D]">
              <span className="relative z-10 font-gabriola text-[20px]">
                ABOUT US
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#7D963D] to-[#cdf171] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
            </button>
          </div>

          {/* Right Side */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <Image
  src="https://cdn.pixabay.com/photo/2023/05/21/07/49/blockchain-8008051_1280.jpg"
  alt="SEO Marketing Image"
  width={800}  // image ki asli width ya approximate
  height={600} // image ki asli height ya approximate
  className="max-w-full h-auto"
/>
          </div>
        </div>
      </div>
      <FirstCoding />
      <CaseCode />
      <ScrollingCode />
      <Testimonial />
      <TabsComponent />
      <div className="w-full flex flex-col md:flex-row px-4 md:px-10 lg:px-20 space-y-10 md:space-y-0 md:space-x-10 mt-10 md:mt-20 mb-20">
        <div className="w-full md:w-full">
          <h1 className="font-calibri italic text-3xl md:text-4xl lg:text-5xl leading-tight font-bold text-center md:text-left">
            ENTER YOUR <span className="text-[#7d963d]"> DETAILS</span>
          </h1>
          <Form />
        </div>

        <div className="w-full md:w-full flex justify-center">
          <Form2 />
        </div>
      </div>
      <SocialIcons />
    </>
  );
}
