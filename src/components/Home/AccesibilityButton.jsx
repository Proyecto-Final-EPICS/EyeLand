import React from "react";

function AccesibilityButton({ className, onClick }) {
  return (
    <div
      className={"absolute h-[22%] w-[26%] cursor-pointer  " + className}
      onClick={onClick}
    ></div>
  );
}

export default AccesibilityButton;
