import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Item.css";
// import menuOne from "../assets/menu1.png";

// import { ContextCustom } from "../context/Context";

const Items = () => {
  // const {state: { items },} = ContextCustom();
  // console.log(items);
  const [items,setItems]= useState([])

  useEffect(()=>{
    FetchItem()
  },[])
  const FetchItem = async()=>{
    const {data} = await axios.get("http://localhost:3000/popular")
    console.log(data);
    setItems(data)
  }
  const navigateMenu = useNavigate()
  return (
    <>
      <div>
        <div className="main-bg-color rounded-md p-5">
          <h1 className=" text-center sm:text-2xl font-color uppercase font-semibold">
            Popular menu for today
          </h1>
          <div className=" mx-auto flex flex-wrap items-center gap-3 justify-center mt-5 sm:gap-7">
          {items?.map(item =>{
            return(
            <div key={item.id} className=" flex flex-col bg-white rounded-xl gap-2">
              <img
                src={item.image}
                alt="..."
                className=" hilight w-[101px] sm:w-[300px] rounded-t-lg sm:h-[200px]"
              />
              <div className=" text-center ">
              <p className=" text-center font-color text-[10px] mb-2 sm:text-xl font-bold ">{item.name}</p>
              <hr className="sm:mt-4" />
              <div className="p-2 flex gap-2 sm:p-4 ">
                <button className="sm:text-[15px] bg-white sm:px-9 text-amber-500 font-bold sm:py-2 rounded-2xl  hover:bg-yellow-50 text-[10px] ">
                  ${item.price}
                </button>
                <button onClick={()=> navigateMenu("/order")} className="px-[5px] py-[3px] text-[8px] bg-amber-500 sm:px-9 text-white font-bold sm:py-2 rounded-2xl hover:text-red-600  hover:bg-amber-400 sm:text-[15px]">Order Now</button>
              </div>
              </div>
            </div>
            )
          })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Items;
