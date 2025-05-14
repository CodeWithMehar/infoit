import React from "react";

export default function CaseCode() {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-between gap-6">
      {/* Left Side */}
      <div
        className="w-full lg:w-[40%] h-[400px] lg:h-[500px] bg-cover bg-center p-6 lg:p-10"
        style={{
          backgroundImage:
            'url("https://demo26.atiframe.com/wp-content/uploads/2020/02/image-5.jpg")',
        }}
      >
        <h1 className="text-[28px] lg:text-[55px] leading-[40px] lg:leading-[60px] text-gray-900 font-calibri italic">
          Our <span className="text-[#7D963D] font-bold">Latest</span> <br />
          Projects
        </h1>
        <p className="text-[16px] lg:text-[20px] text-gray-800 mt-4 bg-[#f2fed3] py-3 px-2 font-gabriola">
          We are committed to using fact-based knowledge and our unique brand of
          innovation to help you dominate the competition.
        </p>
        <button className="mt-5 bg-white text-[#7D963D] py-1 px-6 md:px-10 text-sm lg:text-base transition-all duration-500 ease-out relative overflow-hidden group hover:text-white hidden md:block border-2 border-[#7D963D]">
          <span className="relative z-10 font-gabriola text-[20px]">CONTACT US</span>
          <span className="absolute inset-0 bg-gradient-to-r from-[#7D963D] to-[#cdf171] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
        </button>
      </div>

      {/* Right Side with Cards */}
      <div className="w-full lg:w-[60%] flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
        {/* Card 1 */}
        <CaseCard
          title="CONSTRUCTION COMPANY"
          subtitle="Web Solution "
          imageUrl="https://demo26.atiframe.com/wp-content/uploads/2020/02/Portfolio_thumb_07.jpg"
        />
        {/* Card 2 */}
        <CaseCard
          title="HVAC SERVICE COMPANY"
          subtitle="Web Creation"
          imageUrl="https://demo26.atiframe.com/wp-content/uploads/2020/01/28298-1.jpg"
        />
        {/* Card 3 */}
        <CaseCard
          title="ECOMMERCE BUSINESS"
          subtitle="+70% Website Traffic"
          imageUrl="https://demo26.atiframe.com/wp-content/uploads/2020/02/Portfolio_thumb_06.jpg"
        />
      </div>
    </div>
  );
}
const CaseCard = ({ title, subtitle, imageUrl }) => {
  return (
    <div
      className="relative w-full h-[250px] md:h-[300px] bg-cover bg-center rounded-lg overflow-hidden group cursor-pointer"
      style={{ backgroundImage: `url("${imageUrl}")` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#7d963d] opacity-0 group-hover:opacity-70 transition-opacity duration-1000"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
        <div className="text-center">
          <h2 className="text-lg lg:text-2xl font-bold">{title}</h2>
          <p className="mt-2">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};
