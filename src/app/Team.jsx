"use client";
import { motion } from "framer-motion";
import React from "react";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { SlSocialTwitter } from "react-icons/sl";
import anim from "../img/anim1.png";
import anim1 from "../img/anim2.png";

export default function TeamSection() {
  const teamMembers = [
    {
      name: "SAWAI SISODIYA",
      designation: "Full Stack Developer",
      img: "https://infoitexpert.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-07-at-11.32.51_27be1ae3.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "ARTI",
      designation: "Full Stack Developer",
      img: "https://infoitexpert.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-07-at-13.22.26_c7610f3c.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "MEHAR HAFIZA",
      designation: "Full Stack Developer",
      img: "https://infoitexpert.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-07-at-13.27.59_b17ed68c.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "AYUB KHAN",
      designation: "MERN Stack Developer",
      img: "https://infoitexpert.com/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-13.27.52_b613063f.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "David Johnson",
      designation: "UI/UX Designer",
      img: "https://infoitexpert.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-07-at-13.22.26_c7610f3c.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
  ];

  return (
    <div className="bg-white py-0 relative overflow-x-hidden">
      {/* Animated Image - 1 */}
      <img
        src={anim.src}
        alt="Animated graphic 1"
        className="w-48 h-48 absolute top-[13%] left-[5%] slow-bounce max-w-full"
      />

      {/* Section Title */}
      <div className="flex items-center justify-center space-x-2">
        <img
          src="https://img.icons8.com/?size=160&id=UPyS5SRZwyVR&format=png"
          alt="Icon"
          className="w-5 h-5"
        />
        <h3 className="text-[#7d963d] font-bold text-xl uppercase font-gabriola">
          OUR TEAM MEMBER
        </h3>
        <img
          src="https://img.icons8.com/?size=160&id=UPyS5SRZwyVR&format=png"
          alt="Icon"
          className="w-5 h-5"
        />
      </div>

      {/* Heading */}
      <h1 className="text-center text-4xl font-normal leading-[50px] mt-2 font-calibri italic">
        See Our <br />
        <span className="font-bold">Skilled Expert Team</span>
      </h1>

      {/* Team Members Section */}
      <div className="relative mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 sm:px-5 md:px-5 lg:px-28 z-[999999]">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="relative bg-white rounded-xl overflow-hidden shadow-lg group transition duration-500 ease-in-out"
              whileHover={{ scale: 1.05 }} // Zoom effect on hover
              initial={{ opacity: 0, y: 50 }} // Initial state
              animate={{ opacity: 1, y: 0 }} // Final state
              transition={{ duration: 0.5, delay: index * 0.2 }} // Delayed animation
            >
              {/* Team Member Image with overlay */}
              <div className="relative w-full h-64 overflow-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out flex flex-col justify-center items-center">
                  <div className="text-white text-center">
                    <h3 className="text-xl font-bold mb-2 font-cambria">{member.name}</h3>
                    <p className="text-xl font-calibri">{member.designation}</p>
                  </div>
                </div>
              </div>

              {/* Team Member Details with gradient effect */}
              <div className="p-6 group-hover:bg-gradient-to-t from-[#cbdf97] to-[#658b05] transition-all duration-500 ease-in-out">
                <div className="space-x-4 flex mt-4 justify-center">
                  <a
                    href={member.social.facebook}
                    className="text-white text-xl hover:rotate-[720deg] transition duration-300"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <CiFacebook className="text-[30px]" />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="text-white text-xl hover:rotate-[720deg] transition duration-300"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <SlSocialTwitter className="text-[30px]" />
                  </a>
                  <a
                    href={member.social.linkedin}
                    className="text-white text-xl hover:rotate-[720deg] transition duration-300"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <CiLinkedin className="text-[30px]" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated Image - 2 */}
        <img
          src={anim1.src}
          alt="Animated graphic 2"
          className="w-48 h-48 absolute top-[70%] left-[70%] transform -translate-x-1/2 slow-bounce max-w-full"
        />
      </div>
    </div>
  );
}
