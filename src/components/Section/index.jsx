import React from "react";

const Section = ({ children }) => {
  return (
    <div className="w-full my-[6rem]">
      <div className="max-w-screen-xl m-auto">{children}</div>
    </div>
  );
};

export default Section;
