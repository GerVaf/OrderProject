import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";

const Social = () => {
  return (
    <div>
      <div className=" w-full items-center justify-center flex gap-5 p-3 main-font-color bg-white">
        <a>
          <AiFillFacebook className=" text-xl"/>
        </a>
        <a>
          <AiFillInstagram className=" text-xl"/>
        </a>
        <a>
          <AiFillTwitterSquare className=" text-xl"/>
        </a>
      </div>
      <div className=" main-bg-color p-4 font-color">
        <p className=" text-center">Copyright@ pizza hub</p>
      </div>
    </div>
  );
};

export default Social;
