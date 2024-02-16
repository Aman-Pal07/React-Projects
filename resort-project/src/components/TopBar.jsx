import React from "react";
import { AiFillPhone, AiOutlineClockCircle } from "react-icons/ai";
import { BsChatSquareDots } from "react-icons/bs";

const TopBar = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-4 py-2 bg-[#04152d] text-white">
      <div className="flex items-center">
        <BsChatSquareDots size={30} className="text-[#48bb78] mr-2" />
        <h1 className="text-xl font-bold transition-colors duration-300 hover:text-[#48cc78]">
          HAVEN
        </h1>
      </div>
      <div className="flex items-center space-x-6 mt-4 md:mt-0">
        <div className="flex items-center">
          <AiOutlineClockCircle size={20} className="mr-2" />
          <p className="text-sm">9AM - 5PM</p>
        </div>
        <div className="flex items-center">
          <AiFillPhone size={20} className="mr-2" />
          <p className="text-sm">0-42323-32323-323</p>
        </div>
        <button className="bg-[#48bb78] hover:bg-[#48cc78] text-white px-4 py-2 rounded-md transition duration-300">
          Register
        </button>
        <button className="bg-[#48bb78] hover:bg-[#48cc78] text-white px-4 py-2 rounded-md transition duration-300">
          Sign In
        </button>
      </div>
    </div>
  );
};
export default TopBar;
