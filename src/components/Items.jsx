import { collection, onSnapshot } from "firebase/firestore";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase.config";

import {BsEye} from "../../node_modules/react-icons/bs"
import {FiArrowUpRight} from '../../node_modules/react-icons/fi'
const Items = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    FetchItem();
  }, []);
  const FetchItem = () => {
    const collectionRef = collection(db, "items");
    onSnapshot(collectionRef, (docs) => {
      const data = [];
      docs.forEach((doc) => data.push({ id: doc.id, ...doc.data() }));
      setItems(data);
    });
  };
  const navigate = useNavigate();
  return (
    <>
    <hr />
    {/* title  */}
      <div className="m-5 flex flex-col sm:flex-row sm:justify-center sm:w-[95%] gap-5 sm:gap-0 sm:items-center">
        <div className="flex gap-2 sm:w-3/12 sm:text-4xl font-bold sm:flex sm:gap-5">
          <BsEye/>
          <p>Winter Collection</p>
        </div>
        <div className="sm:flex sm:w-5/12 ">
          Versenciav is a contemporary fashion brand that focuses on desgining and producting minimalist high quality clothing and accessories.
        </div>
        <div className="sm:flex flex justify-end sm:justify-center sm:w-4/12 ">
          <button onClick={()=>navigate("/order")} className="flex hover:text-white hover:bg-orange-500 py-3 px-8 border-2 rounded-xl border-orange-500 text-orange-500">View All<FiArrowUpRight/></button>
        </div>
      </div>

      {/* items */}
      <div className="flex sm:justify-center sm:overflow-x-scroll overflow-x-scroll">
        <div className="m-5 sm:w-[95%] flex gap-5   justify-center items-center">
          {items.map((item) => {
            return (
              <div className="  group w-80 h-96 items-end overflow-hidden sm:w-8/12 flex justify-start relative ">
                <img
                  className="group-hover:opacity-75 rounded-md shadow-lg w-[100%] object-cover  sm:object-top h-[600px]"
                  src={item?.img}
                  alt=""
                />
                <div className=" h-full py-4 group-hover:flex flex-col items-center duration-300 transition group-hover:absolute bg-white/20 backdrop-blur-md hidden w-[100%] justify-around font-bold">
                  <div className=" text-white">
                    <p>{item?.title}</p>
                    <p>${item?.price}</p>
                  </div>

                  <div>
                    <button onClick={()=>navigate("/order")} className="hover:bg-orange-500 hover:border-orange-500 hover:text-white transition duration-300 py-3 px-5 rounded-xl border-2 border-white bg-transparent text-white ">SHOP NOW</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Items;
