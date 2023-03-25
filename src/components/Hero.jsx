import React from "react";
import heroImage from "../assets/heroImage.png"

const Hero = () => {
  return (
    <div>
      <div className=" default-bg-color px-[100px] pt-[100px] flex justify-center items-center">
        <div className="main-font-color">
          <h2 className=" text-lg uppercase">
            With fastest
            <span className=" text-3xl  font-color ml-3">delivery system</span>
          </h2>
          <h1 className=" text-lg uppercase">
            Our <span className="  font-color text-2xl">pizza</span> is ready
            for you...
          </h1>
          <button className=" px-2 py-1 main-bg-color rounded-md uppercase font-color mt-6">order now</button>
        </div>
        <div className="">
          <img src={heroImage} alt="..."  className=" w-[300px]"/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
