import React from "react";
import Image from "next/image";
import load from "../../src/img/load.gif";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <Image
        src={load}
        alt="Loading..."
        width={100}
        height={100}
        priority={true}
      />
    </div>
  );
};

export default Loading;
