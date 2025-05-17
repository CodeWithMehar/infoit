"use client";
import React from "react";
import logo from "../../img/logo2.webp";
import { FaEarthAfrica } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { AiOutlineInstagram } from "react-icons/ai";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { PiWhatsappLogo } from "react-icons/pi";
import Image from 'next/image';
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <div className="flex justify-center items-center w-full pt-12">
      <Image src={logo} alt="Company Logo" width={100} height={100} />
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center w-full pt-12 pb-5 space-y-12 md:space-y-0 md:space-x-32">
        {/* Address Column */}
        <div className="flex flex-col justify-center items-center text-center">
          <FaEarthAfrica className="text-[35px] text-[#7d963d]" />
          <h1 className="text-[20px] font-semibold mt-5 text-[#7d963d] font-calibri italic">
            Jodhpur, India
          </h1>
          <p className="text-[16px] text-gray-600 font-calibri italic">Our Address</p>
        </div>

        {/* Mail Column */}
        <div className="flex flex-col justify-center items-center text-center">
          <FaEnvelope className="text-[35px] text-[#7d963d]" />
          <h1 className="text-[20px] font-semibold mt-5">
            <a
              href="mailto:jincwilliam@gmail.com"
              className="text-[#7d963d] hover:underline font-calibri italic"
            >
              jincwilliam@gmail.com
            </a>
          </h1>
          <p className="text-[16px] text-gray-600 font-calibri italic">Our Mailbox</p>
        </div>

        {/* Phone Column */}
        <div className="flex flex-col justify-center items-center text-center">
          <FaPhoneAlt className="text-[35px] text-[#7d963d]" />
          <h1 className="text-[20px] font-semibold mt-5">
            <a
              href="tel:+919079373380"
              className="text-[#7d963d] hover:underline"
            >
              +91 90793 73380
            </a>
          </h1>
          <p className="text-[16px] text-gray-600 font-calibri italic">Our Phone</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-700 font-calibri italic">
        <p>Copyright © 2024 Engitech by OceanThemes. All Rights Reserved.</p>
      </div>

      {/* Social Media Icons */}
      <div className="flex flex-col md:flex-row justify-center items-center w-full pt-5 space-y-12 md:space-y-0 md:space-x-8">
        <ul className="flex space-x-5 uppercase text-[25px] font-semibold">
          <li className="hover:text-[#7d963d] transition-transform duration-300 hover:scale-125">
            <a
              href="https://www.facebook.com/william.wilson.5494360?mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CiFacebook />
            </a>
          </li>
          <li className="hover:text-[#7d963d] transition-transform duration-300 hover:scale-125">
            <a
              href="https://www.instagram.com/williamsamuelprince/?igsh=NTc4MTIwNjQ2YQ%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineInstagram />
            </a>
          </li>
          <li className="hover:text-[#7d963d] transition-transform duration-300 hover:scale-125">
            <a
              href="https://x.com/i/flow/login?redirect_after_login=%2Ftechy_william"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TiSocialTwitterCircular />
            </a>
          </li>
          <li className="hover:text-[#7d963d] transition-transform duration-300 hover:scale-125">
            <a
              href="https://wa.me/+918829007143"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PiWhatsappLogo />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
