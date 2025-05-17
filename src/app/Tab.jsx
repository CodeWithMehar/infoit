import React, { useState } from "react";
import Image from "next/image";
const tabsData = [
  {
    id: 1,
    title: "Digital Marketing",
    content: {
      imgSrc:
        "https://shtheme.com/demosd/elearn/wp-content/uploads/2023/05/social-marketing.jpg",
      text: (
        <>
          <p>Content for Social Media Post Marketing:</p>
          <ul className="list-disc ml-5">
            <li>Social Media Post Marketing</li>
            <li>Promote Your Profile</li>
            <li>Search Engine Optimization</li>
            <li>Blog Marketing Strategies</li>
            <li>Email Marketing</li>
            <li>Facebook Ads</li>
            <li>Instagram Ads</li>
            <li>Google Ads</li>
            <li>YouTube Ads</li>
          </ul>
        </>
      ),
    },
  },
  {
    id: 2,
    title: "Video Editing",
    content: {
      imgSrc:
        "https://cdn.pixabay.com/photo/2017/09/02/15/38/image-editing-2707653_1280.jpg",
      text: (
        <>
          <p>Content for Video Editing:</p>
          <ul className="list-disc ml-5">
            <li>Editing Cuts</li>
            <li>Sound Mixing</li>
            <li>Advanced Masking</li>
            <li>Color Grading</li>
            <li>Motion Graphics</li>
            <li>Transition & Effects</li>
          </ul>
        </>
      ),
    },
  },
  {
    id: 3,
    title: "Graphic Designing",
    content: {
      imgSrc:
        "https://shtheme.com/demosd/elearn/wp-content/uploads/2023/05/graphic-design.jpg",
      text: (
        <>
          <p>Content for Graphic Designing:</p>
          <ul className="list-disc ml-5">
            <li>Canva</li>
            <li>Adobe Photoshop</li>
            <li>Adobe Illustrator</li>
            <li>Figma</li>
            <li>Procreate</li>
            <li>Sketch</li>
            <li>Creative Cloud</li>
            <li>Adobe InDesign</li>
          </ul>
        </>
      ),
    },
  },
];

const TabsComponent = () => {
  const [activeTab, setActiveTab] = useState(tabsData[0].id);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const activeContent = tabsData.find((tab) => tab.id === activeTab)?.content;

  return (
    <>
    <div className="px-4 md:px-20 lg:px-32">
  <div className="pl-0 md:pl-0">
    <h1 className="font-calibri italic text-2xl md:text-[35px] font-bold border-l-8 border-[#7d963d] leading-[50px] uppercase">
      Available <br />
      <span className="text-4xl md:text-[70px] text-gray-700">Courses</span>
    </h1>
    <p className="text-gray-500 mt-5 font-calibri italic">
      Explore a comprehensive selection of courses designed to enhance
      your skills and knowledge across various domains. From digital
      marketing strategies to creative design tools these courses provide
      practical insights and tools for success in today competitive
      landscape.
    </p>
  </div>

  <div className="flex flex-col md:flex-row justify-evenly mt-10">
    {/* Tabs Section */}
    <div className="w-full md:w-[25%] border-b md:border-r md:border-b-0">
      <ul className="flex flex-col">
        {tabsData.map((tab) => (
          <li
            key={tab.id}
            className={`font-calibri italic p-4 cursor-pointer hover:bg-[#7d963d] hover:text-white border-b md:border-b-0 md:border-r md:last:border-b-0 ${activeTab === tab.id ? "bg-[#e6fab2] font-bold" : ""}`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.title}
          </li>
        ))}
      </ul>
    </div>

    {/* Content Section */}
    <div className="w-full md:w-[75%] p-5 flex justify-center md:justify-evenly">
      {activeContent && (
        <div className="flex flex-col md:flex-row justify-evenly items-center">
          {/* <img
            src={activeContent.imgSrc}
            alt="Tab Content"
            className="w-full max-w-[300px] mb-4 md:mb-0 md:mr-16 border"
          /> */}
            <Image
    src={activeContent.imgSrc}
    alt="Tab Content"
    width={300}  // max-w-[300px] ke hisaab se
    height={200} // approximate height, adjust karo apni image ke hisaab se
    className="w-full"
  />
          <div className="text-gray-700 text-center md:text-left font-calibri">{activeContent.text}</div>
        </div>
      )}
    </div>
  </div>

  <div className="mx-auto flex flex-col justify-center items-center text-center space-y-4 mt-10">
    <h1 className="text-3xl md:text-[40px] font-bold border-b-4 border-[#7d963d] font-calibri italic">
      WANTs TO ENROLL
    </h1>
    <ul className="list-none space-y-2">
      <li className="flex items-center space-x-2 text-[18px] md:text-[20px]">
        <span className="font-semibold italic">Phone:</span>
        <a href="tel:+919079373380" className="text-[#7d963d] hover:underline">
          +91 90793 73380
        </a>
      </li>
      <li className="flex items-center space-x-2 text-[18px] md:text-[20px]">
        <span className="font-semibold italic">Email:</span>
        <a href="mailto:example@gmail.com" className="text-[#7d963d] hover:underline">
          example@gmail.com
        </a>
      </li>
    </ul>
  </div>
</div>

    </>
  );
};

export default TabsComponent;
