import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "./Image";
import Slider from "react-slick";
import PrevButton from "./PrevButton";
import NextButton from "./NextButton";

const SlickSlider = (props) => {
  const sliderRef = useRef();
  const next = () => {
    sliderRef.current.slickNext();
  };
  const previous = () => {
    sliderRef.current.slickPrev();
  };
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextButton onClick={() => next()}  />,
    prevArrow: <PrevButton onClick={() => previous()} />,
  };
  
  return (
    props.show ? (
      <Slider {...settings} ref={sliderRef}>
        <Image src={props.sImg.image2} className="inline-block w-[150px] h-[180px] object-contain  mx-auto"/>
        <Image src={props.sImg.image3} className="inline-block w-[150px] h-[180px] object-contain  mx-auto"/>
        <Image src={props.sImg.image4} className="inline-block w-[150px] h-[180px] object-contain  mx-auto"/>
        
      </Slider>
    )  : (
      <Slider {...settings} ref={sliderRef}>
        <Image src={props.sImg.image2} className="inline-block w-[150px] h-[180px] object-contain  mx-auto"/>
        <Image src={props.sImg.image3} className="inline-block w-[150px] h-[180px] object-contain  mx-auto"/>
        <Image src={props.sImg.image4} className="inline-block w-[150px] h-[180px] object-contain  mx-auto"/>
        
      </Slider>
    )

  );
};

export default SlickSlider;