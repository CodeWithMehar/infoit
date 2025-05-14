// components/Loading.js
import React from 'react';
import load from '../../src/img/load.gif'; // Assuming you have a local gif file

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen"> {/* Add the background color here */}
      <img 
        src={load.src} // Ensure this path is correct
        alt="Loading..." 
        className="w-[200px] h-[200px]" // Adjust size as needed
      />
    </div>
  );
};

export default Loading;
