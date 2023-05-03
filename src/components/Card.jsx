import React from "react";
import cardorange from "../image/cardorange.jpeg";
import cardorange2 from "../image/cardorange2.jpeg";
import cardorange5 from "../image/cardorange5.jpeg";
import cardorange3 from "../image/cardorange3.jpeg";
const Card = () => {
  return (
    <>
      <div className="sm:flex sm:flex-row flex-col my-4 flex h-[150vh] sm:h-[90vh] justify-center gap-5">
        <div className="sm:w-4/12 relative h-[150vh]  sm:h-[100%] overflow-hidden rounded-lg">
          <img className=" rounded-lg shadow-lg" src={cardorange} alt="" />

          <div className=" absolute flex flex-col gap-5  left-10 bottom-14 text-white">
            <p className=" text-4xl font-bold "> New Release</p>
            <p className="text-xl font-medium">Men & Women summer collection</p>
            <div className="flex gap-5">
              <button className="btn">MEN SHOP</button>
              <button className="btn">WOMEN SHOP</button>
            </div>
          </div>
        </div>

        <div className="sm:w-3/12 h-[300vh] sm:h-[100%] flex flex-col items-center justify-around gap-5 overflow-hidden rounded-lg">
          <div className="relative hidden sm:block">
            <img className=" rounded-lg shadow-lg" src={cardorange3} alt="" />
            <div className=" absolute left-10 bottom-14 text-gray-200">
              <p className=" text-4xl font-bold ">Comfy Girl</p>
              <p className=" font-medium text-xl ">Women Collection</p>
            </div>
          </div>

          <div className="relative flex justify-center">
            <img className=" rounded-lg shadow-lg" src={cardorange2} alt="" />
            <div className=" m-10 sm:m-0 absolute items-center flex flex-col gap-5 bottom-72 text-white">
              <p className=" text-4xl font-bold ">Get 20% off this summer</p>
              <p className=" font-medium text-xl ">Special Offer</p>
              <button className="btn">SHOP NOW</button>
            </div>
          </div>
        </div>
        <div className="sm:w-4/12 relative h-[160vh] sm:h-[100%] overflow-hidden rounded-lg">
          <img className=" rounded-lg shadow-lg" src={cardorange5} alt="" />
          <div className=" absolute flex flex-col gap-5 bottom-10 left-10 sm:bottom-14 text-white">
            <p className=" text-4xl font-bold ">Men's Summer Fashion</p>
            <p className=" font-medium text-xl ">Mysterious everyday</p>
            <div>
              <button className="btn">SHOP NOW</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
