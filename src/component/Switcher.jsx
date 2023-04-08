import React, { useEffect, useState } from "react";
import Image from "./Image";
import SlickSlider from "./SlickSlider";
import { BsHandbag } from "react-icons/bs";
import Star from "./Star";
import Price from "./Price";
import Details from "./Details";
import CartIcon from "./CartIcon";

const Switcher = ({sImg}) => {
  const [show, setShow] = useState(false);
  const [hide , setHide] = useState(false)
  
  useEffect(()=>{
    window.addEventListener ("resize", (event) =>{
      setWidthHandler(window.innerWidth)
    })
    
  },[hide])
  const setWidthHandler = (width) => {
    if (width) {
      if (width < 556) {
        setHide(true);
        
      } else {
        setHide(false);

      }
    } else {
      if (window.innerWidth < 556) {
        setHide(true);

      } else {
        setHide(false);
  
      }
    }
  };

  const hoverHandler = (event) => {
    setShow(true);
  };

  const hoverOutHandler = (event) => {
    setShow(false);
  };
  return (
    <div
      className=" group border border-white sm:border-gray-200  hover:border-white  "
      onMouseEnter={(elem) => hoverHandler(elem)}
      onMouseLeave={(elem) => hoverOutHandler(elem)}
    >
      <div className="border border-gray-200 sm:border-white group-hover:border-gray-200">
        <div className="p-1.5">
          <div className="relative text-center ">
            <span>
              {!show && !hide ? (
                <Image
                  src={sImg.image1}
                  className=" mx-auto h-[180px] w-[150px]  object-contain "
                />
              ) : (
                <SlickSlider show={show} sImg={sImg}  />
              )}
            </span>
            
            {
              sImg.position === "Sale" ? <p className="absolute top-0 bg-red-300/50 px-1.5 py-[2.5px] text-[10px] capitalize  text-red-600">
              sale
            </p> : <p className="absolute top-0 bg-gray-300/50 px-1.5 py-[2.5px] text-[10px] capitalize">
              New
            </p>
            }
          </div>
        </div>
        <div className="space-y-2 px-4 pb-3 pt-6">
          <p className="text-xs  text-gray-400 ">Smart tv</p>
          <Details/>
        </div>
      </div>

      {!show && !hide ? (
        <div className="px-4">
          <Star/>
          <Price/>
        </div>
      ) : (
        <CartIcon/>
      )}
      <div className="border border-gray-200 sm:border-white px-3.5 pb-2 pt-4 group-hover:border-gray-200">
        <button className="w-full space-x-1 rounded bg-gray-200/80 pb-1.5 pt-1 text-center capitalize text-teal-500 hover:bg-teal-600 hover:text-white">
          <span className="text-[11px]">Add to cart</span>{" "}
          <BsHandbag className="inline-block text-[10.5px] " />{" "}
        </button>
      </div>
    </div>
  );
};

export default Switcher;
