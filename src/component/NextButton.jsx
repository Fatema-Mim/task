import React from "react";

const NextButton = ({ style, className, onClick }) => {
  return (
    <div
      className={`${className}  rounded-full  z-50 theme`}
      style={{ ...style, right: "0px" }}
      onClick={onClick}
    >
    </div>
  );
};

export default NextButton;