"use client"
import React, { useEffect, useState } from 'react';
import { PiArrowsClockwiseBold } from "react-icons/pi";
import { motion, useScroll, useTransform } from "framer-motion";
import Section1 from './Section1';
import SocialIcons from '../socialicons';
import Link from 'next/link';
export default function Page() {
  const [isClient, setIsClient] = useState(false);
  const { scrollY } = useScroll();
  const yScroll = useTransform(scrollY, [0, 300], [0, -50]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <div
        className="relative w-full h-[450px] bg-cover bg-center"
        style={{
          backgroundImage: "url('https://cdn.pixabay.com/photo/2024/03/19/15/37/call-center-8643475_1280.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-[#000000] opacity-60"></div>
        <div className="relative z-10 text-white">
          <div className="relative group top-64 left-14 bg-gray-700 border-l-8 border-[#7d963d] w-[250px] h-[60px] rounded-lg text-center flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-[#7d963d] scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left z-0"></div>
            <p className="relative flex gap-3 items-center text-gray-200 group-hover:text-white z-10 font-calibri italic">
           <Link href="/" className="hover:text-white">HOME</Link>
<PiArrowsClockwiseBold />
<Link href="/contact-us" className="hover:text-white">Contact Us</Link>
            </p>
          </div>
          {isClient && (
            <motion.h1
              className="font-bold absolute top-80 left-14 text-[32px] md:text-[40px] bg-gradient-to-r from-[#4e5e2a] via-[#7d963d] to-[#e3eacd] text-transparent bg-clip-text font-calibri italic"
              style={{ y: yScroll }}
            >
              CONTACT US
            </motion.h1>
          )}
        </div>
      </div>
      <Section1/>
      <SocialIcons/>
    </>
  );
}
