import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";

const Social = () => {
  return (
    <div>
      <div className=" w-full items-center justify-center flex gap-10 p-3 main-font-color bg-white">
        <a>
          <AiFillFacebook className=" text-3xl"/>
        </a>
        <a>
          <AiFillInstagram className=" text-3xl"/>
        </a>
        <a>
          <AiFillTwitterSquare className=" text-3xl"/>
        </a>
      </div>
      <div className=" main-bg-color p-4 font-color rounded-md">
        <p className=" text-center">Copyright & copy {new Date().getFullYear()}@codeByNoone</p>
      </div>
    </div>
  );
};

export default Social;
