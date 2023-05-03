import React from "react";
import Marquee from "react-fast-marquee";
import newrelease from "../image/newrelease.jpeg";
import women from "../image/women.jpeg";
import women1 from "../image/women1.png";
import men from "../image/men.jpeg";
import collection from "../image/_.jpeg";
import skater from "../image/skater.jpeg";

const WhyUs = () => {
  return (
    <>
      <div className="my-10">
        <Marquee autoFill={true} pauseOnHover={true}>
          <div className=" mx-5 flex  gap-3 font-bold">
            <img
              className="w-36 h-16 object-cover rounded-md"
              src={newrelease}
              alt=""
            />
            <div>
              <p>New Release</p>
              <p>The latest fashion </p>
            </div>
          </div>
          <div className=" mx-5 flex  gap-3 font-bold">
            <img
              className="w-36 h-16 object-cover rounded-md"
              src={women}
              alt=""
            />
            <div>
              <p>For Women</p>
              <p>Gorgeous Fashion</p>
            </div>
          </div>
          <div className=" mx-5 flex  gap-3 font-bold">
            <img
              className="w-36 h-16 object-cover rounded-md"
              src={men}
              alt=""
            />
            <div>
              <p>For Men</p>
              <p>The Handsome Fashion </p>
            </div>
          </div>
          <div className=" mx-5 flex  gap-3 font-bold">
            <img
              className="w-36 h-16 object-cover rounded-md"
              src={women1}
              alt=""
            />
            <div>
              <p>For Teennager</p>
              <p>Street Fashion</p>
            </div>
          </div>
          <div className=" mx-5 flex  gap-3 font-bold">
            <img
              className="w-36 h-16 object-cover rounded-md"
              src={skater}
              alt=""
            />
            <div>
              <p>For Skater</p>
              <p>Young Boi Street</p>
            </div>
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default WhyUs;
