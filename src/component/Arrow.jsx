import React from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Arrow = () => {
  return (
    <div className="flex space-x-1">
      <div>
        <BsArrowLeft  className="pt-1 pr-1" />
      </div>
      <div className="bg-black text-white w-5 h-5 rounded-full">
        <BsArrowRight className="pt-1 pl-1" />
      </div>
    </div>
  );
};

export default Arrow;
