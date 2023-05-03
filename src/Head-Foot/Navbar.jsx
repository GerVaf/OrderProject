import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";
import logoImage from "../assets/logo.avif";
import { ContextCustom } from "../context/Context";

const Navbar = () => {
  const navigate = useNavigate();
  const {
    state: { cart },
    item,
  } = ContextCustom();
  console.log(cart);

  return (
    <div className="bg-gradient-to-r from-orange-100 shadow-sm to-orange-200 flex items-center justify-between sm:text-[18px] h-[50px]  relative z-50 px-3 sm:px-[50px] text-red-600">
      <div className="">
        <img src={logoImage} alt="..." className="w-[40px]" />
      </div>
      <div className=" flex justify-center font-bold gap-8 sm:gap-32 cursor-pointer">
        <NavLink to={"/"}>
          <p>Home</p>
        </NavLink>
        <NavLink to={"/home"}>
          <p>Products</p>
        </NavLink>
        <NavLink to={"/order"}>
          <p>Items</p>
        </NavLink>
        <p>Contact</p>
      </div>
      <div className=" relative">
        <div
          className={` ${
            cart.length < 1 ? "hidden " : ""
          } text-sm right-[-10px] top-[-5px] bg-rose-400 text-white rounded-[50%] w-[20px] h-[20px] flex items-center justify-center absolute`}
        >
          {cart.length}
        </div>
        <button onClick={() => navigate("/cart")}>
          <AiOutlineShoppingCart className="text-rose-500 text-3xl" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
