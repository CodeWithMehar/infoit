import React from 'react'

export default function CaseMarket() {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-between gap-6">
    {/* Left Side */}
    <div
      className="w-full lg:w-[40%] h-[400px] lg:h-[500px] bg-cover bg-center p-6 lg:p-10"
      style={{
        backgroundImage: 'url("https://demo26.atiframe.com/wp-content/uploads/2020/02/image-5.jpg")',
      }}
    >
      <h1 className="text-[28px] lg:text-[55px] leading-[40px] lg:leading-[60px] text-gray-900 font-calibri italic">
        Our <span className="text-[#7D963D] font-bold">Latest</span> <br />
        Cases
      </h1>
   <div className='bg-[#dff2af] p-3'>
   <p className="text-[25px] lg:text-[20px] text-gray-800 mt-4 font-gabriola">
        We are committed to using fact-based knowledge and our unique brand
        of innovation to help you dominate the competition.
      </p>
   </div>
      <button className="mt-5 bg-white text-[#7D963D] py-1 px-6 md:px-10 text-sm lg:text-base transition-all duration-500 ease-out relative overflow-hidden group hover:text-white hidden md:block border-2 border-[#7D963D]">
        <span className="relative z-10">CONTACT US</span>
        <span className="absolute inset-0 bg-gradient-to-r from-[#7D963D] to-[#cdf171] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
      </button>
    </div>

    {/* Right Side with Cards */}
    <div className="w-full lg:w-[60%] flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
      {/* Card 1 */}
      <CaseCard 
        title="CONSTRUCTION COMPANY"
        subtitle="+126.5% Organic Search Traffic"
        imageUrl="https://img.freepik.com/free-photo/business-team-collaborating-corporate-culture-initiatives-development_482257-90929.jpg?ga=GA1.1.1042070903.1730462170&semt=ais_hybrid"
      />
      {/* Card 2 */}
      <CaseCard 
        title="HVAC SERVICE COMPANY"
        subtitle="+349% Keywords Ranked in Top 5"
        imageUrl="https://img.freepik.com/premium-photo/young-business-people-putting-their-hands-together-stack-hands-unity-teamwork-concept_1131934-32074.jpg?ga=GA1.1.1042070903.1730462170&semt=ais_hybrid="
      />
      {/* Card 3 */}
      <CaseCard 
        title="ECOMMERCE BUSINESS"
        subtitle="+70% Website Traffic"
        imageUrl="https://img.freepik.com/premium-photo/photo-realistic-as-marketing-director-presenting-social-media-strategy-executives-concept-as-ma_980716-416110.jpg?ga=GA1.1.1042070903.1730462170&semt=ais_hybrid"
      />
    </div>
  </div>
  )
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
  }
