import React from "react";
import Image from "next/image";
import load from "../../src/img/load.gif";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <Image
        src={load}
        alt="Loading..."
        width={200}
        height={200}
        priority={true}
      />
    </div>
  );
};

export default Loading;
