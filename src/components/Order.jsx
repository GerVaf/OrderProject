import React from "react";
import { ContextCustom } from "../context/Context";
import OrderMenu from "./OrderMenu";

const Menu = () => {
  const {
    dispatch,
    state: { items },
    state,
  } = ContextCustom();
  // console.log(state)

  return (
    <>
      <div className="">
        <button className=" "></button>
        <button className=" "></button>
        <button className=" "></button>
        <button className=" "></button>
        <button className=" "></button>
        <button className=" "></button>
      </div>
      
      <div className="flex flex-wrap gap-5 justify-center">
        {items.map((item) => {
          return (
            <div
              key={item.id}
              className="flex sm:flex sm:flex-wrap sm:flex-row flex-col items-center mt-7"
            >
              <OrderMenu item={item} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Menu;
