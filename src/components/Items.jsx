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
      <div className="m-5 flex justify-center w-[95%] items-center">
        <div className=" sm:w-3/12 text-4xl font-bold flex gap-5">
          <BsEye/>
          <p>Winter Collection</p>
        </div>
        <div className="flex sm:w-5/12 ">
          Versenciav is a contemporary fashion brand that focuses on desgining and producting minimalist high quality clothing and accessories.
        </div>
        <div className="flex justify-center sm:w-4/12 ">
          <button className="flex hover:text-white hover:bg-orange-500 py-3 px-8 border-2 rounded-xl border-orange-500 text-orange-500">View All<FiArrowUpRight/></button>
        </div>
      </div>

      <div className="flex sm:justify-center overflow-x-scroll">
        <div className="m-5 sm:w-[95%] flex gap-5   justify-center items-center">
          {items.map((item) => {
            return (
              <div className=" group w-80 h-80 overflow-hidden sm:w-8/12 flex justify-start  relative ">
                <img
                  className=" rounded-md shadow-lg w-[100%] object-cover object-top h-[600px]"
                  src={item.image}
                  alt=""
                />
                <div className=" h-[100px] py-4 group-hover:flex duration-300 transition group-hover:absolute sm:bg-white items-center hidden bottom-0 sm:bottom-10 w-[100%] justify-around font-bold">
                  <div className=" w-36 text-orange-500">
                    <p>{item.title}</p>
                    <p>${item.price}</p>
                  </div>

                  <div>
                    <button onClick={()=>navigate("/order")} className="hover:bg-orange-500 hover:text-white transition duration-300 py-3 px-7 rounded-xl border-2 border-orange-500 sm:bg-white text-orange-500 ">SHOP NOW</button>
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
