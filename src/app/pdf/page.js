"use client";
import Link from "next/link";
import React from "react";
import Image from 'next/image';
const PdfPage = () => {
  const pdfData = [
    {
      url: "/web.pdf",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZFButsEhdnc-8hCmUAvauV2UMkiJpS3lKFA&s",
      name: "Full Stack Web Development",
    },
    {
      url: "/mern.pdf",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXmKnANYx36UPXzpq6RVGBcSBZGPey0YBjFg&s",
      name: "MERN Stack Development",
    },
    {
      url: "/Dm.pdf",
      image:
        "https://images.pexels.com/photos/6476808/pexels-photo-6476808.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Digital Marketing",
    },
    {
      url: "/fluter.pdf",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSroYErxX-8S7s-5qV0rjBtq1CAVQhoiXUjbQ&s",
      name: "Fluter App",
    },
    {
      url: "/app.pdf",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSroYErxX-8S7s-5qV0rjBtq1CAVQhoiXUjbQ&s",
      name: "Android App",
    },
  ];

  const handleDownload = (url, name) => {
    try {
      const link = document.createElement("a");
      link.href = url;
      link.download = name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Download failed", error);
    }
  };

  return (
    <>
      <div className="w-full h-screen bg-[url('https://cdn.pixabay.com/photo/2018/08/31/18/21/fantasy-3645269_1280.jpg')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center space-y-5">
          <h1 className="text-4xl md:text-5xl text-white font-bold">DOWNLOAD PDF</h1>
          <Link href="/">
            <button className="text-white underline">GO BACK</button>
          </Link>
        </div>
      </div>

      <div className="w-full mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {pdfData.map((pdf, index) => (
          <div
            key={index}
            className="p-4 border border-gray-300 rounded-lg shadow-lg text-center flex flex-col items-center"
          >
          <Image
  src={pdf.image}
  alt={`${pdf.name} preview`}
  width={144}   // 36 * 4 (Tailwind's 1rem = 4px, 36 * 4 = 144px)
  height={144}
  className="object-fill rounded-lg mb-4"
/>
            <h2 className="text-base md:text-lg font-semibold mb-2">{pdf.name}</h2>
            <button
              onClick={() => handleDownload(pdf.url, pdf.name)}
              className="px-4 py-2 bg-[#7d963d] text-white font-semibold rounded hover:bg-[#5a6f2b] transition-colors duration-300"
            >
              Download PDF
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default PdfPage;
