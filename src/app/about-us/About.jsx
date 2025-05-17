"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Counter from "../Counter";
import { PiArrowBendUpRightLight } from "react-icons/pi";
import { TbSlashes } from "react-icons/tb";
import Image from 'next/image';
// import ProgressBar from "@ramonak/react-progress-bar";
import ProgressBar from "../ProgressBar";
// Dynamically import the icon component to avoid hydration issues
const IoIosSettings = dynamic(
  () => import("react-icons/io").then((mod) => mod.IoIosSettings),
  { ssr: false }
);

export default function About() {
  const [isClient, setIsClient] = useState(false);

  // Set a flag to indicate when the component has mounted on the client
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <div className="w-full flex flex-col md:flex-row">
        {/* Left Side */}
        <div className="md:pl-20 w-full md:w-1/2 px-5">
          <div className="w-[200px] h-[40px] bg-[#e2f3b5] rounded-3xl flex items-center justify-center">
            <IoIosSettings
              className="text-[25px] text-[#6c8332]"
              style={{ animation: "spin 2s linear infinite" }}
            />
            <p className="text-[#6c8332] ml-2 font-semibold uppercase font-gabriola text-xl">
              About Company
            </p>
          </div>
          <h2 className=" text-[32px] md:text-[50px] font-bold leading-[40px] md:leading-[50px] mt-5 font-calibri italic">
            Bringing innovation <br /> & new ideas in IT
          </h2>
        </div>
        {/* Right Side */}
        <div className="md:pr-20 w-full md:w-1/2 px-5">
          <p className="text-gray-600 text-sm md:text-xl font-gabriola">
            Orritech offers a full range of technology & training methods for
            data analysis, business consultation, and strategic ways for
            business. It's an opportunity for new ventures.
            <br /> <br />
            Orritech provides a complete suite of consultancy and training
            methods tailored for business success.
          </p>
        </div>
      </div>

      <div className="w-full my-10">
     <Image
  src="https://demo.bravisthemes.com/orritech/wp-content/uploads/2024/06/img1-us.webp"
  alt="A modern office setting"
  width={1920}      // asli width daal do, example ke liye
  height={1080}     // asli height daal do, example ke liye
  className="w-full h-auto"
/>
      </div>

      <Counter />

      <div className="w-full flex flex-col md:flex-row mt-20">
        <div className="flex w-full md:w-1/2 pl-10 space-x-5 px-5">
       <Image
  src="https://demo.bravisthemes.com/orritech/wp-content/uploads/2024/06/img-ss3-us.jpg"
  alt="Team collaboration"
  width={130}     // small screen width (jitna tumne CSS me diya)
  height={150}    // small screen height
  className="slow-bounce mt-16 object-cover md:w-[250px] md:h-[300px]"
/>

<Image
  src="https://demo.bravisthemes.com/orritech/wp-content/uploads/2024/06/img-ss3-us1.jpg"
  alt="Business meeting"
  width={130}
  height={150}
  className="slow-bounce object-cover md:w-[250px] md:h-[250px]"
/>
        </div>

        <div className="w-full md:w-1/2 px-5">
          <div className="pr-5">
            <div className="w-[200px] h-[40px] bg-[#e2f3b5] rounded-3xl flex items-center justify-center mt-5">
              <IoIosSettings
                className="text-[25px] text-[#6c8332]"
                style={{ animation: "spin 2s linear infinite" }}
              />
              <p className="text-[#6c8332] ml-2 font-semibold uppercase font-gabriola text-xl">
                About Company
              </p>
            </div>
            <h2 className="text-[32px] md:text-[50px] font-bold leading-[40px] md:leading-[50px] my-5 font-calibri italic">
              Modern Idea Driven <br /> Technology Firm
            </h2>
            <p className="text-[18px] md:text-[30px] text-gray-700 font-gabriola">
              We are Orritech, a promising IT Company serving for over a decade
              with our tremendous skill in the software development industry.
            </p>
            <ul className="flex flex-col md:flex-row justify-between mt-5 font-gabriola text-[30px]">
              <li className="flex items-center gap-2 md:gap-5 mb-2 md:mb-0">
                <PiArrowBendUpRightLight className="text-[#7d963d] text-[40px] font-bold" />
                Market Research
              </li>
              <li className="flex items-center gap-2 md:gap-5 mb-2 md:mb-0">
                <PiArrowBendUpRightLight className="text-[#7d963d] text-[40px] font-bold" />
                Competitive Analysis
              </li>
            </ul>
            <ul className="flex flex-col md:flex-row justify-between font-gabriola text-[30px]">
              <li className="flex items-center gap-2 md:gap-5 mb-2 md:mb-0">
                <PiArrowBendUpRightLight className="text-[#7d963d] text-[25px] font-bold" />
                Investment Decision
              </li>
              <li className="flex items-center gap-2 md:gap-5 mb-2 md:mb-0">
                <PiArrowBendUpRightLight className="text-[#7d963d] text-[25px] font-bold" />
                Reporting & Analysis
              </li>
            </ul>
            <button className="mt-10 bg-white text-[#7D963D] py-2 px-4 md:text-[12px] transition-all duration-500 ease-out relative overflow-hidden group hover:text-white hidden md:block border-2 border-[#7D963D]">
              <span className="relative z-10 font-gabriola text-[20px]">Let's Work Together</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#7D963D] to-[#cdf171] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
            </button>
          </div>
        </div>
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
  width={320}        // max-w-xs approx 320px
  height={300}      // height ko manually set karna padega, ya aspect ratio se calculate karna hoga
  className="slow-bounce-two mt-10"
/>
        </div>
        <div className="relative z-10">
          <button className="bg-white text-[#7D963D] py-2 px-4 md:text-[12px] transition-all duration-500 ease-out relative overflow-hidden group hover:text-white hidden md:block border-2 border-[#7D963D]">
            <span className="relative z-10 font-gabriola text-[20px]">MORE ABOUT US</span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#7D963D] to-[#cdf171] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
          </button>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row justify-around items-center py-20">
      <div className="w-full md:w-1/2 pl-5 md:pl-16 px-5">
        <h2 className="font-gabriola text-[#7d963d] font-bold uppercase flex items-center gap-2 text-[16px] md:text-[20px]">
          <TbSlashes />
          Technology Index
        </h2>
        <h2 className="text-[30px] md:text-[50px] font-bold leading-[35px] md:leading-[55px] font-calibri italic">
          Improve and Innovate <br /> with the Tech Trends
        </h2>
        <p className="text-gray-700 py-5 capitalize text-sm md:text-xl text-justify font-gabriola">
          We hire and build your own remote dedicated development teams tailored to your specific needs.
        </p>
        {/* Render ProgressBar only on the client */}
        {isClient && <ProgressBar completed={95} label="Web Development" className="mt-20 font-calibri italic"/>}<hr/>
        {isClient && <ProgressBar completed={99} label="App Development" className="mt-20 font-calibri italic"/>}<hr/>
        {isClient && <ProgressBar completed={90} label="Digital Marketing" className="mt-20 font-calibri italic"/>}<hr/>
        {isClient && <ProgressBar completed={98} label="Graphic Designing" className="mt-20 font-calibri italic"/>}<hr/>
        {isClient && <ProgressBar completed={96} label="Video Editing" className="mt-20 font-calibri italic"/>}<hr/>
      </div>
      {/* Right Side */}
      <div className="w-full md:w-[35%] px-5">
      
<Image
  src="https://wpdemo.archiwp.com/engitech/wp-content/uploads/sites/4/2020/02/image2-about.png"
  alt="Innovative technology"
  width={1200}  // approx width for full width (adjust karo asli image size ke hisaab se)
  height={800}  // approximate height (adjust karo asli image size ke hisaab se)
  className="slow-bounce-tw mt-20 object-contain"
/>
      </div>
    </div>
    </>
  );
}
