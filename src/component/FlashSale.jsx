import React, { useEffect, useState } from "react";
import Switcher from "./Switcher";
import Arrow from "./Arrow";
import { BsArrowRight } from "react-icons/bs";

const FlashSale = () => {
  const [sliderImg, setSliderImg] = useState([]);
  useEffect(() => {
    fetch("slider.json")
      .then((res) => res.json())
      .then((data) => setSliderImg(data));
  }, []);
  return (
    <div className="px-8 pb-12 pt-14">
      <div className="grid-cols-5 gap-3 space-y-4 sm:grid sm:space-y-0">
        <div className="col-span-4">
          <div className="flex justify-between pb-4">
            <div className=" space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
              <p className="border-2 border-black px-2 text-[23px]">
                <span className="font-[800]">Flash</span> Sale Product
              </p>
              <p className="space-x-1 self-center text-[11px] font-medium text-purple-700 ">
                <span className="rounded-sm bg-purple-100 p-[3px]">2d</span>{" "}
                <span>:</span>
                <span className="rounded-sm bg-purple-100 p-[3px]">15h</span>
                <span>:</span>
                <span className="rounded-sm bg-purple-100 p-[3px]">21m</span>
                <span>:</span>
                <span className="rounded-sm bg-purple-100 p-[3px]">47s</span>
              </p>
            </div>
            <div className="hidden self-center sm:inline-block">
              <Arrow />
            </div>
          </div>
          <div className=" grid-cols-4 gap-4 space-y-5 sm:grid sm:space-y-0">
            {sliderImg.map((sImg) => {
              return <Switcher key={sImg.id} sImg={sImg} />;
            })}
          </div>
        </div>

        <div className="flex items-center justify-center bg-sale bg-cover bg-center bg-no-repeat">
          <div className="py-24 text-center sm:py-0">
            <p className="text-xs font-medium uppercase tracking-[9px] text-white">
              Mega deal
            </p>
            <button className="mt-2 text-xs text-yellow-400">
              Shop now <BsArrowRight className="inline-block" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
