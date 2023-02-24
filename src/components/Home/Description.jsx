import React from "react";

function Description({ children }) {
  return (
    <p className="text text-start font-light leading-relaxed md:text-center md:text-2xl xl:w-[1000px]">
      {children}
    </p>
  );
}

export default Description;
