"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
export default function Section2() {
  const serviceBoxes = [
    {
      title: "Web Development",
      img: "https://cdn.pixabay.com/photo/2024/01/10/16/22/team-8499960_1280.jpg",
      icon: "https://cdn-icons-gif.flaticon.com/14447/14447749.gif",
      description: "Web development is the work involved in ....",
      detailedDescription: "Web development involves the creation of websites and applications...",
      link: "/coding-website",
    },
    {
      title: "WordPress Development",
      img: "https://cdn.pixabay.com/photo/2017/01/14/10/56/people-1979261_1280.jpg",
      icon: "https://cdn-icons-gif.flaticon.com/17569/17569440.gif",
      description: "WordPress Development is the work involved in ....",
      detailedDescription:
        "WordPress development focuses on creating websites using the WordPress...",
        link:'/wordpress' 
    },
    {
      title: "SEO Services",
      img: "https://cdn.pixabay.com/photo/2019/09/25/09/36/team-4503157_1280.jpg",
      icon: "https://cdn-icons-gif.flaticon.com/15353/15353536.gif",
      description: "SEO Service is the work which involved in ....",
      detailedDescription:
        "SEO services improve the online visibility of a website by optimizing...",
        link:'/seo' 
    },
    {
      title: "Graphic Designing",
      img: "https://cdn.pixabay.com/photo/2024/01/10/16/22/team-8499960_1280.jpg",
      icon: "https://cdn-icons-gif.flaticon.com/15353/15353536.gif",
      description: "Graphic Designing is the work which involved in ....",
      detailedDescription:
        "SEO services improve the online visibility of a website by optimizing...",
        link:'/graphic' 
    },
    {
      title: "Video Editing",
      img: "https://cdn.pixabay.com/photo/2017/01/14/10/56/people-1979261_1280.jpg",
      icon: "https://cdn-icons-gif.flaticon.com/18128/18128662.gif",
      description: "Video Editing is the work which involved in ....",
      detailedDescription:
        "SEO services improve the online visibility of a website by optimizing...",
        link:'/video' 
    },
    {
      title: "Digital Marketing",
      img: "https://cdn.pixabay.com/photo/2019/09/25/09/36/team-4503157_1280.jpg",
      icon: "https://cdn-icons-gif.flaticon.com/17675/17675700.gif",
      description:
        "Digital Marketing Service is the work which involved in ....",
      detailedDescription:
        "SEO services improve the online visibility of a website by optimizing...",
        link:'/marketing' 
    },
    // Other service boxes
  ];

  const [isVisible, setIsVisible] = useState(false);
  const servicesRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (servicesRef.current) {
        const rect = servicesRef.current.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
        setIsVisible(isInViewport);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full bg-white pt-20" ref={servicesRef}>
      <div className="flex items-center justify-center space-x-2 mb-1">
        {/* <img
          src="https://img.icons8.com/?size=160&id=UPyS5SRZwyVR&format=png"
          alt=""
          className="w-5 h-5"
        /> */}
        <Image
  src="https://img.icons8.com/?size=160&id=UPyS5SRZwyVR&format=png"
  alt=""
  width={20}   // w-5 = 1.25rem ≈ 20px
  height={20}  // h-5 = 1.25rem ≈ 20px
  className="inline-block"
/>
        <h3 className="text-[#7d963d] font-bold text-lg uppercase font-gabriola">
          Our Feathered Services
        </h3>
        {/* <img
          src="https://img.icons8.com/?size=160&id=UPyS5SRZwyVR&format=png"
          alt=""
          className="w-5 h-5"
        /> */}
        <Image
  src="https://img.icons8.com/?size=160&id=UPyS5SRZwyVR&format=png"
  alt=""
  width={20}  // w-5 approx 20px
  height={20} // h-5 approx 20px
  className="inline-block"
/>
      </div>
      <h1 className="text-center text-5xl font-normal leading-tight font-calibri italic ">
        We Provide Exclusive Service For <br />
        <span className="font-bold">Your Business</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto my-20">
        {serviceBoxes.map((service, index) => (
          <motion.div
            key={index}
            className="w-full rounded-lg bg-white h-auto overflow-hidden relative group shadow-lg"
            initial={{ x: -100, opacity: 0 }}
            animate={isVisible ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* <img
              src={service.img}
              alt={service.title}
              className="w-full hover:scale-105 transition-transform duration-1000 grayscale hover:grayscale-0 cursor-pointer"
            /> */}
            <Image
  src={service.img}
  alt={service.title}
  width={500} // apni required width set karo, ya image size ke mutabiq
  height={300} // apni required height set karo
  className="w-full hover:scale-105 transition-transform duration-1000 grayscale hover:grayscale-0 cursor-pointer"
  style={{ objectFit: 'cover' }}
/>
            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#7D963D] to-[#cdf171] flex items-center justify-center absolute top-1/2 left-5 transform -translate-y-1/2">
              {/* <img
                src={service.icon}
                alt={`${service.title} icon`}
                className="w-8 h-8 transition-transform duration-700 ease-in-out group-hover:rotate-180"
              /> */}
              <Image
  src={service.icon}
  alt={`${service.title} icon`}
  width={32}      // w-8 = 2rem = 32px
  height={32}
  className="transition-transform duration-700 ease-in-out group-hover:rotate-180"
/>
            </div>

            <div className="py-3 px-5 mt-5 group-hover:bg-[#7D963D] group-hover:text-white transition-all duration-500 ">
              <h1 className="font-bold text-2xl font-calibri italic mt-3">
                {service.title}
              </h1>
              <p className="mt-0 font-gabriola text-xl">
                {service.description}
              </p>

              {/* Read More button to navigate to service link */}
              <Link href={service.link}>
                <button
                  className="relative overflow-hidden group bg-white text-[#7D963D] py-1 px-2 my-3 md:text-sm transition-all duration-500 ease-out border-2 border-[#7D963D]"
                >
                  <span className="relative z-10 group-hover:text-white group-hover:border-white font-cambria">
                    READ MORE
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-[#7D963D] to-[#cdf171] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
