import React from "react";
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/HeroImage.png";

const Hero = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className=" default-bg-color px-[50px] flex justify-center gap-20 align-middle items-center rounded-md">
        <div className="main-font-color flex flex-col gap-3">
          <h2 className=" text-lg uppercase font-bold">
            With fastest
            <span className=" text-3xl  font-color ml-3">delivery system</span>
          </h2>
          <h1 className=" text-lg uppercase font-bold">
            Our <span className="  font-color text-2xl">pizza</span> is ready
            for you...
          </h1>
          <div>
            <button onClick={()=>navigate("/order")} className="btn uppercase" >order now</button>
          </div>
        </div>
        <div className="">
          <img src={heroImage} alt="..." className=" w-[400px]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
