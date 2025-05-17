"use client";
import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { MdSupportAgent } from "react-icons/md";
import Form from "../Form";
import Image from 'next/image';
const IoIosSettings = dynamic(
  () => import("react-icons/io").then((mod) => mod.IoIosSettings),
  { ssr: false }
);

export default function Section1() {
  return (
    <>
      <div className="w-full flex flex-col md:flex-row mt-20">
        {/* Left Side - Contact Form */}
        <motion.div
          className="md:pl-20 md:w-[65%] px-5"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-[180px] h-[40px] bg-[#e2f3b5] rounded-3xl flex items-center justify-center">
            <IoIosSettings
              className="text-[25px] text-[#6c8332]"
              style={{ animation: "spin 2s linear infinite" }}
            />
            <p className="text-[#6c8332] ml-2 font-semibold uppercase font-gabriola text-xl">
              Get In Touch
            </p>
          </div>
          <h2 className="font-supra text-[32px] md:text-[50px] font-bold leading-[40px] md:leading-[50px] mt-5 font-calibri italic">
            Drop Us a <br /> Message Today!
          </h2>
          <p className="text-gray-600 text-sm md:text-xl mt-5 font-gabriola">
            Need support with our products, have a query about our services, or
            just want to say hello, our dedicated team is eager to connect with
            you.
          </p>
        {/* form component */}
        <Form className=""/>
        </motion.div>

        {/* Right Side - Contact Info */}
        <motion.div
          className="md:pr-20 w-full md:w-1/2 px-5 mt-10 md:mt-0"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-10">
            {[
              {
                title: "Email",
                content: "jincwilliam@gmail.com",
                link: "mailto:jincwilliam@gmail.com",
                icon: FaEnvelopeOpenText,
              },
              {
                title: "Phone",
                content: "+919079373380",
                link: "tel:+919079373380",
                icon: FiPhoneCall,
              },
              {
                title: "Location",
                content: "Jodhpur, India",
                link: "#",
                icon: GoLocation,
              },
            
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-[#E2F3B5] flex flex-col items-center justify-center text-center py-10 space-y-2 px-10 w-full rounded-lg shadow-md animate-flash"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <item.icon className="text-3xl  animate-bounce" />
                <h2 className="text-xl font-semibold font-calibri">
                  {item.title}
                </h2>
                <a href={item.link} className=" hover:underline font-calibri">
                  {item.content}
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <div className="relative w-full mt-20 flex flex-col md:flex-row justify-around items-center bg-[url('https://demo.bravisthemes.com/orritech/wp-content/uploads/2024/06/img1-us.webp')] bg-cover bg-center py-10">
        <div className="absolute inset-0 bg-[#304475] opacity-70"></div>
        <div className="relative z-10 text-center">
          <h2 className="text-[35px] md:text-[45px] font-bold text-white font-calibri italic">
            Have a project in mind?
          </h2>
          <h3 className="text-white text-[20px] md:text-[30px] font-calibri italic">
            Let's Talk To Us
          </h3>
        </div>
        <div className="relative z-10">
        <Image
  src="https://demo.bravisthemes.com/orritech/wp-content/uploads/2024/06/man-us.png"
  alt="Consultation meeting"
  width={400}    // approximate width, adjust as needed
  height={400}   // approximate height, adjust as needed
  className="slow-bounce-two w-full max-w-xs mt-10"
/>
        </div>
        <div className="relative z-10">
          <button className="bg-white text-[#7D963D] py-2 px-4 md:text-[12px] transition-all duration-500 ease-out relative overflow-hidden group hover:text-white hidden md:block border-2 border-[#7D963D]">
            <span className="relative z-10 font-gabriola text-[20px]">MORE ABOUT US</span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#7D963D] to-[#cdf171] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
          </button>
        </div>
      </div>
    </>
  );
}
