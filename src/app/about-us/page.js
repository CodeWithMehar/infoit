"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { PiArrowsClockwiseBold } from "react-icons/pi";
import { TbSlashes } from "react-icons/tb";
import { motion, useScroll, useTransform } from "framer-motion";
import About from "./About";
import SocialIcons from "../socialicons";

// Dynamically import motion.div to avoid SSR issues
const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false }
);

const Page = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { scrollY } = useScroll();
  const yScroll = useTransform(scrollY, [0, 300], [0, -100]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Prevent rendering until client-side is mounted
  if (!isMounted) {
    return null;
  }

  return (
    <>
      <div
        className="relative w-full h-[450px] bg-cover bg-center"
        style={{
          backgroundImage: "url('https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-[#000000] opacity-60"></div>
        <div className="relative z-10 text-white">
          <div className="relative group top-64 left-14 bg-gray-700 border-l-8 border-[#7d963d] w-[250px] h-[60px] rounded-lg text-center flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-[#7d963d] scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left z-0"></div>
            <p className="relative flex gap-3 items-center text-gray-200 group-hover:text-white z-10 font-calibri">
              <a href="/" className="hover:text-white font-calibri">HOME</a>
              <PiArrowsClockwiseBold />
              <a href="/about-us" className="hover:text-white">ABOUT</a>
            </p>
          </div>
          <motion.h1
            className="font-bold absolute top-80 left-14 text-[32px] md:text-[40px] bg-gradient-to-r from-[#4e5e2a] via-[#7d963d] to-[#e3eacd] text-transparent bg-clip-text font-calibri italic"
            style={{ y: yScroll }}
          >
            ABOUT US
          </motion.h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full container mx-auto px-5 md:px-10 flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10 overflow-hidden">
  {/* Left section */}
  <MotionDiv
    className="flex-1 py-10 md:py-20 relative"
    initial="hidden"
    whileInView="visible"
    variants={{
      hidden: { opacity: 0, x: -100 },
      visible: { opacity: 1, x: 0 },
    }}
    transition={{ duration: 2 }}
  >
    <h2 className="font-calibri italic text-[#7d963d] font-bold uppercase flex items-center gap-2 text-[16px] md:text-[20px]">
      <TbSlashes />
      What We Offer
    </h2>
    <h2 className="font-calibri text-[28px] md:text-[50px] font-bold leading-[35px] md:leading-[55px] italic">
      Enhance Your <br /> Company's Brand
    </h2>
    <p className="font-gabriola text-gray-700 py-5 capitalize text-[30px] md:text-2xl text-justify">
      We possess the skillset to elevate your company’s brand with our comprehensive services. Located in Jodhpur, we specialize in Digital Marketing in Udaipur, Web Development, App Development Services, SEO Services In Udaipur, and Website Development. Our expert team of Website Developers In Udaipur is dedicated to helping you rank your Google Ads and improve your Google ranking.
    </p>
  </MotionDiv>

  {/* Right section */}
  <div className="flex-1 py-0 md:py-20">
    <MotionDiv
      className="flex flex-col md:flex-row gap-5"
      initial="hidden"
      whileInView="visible"
      variants={{
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 },
      }}
      transition={{ duration: 2 }}
    >
      {/* Our Vision */}
      <div className="relative group cursor-pointer">
        <img
          src="https://cdn.pixabay.com/photo/2014/11/15/17/40/executive-532448_1280.jpg"
          alt="Our Vision"
          className="w-full h-auto transition-all duration-500 object-cover"
        />
        <div className="absolute inset-0 bg-[#53666F] opacity-80 group-hover:opacity-0 transition-opacity duration-700"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-[20px] md:text-[25px] font-semibold font-calibri">OUR VISION</p>
        </div>
      </div>

      {/* Our Mission */}
      <div className="relative group cursor-pointer">
        <img
          src="https://wpdemo.archiwp.com/engitech/wp-content/uploads/sites/4/2020/02/image1-about.png"
          alt="Our Mission"
          className="w-full h-auto transition-all duration-500 object-cover"
        />
        <div className="absolute inset-0 bg-[#53666F] opacity-80 group-hover:opacity-0 transition-opacity duration-700"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-[20px] md:text-[25px] font-semibold font-calibri">OUR MISSION</p>
        </div>
      </div>
    </MotionDiv>

    {/* Second Row of Images */}
    <MotionDiv
      className="flex flex-col md:flex-row gap-5 mt-5"
      initial="hidden"
      whileInView="visible"
      variants={{
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 },
      }}
      transition={{ duration: 2 }}
    >
      {/* Our Philosophy */}
      <div className="relative group cursor-pointer">
        <img
          src="https://media.istockphoto.com/id/1492719702/photo/a-multicultural-team-of-professionals-fostering-collaboration-and-innovation-in-sydney.jpg?s=612x612&w=0&k=20&c=YJdhIFJBFkFZKsL40z9oLR-BovakWSyhBZeH5UO4Hlo="
          alt="Our Philosophy"
          className="w-full h-auto transition-all duration-500 object-cover"
        />
        <div className="absolute inset-0 bg-[#53666F] opacity-80 group-hover:opacity-0 transition-opacity duration-700"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-[20px] md:text-[20px] font-semibold font-calibri">OUR PHILOSOPHY</p>
        </div>
      </div>

      {/* Our Strategy */}
      <div className="relative group cursor-pointer">
        <img
          src="https://cdn.pixabay.com/photo/2016/09/22/10/39/puzzle-1686920_1280.jpg"
          alt="Our Strategy"
          className="w-full h-auto transition-all duration-500 object-cover"
        />
        <div className="absolute inset-0 bg-[#53666F] opacity-80 group-hover:opacity-0 transition-opacity duration-700"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-[20px] md:text-[25px] font-semibold uppercase font-calibri">OUR STRATEGY</p>
        </div>
      </div>
    </MotionDiv>
  </div>
</div>


      <About />
      <SocialIcons/>
    </>
  );
};

export default Page;
