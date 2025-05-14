"use client";
import React, { useState, useEffect } from "react";
// import logo from "../../img/logo.png";
import logo2 from "../../img/logo2.png";
import { FaTimes } from "react-icons/fa";
import Image from "next/image";
import { BiMenuAltRight } from "react-icons/bi";
import Link from "next/link";
import { BiDownArrowAlt } from "react-icons/bi";
import menu from "../../img/menu.gif";
import star from "../../img/star2.png";
import logo from "../../img/logo.png";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [bgColor, setBgColor] = useState("bg-transparent");
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowHeader(false); // Hide header on scroll down
      } else {
        setShowHeader(true); // Show header on scroll up
      }

      setLastScrollY(currentScrollY);
      setBgColor(currentScrollY > 100 ? "bg-[#617722]" : "bg-transparent");
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  // Function to close the menu
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className={`relative ${showHeader ? "block" : "hidden"}`}>
        {/* Navbar */}
        <div
          className={`flex justify-between items-center fixed top-0 left-0 w-full ${bgColor} transition-colors duration-300 text-white pb-1 z-40`}
        >
          <div className="px-4 md:px-10 relative">
            {/* <Image
              src={logo}
              alt="Company Logo"
              className="w-[100px] h-[100px] mt-5"
            /> */}
               <img
              src={star.src}
              className="left-[60%]  h-[200px] w-[200px] slow-spin"
              alt="Spinning Shape"
            />
            <img
              src={logo.src}
              className="w-[50px] h-[50px] absolute left-[42%] bottom-[38%]"
            />
          </div>
          {/* Logo */}
          <div className="flex space-x-7 px-4 md:px-16 items-center justify-center">
            <button className="bg-white text-[#7D963D] py-2 px-4 md:text-[12px] transition-all duration-500 ease-out relative overflow-hidden group hover:text-white hidden md:block border-2 border-[#7D963D]">
              <span className="relative z-10 font-calibri font-bold">
                CALL NOW
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#7D963D] to-[#cdf171] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
            </button>

            <div className="flex">
              <button
                onClick={() => setIsOpen(true)}
                className="text-white text-2xl"
              >
                {/* Menu bar icon */}
                {/* <BiMenuAltRight className="text-[40px] text-white" /> */}
                <img src={menu.src} alt=""   onClick={() => setIsOpen(true)} className="w-[40px] h-[35px] transform rotate-180"/>
              </button>
              {/* <h1
                className="text-[23px] cursor-pointer text-white font-calibri italic font-extrabold"
                onClick={() => setIsOpen(true)}
              >
                MENU
              </h1> */}
            </div>
          </div>
        </div>

        {/* Slideable Menu */}
        <div
          className={`fixed top-0 right-0 w-full h-full bg-gradient-radial from-[#e7ffac] via-[#dce6c4] to-[#e5ffa3] transform transition-transform duration-[2000ms] ease-in-out z-50 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col md:flex-row h-[100vh]">
            <div className="w-full md:w-[50%] flex justify-center items-center p-8">
              <Image
                src={logo2}
                alt="Company Logo 2"
                className="w-[100px] h-[100px]"
              />
            </div>
            <div className="w-full md:w-[50%] bg-white p-4 md:p-8 relative h-[100vh] overflow-y-scroll">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-5 text-2xl"
              >
                <FaTimes className="text-[40px] font-light text-[#7D963D]" />
              </button>
              <ul className="text-[#070704] font-semibold text-[18px] md:text-[23px] space-y-3 md:px-[40px] mt-8 font-calibri italic">
                {/* Other menu items */}
                <li>
                  <Link href="/" onClick={handleLinkClick}>
                    HOME
                  </Link>
                  <hr />
                </li>
                <li>
                  <Link href="/about-us" onClick={handleLinkClick}>
                    ABOUT US
                  </Link>
                  <hr />
                </li>
                <li>
                  <Link href="/contact-us" onClick={handleLinkClick}>
                    CONTACT US
                  </Link>
                  <hr />
                </li>

                {/* Our Services with Dropdown */}
                <li
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                  className="relative cursor-pointer py-[13px] hover:text-[#bae05a]"
                >
                  <span className="flex items-center space-x-5 gap-3">
                    OUR SERVICES
                    <BiDownArrowAlt className="text-[35px]" />
                  </span>
                  {isDropdownOpen && (
                    <div className="absolute left-0 top-full mt-0 w-64 bg-white shadow-lg rounded-md py-2 text-black">
                      {[
                        { name: "WordPress Website", href: "/wordpress" },
                        { name: "Coding Website", href: "/coding-website" },
                        { name: "Digital Marketing", href: "/marketing" },
                        { name: "Video Editing", href: "/video" },
                        { name: "Graphic Designing", href: "/graphic" },
                        { name: "SEO", href: "/seo" },
                      ].map((service, index) => (
                        <Link
                          key={index}
                          href={service.href}
                          className="block px-4 py-1 hover:bg-[#bae05a] hover:text-white"
                          onClick={handleLinkClick} // Close menu on link click
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                  <hr />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
