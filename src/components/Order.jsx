import React, { useState } from "react";
import { IoCaretBackOutline, IoCaretForwardOutline } from "react-icons/io5";
import Swal from "sweetalert2";
import { ContextCustom } from "../context/Context";
import image from "../image/pz.jpeg";
import OrderMenu from "./OrderMenu";

const Menu = () => {
  const {
    dispatch,
    state: { items },state
  } = ContextCustom();
  // console.log(state)


    

  return (
    <>
      <div className="flex justify-center gap-10 mt-5">
        <button className=" toppin">All</button>
        <button className=" toppin">Seafood</button>
        <button className=" toppin">Beef</button>
        <button className=" toppin">Sausage</button>
        <button className=" toppin">Chicken</button>
        <button className=" toppin">Mushroom</button>
      </div>
      {items.map((item) => {

        const increQty = ()=>{
          item.quantity += 1
        }
return (
          <div key={item.id} className="flex flex-col items-center mt-7">
            <OrderMenu item={item} increQty={increQty}/>
          </div>
        );
      })}
    </>
  );
};

export default Menu;
