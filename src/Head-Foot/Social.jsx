import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";

const Social = () => {
  return (
    <div>
      {/* <div className=" w-full items-center justify-center flex gap-10 p-3 text-red-600  bg-white">
        <a>
          <AiFillFacebook className=" text-3xl"/>
        </a>
        <a>
          <AiFillInstagram className=" text-3xl"/>
        </a>
        <a>
          <AiFillTwitterSquare className=" text-3xl"/>
        </a>
      </div> */}
      <div className=" bg-gradient-to-r from-orange-100 shadow-sm to-orange-200 mt-10 p-4 font-color rounded-md">
        <p className="font-bold text-center">Copyright & copy {new Date().getFullYear()}@ code By ThantZinMin</p>
      </div>
    </div>
  );
};

export default Social;
