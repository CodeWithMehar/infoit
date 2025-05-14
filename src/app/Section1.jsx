"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import bluebg from "../img/bg.jpg";
import bg2 from "../img/bg2.jpg";
import bg3 from "../img/bg3.jpg";
import bg5 from "../img/bg5.webp";

import { TiTick } from "react-icons/ti";

export default function Slider1() {
  const [currentSlide, setCurrentSlide] = useState(0); // State to track the current active slide

  const settings = {
    dots: false,
    fade: true, // Enable fade effect
    infinite: true,
    speed: 500, // Adjust speed if necessary
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Change autoplay delay for smoother transitions
    pauseOnHover: true,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex); // Update current slide index
    },
  };

  return (
<>
<div className="slider-container overflow-x-hidden relative">
      <Slider {...settings}>
        {/* Slider 1 */}
        <Slide
          bgImage={bg3.src}
          title="Digital Marketing Agency"
          description="Partner with a leading digital marketing agency to increase brand awareness, reach your "
          currentSlide={currentSlide === 0}
        />
        {/* Slider 2 */}
        <Slide
          bgImage={bluebg.src}
          title="Search Engine Optimization"
          description="We implement a comprehensive, ongoing strategy that includes both on-site and off-site efforts to ."
          currentSlide={currentSlide === 1}
        />
        {/* Slider 3 */}
        <Slide
          bgImage={bg2.src}
          title="Graphic Designing Solutions"
          description="Offering creative graphic design solutions that bring your ideas to life. Expertly crafted ."
          currentSlide={currentSlide === 2}
        />
        {/* Slider 4 */}
        <Slide
          bgImage={bg5.src}
          title="Video Editing Premium"
          description="Our video editing service delivers professional-quality edits that enhance your content's ."
          currentSlide={currentSlide === 3}
        />
        {/* Slider 5 */}
        <Slide
          bgImage={bg5.src}
          title="WordPress Website Customization"
          description="Our WordPress website service offers custom, responsive designs tailored to your business needs."
          currentSlide={currentSlide === 4}
        />
      </Slider>
  

      {/* CSS for slide-in animation */}
      <style jsx>{`
        .slide-in {
          animation: slideIn 1s ease-out;
        }

        @keyframes slideIn {
          from {
            transform: translateX(-50%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
   
</>
  );
}

// Slide Component
function Slide({ bgImage, title, description, currentSlide }) {
  return (
  <>
    <div className="w-full grid">
      <div className="flex flex-col justify-center">
        <div
          className="relative bg-cover h-[100vh] text-left flex items-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div
            className={`relative z-10 text-white pl-6 md:pl-12 lg:pl-[100px] pt-20 ${
              currentSlide ? "slide-in" : ""
            }`}
          >
            <h1 className="text-[45px] md:text-5xl lg:text-[70px] font-bold leading-[40px] lg:leading-[60px] md:leading-[70px] font-calibri italic mt-12">
              <span className="text-[#e9ffaf]">{title.split(" ")[0]}</span>
              <br />
              {title.split(" ").slice(1).join(" ")}
            </h1>
            <p className="my-4 text-[20px] md:text-[30px] font-gabriola">{description}</p>
            <ul>
              {["Optimize Targeted Audiences", "With our software and technology solutions.", "We are trusted all over the world", "Generate Qualified Leads"].map((item) => (
                <li key={item} className="text-white flex space-x-1 items-center">
                  <TiTick className="text-[40px] text-[#7d963d]" />
                  <p className="text-[20px] font-bold font-calibri italic">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  
  </>
  );
}
