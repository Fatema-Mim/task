import React from "react";
import Star from "./Star";
import Details from "./Details";
import Price from "./Price";

const Card = ({data}) => {
  return (
    <div className="grid grid-cols-3  space-x-4 border border-gray-300  bg-white p-2 ">
      <div className="relative">
        <img
          src={data.image}
          alt="dress"
          className="mx-auto mt-3 h-[90px] w-[90px] object-contain"
        />
        <p className="absolute top-0 bg-red-300/50 px-1.5 py-[2.5px] text-[10px] capitalize  text-red-600">
          sale
        </p>
      </div>
      <div className="col-span-2 px-2 py-3">
        <Star />
        <Details />
        <Price />
      </div>
    </div>
  );
};

export default Card;
