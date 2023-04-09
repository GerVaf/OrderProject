import React from "react";
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/HeroImage.png";

const Hero = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className="flex flex-col items-center pt-5  default-bg-color sm:flex-row sm:px-[50px]  sm:justify-center sm:gap-20 sm:align-middle sm:items-center rounded-md">
        <div className="main-font-color flex flex-col gap-2  sm:flex-col sm:gap-3">
          <h2 className=" text-sm sm:text-lg uppercase font-bold">
            With fastest
            <span className=" text-lg sm:text-3xl  font-color sm:ml-3">  delivery system</span>
          </h2>
          <h1 className=" text-sm sm:text-lg uppercase font-bold">
            Our <span className="text-lg  font-color sm:text-2xl">pizza</span> is ready
            for you...
          </h1>
          <div>
            <button onClick={()=>navigate("/order")} className="btn hidden sm:block d-n uppercase" >order now</button>
          </div>
        </div>
        <div className=" flex items-center ">
        
          <img src={heroImage} alt="..." className=" w-[200px] sm:w-[400px]" />
          <div>
            <button onClick={()=>navigate("/order")} className="btn sm:hidden text-sm  sm:text-lg uppercase" >order now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
