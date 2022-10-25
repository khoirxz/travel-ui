import React from "react";

import imageHero from "../../assets/images/bg-hero.jpg";

const Hero = () => {
  return (
    <div>
      <div className="relative max-w-screen-xl m-auto">
        <div className="z-20 w-full h-hero absolute flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-sm font-light">
            Eksplore Semua Tempat Keinginanmu Dengan
          </h1>
          <h1 className="font-bold text-3xl my-4">Travel Malang</h1>
          <button className="border border-white px-3 py-1 rounded-md hover:bg-white hover:text-black transition-all focus:bg-[#8e8e8e]">
            Booking Now
          </button>
        </div>
        <div className="max-w-screen-xl w-full h-hero bg-[#00000091] z-10 absolute xl:rounded-2xl"></div>
        <img
          src={imageHero}
          alt="Hero"
          className={`w-full xl:rounded-2xl h-hero object-cover grayscale[.5] z-0`}
        />
      </div>
    </div>
  );
};

export default Hero;
