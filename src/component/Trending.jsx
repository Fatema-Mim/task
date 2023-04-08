import React from "react";
import Fashion from "./Fashion";
import Food from "./Food";
import Cosmetics from "./Cosmetics";

const Trending = () => {
  return (
    <div className="bg-gray-200/80 px-8 pb-12 pt-10">
      <p className="inline-block border-2 border-black px-2 text-[23px]">
        <span className="font-[800]">Trending</span> Product
      </p>
      <div className="sm:grid grid-cols-3 pt-6 space-y-6 sm:space-y-0">
        <Fashion/>
        <Food/>
        <Cosmetics/> 
      </div>
    </div>
  );
};

export default Trending;
