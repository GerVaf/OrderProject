import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import logoImage from "../assets/logo.png"

const Navbar = () => {
  return (
    <div>
      <div className="main-bg-color flex items-center justify-between h-[50px] px-[100px] font-color">
        <div className="">
            <img src={logoImage} alt="..."  className="w-[40px]"/>
        </div>
        <div className=" flex items-center justify-center gap-5">
          <a>Home</a>
          <a>Menu</a>
          <a>Contact</a>
        </div>
        <div className="">
          <button>
            <AiOutlineShoppingCart className="text-xl"/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
