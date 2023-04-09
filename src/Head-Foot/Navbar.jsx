import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";
import logoImage from "../assets/logo.avif";
import { ContextCustom } from "../context/Context";

const Navbar = () => {
  const navigate = useNavigate();
  const {
    state: { cart },
  item} = ContextCustom();
  console.log(cart);

  
  


  return (
    <div className="sticky top-0">
      
      <div className=" main-bg-color flex items-center justify-between h-[50px] px-3 sm:px-[50px] font-color">
        <div className="">
          <img src={logoImage} alt="..." className="w-[40px]" />
        </div>
        <div className=" flex justify-center font-bold gap-8 sm:gap-32 cursor-pointer">
          <NavLink to={"/"}>
            <p>Home</p>
          </NavLink>
          <NavLink to={"/order"}>
            <p>Menu</p>
          </NavLink>
          <p>Contact</p>
        </div>
        <div className=" relative">
          <div
            className={` ${
              cart.length < 1 ? "hidden " : ""
            } text-sm right-[-10px] top-[-5px] bg-red-500 text-white rounded-[50%] w-[20px] h-[20px] flex items-center justify-center absolute`}
          >
            {cart.length}
          </div>
          <button onClick={() => navigate("/cart")}>
            <AiOutlineShoppingCart className="text-3xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
