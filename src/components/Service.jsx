import React from "react";
import serveImageOne from "../assets/s1.png";
import serveImageTwo from "../assets/s2.png";
import serveImageThree from "../assets/s3.png";

const WhyUs = () => {
  return (
    <div>
      <div className=" py-[50px] bg-white main-font-color">
        <h3 className=" font-semibold capitalize text-center text-3xl">
          always ready to serve <span className=" font-normal">for you...</span>
        </h3>

        <div className=" flex justify-around gap-20 mt-6">
          <div className=" w-[200px] flex flex-col items-center gap-3">
            <img src={serveImageOne} alt="" className="w-[100px]" />
            <p className=" text-lg font-color uppercase font-bold">
              Easy To use
            </p>
            <p className="font-bold text-center text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, a.
            </p>
          </div>
          <div className=" w-[200px] flex flex-col justify-center items-center gap-3">
            <img src={serveImageTwo} alt="" className="w-[100px]" />
            <img src="" alt="" />
            <p className=" text-lg font-color uppercase font-bold">
              Fast delivery
            </p>
            <p className="font-bold text-center text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, a.
            </p>
          </div>
          <div className=" w-[200px] flex flex-col justify-center items-center gap-3">
            <img src={serveImageThree} alt="" className="w-[100px]" />

            <p className=" text-lg font-color uppercase font-bold">
              best service
            </p>
            <p className="font-bold text-center text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, a.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
