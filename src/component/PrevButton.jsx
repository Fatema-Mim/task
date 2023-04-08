import React from "react";

const PrevButton = ({ style, className, onClick }) => {
  return (
    <div
      className={`${className} left-0 bg-white text-black rounded-full z-50`}
      style={{ ...style, left: "0px" }}
      onClick={onClick}
    >
    </div>
  );
};

export default PrevButton;