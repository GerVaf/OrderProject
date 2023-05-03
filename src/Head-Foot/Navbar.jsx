import { faL } from "@fortawesome/free-solid-svg-icons";
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

  const [show, setShow] = useState(false);
  console.log(show);
  return (
    <>
      <div className="sm:hidden shadow-md">
        <div className="flex w-2/2 p-2 justify-between items-center gap-5">
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
          <label className="btn border-0 right-0 btn-circle swap swap-rotate">
            <input
              onClick={() => {
                setShow(!show);
              }}
              type="checkbox"
            />

            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>

            <svg
              className="swap-on fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>
        </div>

        {show ? (
          <div className=" absolute mx-2 z-20 w-40 right-0 rounded-sm bg-orange-200">
            <div className=" p-5 px-10  flex flex-col justify-center font-bold gap-8 sm:gap-32 text-orange-600 cursor-pointer">
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
          </div>
        ) : null}
      </div>

      {/* for desktop */}
      <div className="hidden bg-gradient-to-r from-orange-100 shadow-sm to-orange-200 sm:flex items-center justify-between sm:text-[18px] h-[50px]  relative z-50 px-3 sm:px-[50px] text-red-600">
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
    </>
  );
};

export default Navbar;
