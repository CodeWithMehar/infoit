const ProgressBar = ({ completed, label }) => {
    return (
      <div className="relative w-full h-6 bg-gray-300 rounded-3xl">
        <div
          className="h-full bg-[#7d963d] rounded-3xl mt-3"
          style={{ width: `${completed}%` }}
        ></div>
        {label && (
          <div className="absolute inset-0 flex items-center justify-center text-white font-bold font-calibri italic">
            {label}
          </div>
        )}
      </div>
    );
  };
  
  export default ProgressBar;
  