import React from "react";
import serveImageOne from "../assets/s1.png";
import serveImageTwo from "../assets/s2.png";
import serveImageThree from "../assets/s3.png";

const WhyUs = () => {
  return (
    <div className="  w-[100%]">
      <div className="py-5 sm:py-[50px] main-font-color">
        <h3 className=" font-semibold capitalize text-center sm:text-3xl">
          always ready to serve <span className=" font-normal">for you...</span>
        </h3>

        <div className=" flex justify-around gap-5 px-5 sm:gap-20 mt-6">
          <div className=" sm:w-[200px] flex flex-col items-center gap-2 sm:gap-3">
            <img src={serveImageOne} alt="" className=" w-16 sm:w-[100px]" />
            <p className="text-[11px] sm:text-lg font-color uppercase font-bold">
              Easy To use
            </p>
            <p className="text-[10px] font-bold text-center sm:text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, a.
            </p>
          </div>
          <div className=" gap-2 sm:w-[200px] flex flex-col justify-center items-center sm:gap-3">
            <img src={serveImageTwo} alt="" className="w-14 sm:w-[100px]" />
            <img src="" alt="" />
            <p className="text-[11px] sm:text-lg font-color uppercase font-bold">
              Fast delivery
            </p>
            <p className="text-[10px] font-bold text-center sm:text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, a.
            </p>
          </div>
          <div className=" gap-2 sm:w-[200px] flex flex-col justify-center items-center sm:gap-3">
            <img src={serveImageThree} alt="" className="w-16 sm:w-[100px]" />

            <p className="text-[11px] sm:text-lg font-color uppercase font-bold">
              best service
            </p>
            <p className=" text-[10px] font-bold text-center sm:text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, a.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
