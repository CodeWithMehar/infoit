"use client";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";


export default function SocialIcons() {


  return (
    <>
      <div className="fixed right-4 flex flex-col space-y-10 z-50 bottom-64">
        <a
          href="https://www.facebook.com/william.wilson.5494360?mibextid=ZbWKwL"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <div className="w-[30px] h-[30px] bg-white flex items-center justify-center rounded-[5px] transition-all duration-500 transform hover:w-[50px] hover:bg-[#7d963d] hover:p-2">
            <FaFacebookF className="text-[25px] text-black transition-all duration-500 transform hover:scale-125 hover:text-white hover:animate-rotate360" />
          </div>
        </a>
      </div>

      <div className="fixed right-4 flex flex-col space-y-10 z-50 bottom-16">
        <a
          href="https://wa.me/+918829007143"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <div className="w-[30px] h-[30px] bg-white flex items-center justify-center rounded-[5px] transition-all duration-500 transform hover:w-[50px] hover:bg-[#7d963d]">
            <FaWhatsapp className="text-[25px] text-black transition-all duration-500 transform hover:scale-125 hover:text-white hover:animate-rotate360" />
          </div>
        </a>
      </div>
      <div className="fixed right-4 flex flex-col space-y-10 z-50 bottom-28">
        <a
          href="https://www.linkedin.com/in/william-samuel-2a9a21295/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <div className="w-[30px] h-[30px] bg-white flex items-center justify-center rounded-[5px] transition-all duration-500 transform hover:w-[50px] hover:bg-[#7d963d]">
          <FaLinkedinIn className="text-[25px] text-black transition-all duration-500 transform hover:scale-125 hover:text-white hover:animate-rotate360" />
          </div>
        </a>
      </div>
      <div className="fixed right-4 flex flex-col space-y-10 z-50 bottom-40">
        <a
          href="https://www.instagram.com/williamsamuelprince/?igsh=NTc4MTIwNjQ2YQ%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <div className="w-[30px] h-[30px] bg-white flex items-center justify-center rounded-[5px] transition-all duration-500 transform hover:w-[50px] hover:bg-[#7d963d]">
          <FaInstagram className="text-[25px] text-black transition-all duration-500 transform hover:scale-125 hover:text-white hover:animate-rotate360" />
          </div>
        </a>
      </div>
      <div className="fixed right-4 flex flex-col space-y-10 z-50 bottom-52">
        <a
          href="https://x.com/i/flow/login?redirect_after_login=%2Ftechy_william"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <div className="w-[30px] h-[30px] bg-white flex items-center justify-center rounded-[5px] transition-all duration-500 transform hover:w-[50px] hover:bg-[#7d963d]">
          <FaTwitter className="text-[25px] text-black transition-all duration-500 transform hover:scale-125 hover:text-white hover:animate-rotate360" />
          </div>
        </a>
      </div>
   
    </>
  );
}
