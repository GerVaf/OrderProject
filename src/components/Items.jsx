import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { BsEye } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";
import { supabase } from "../Supabase/supabase";

const Items = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      let { data, error } = await supabase.from("Clothes").select("*");
      if (error) throw error;
      setItems(data);
    } catch (error) {
      console.error("Error fetching items:", error.message);
    }
  };

  console.log(items);

  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center">
      <hr />
      {/* Title section */}
      <div className="m-5 flex flex-col sm:flex-row sm:justify-center sm:w-[95%] gap-5 sm:gap-0 sm:items-center">
        <div className="flex gap-2 sm:w-3/12 sm:text-4xl font-bold sm:flex sm:gap-5">
          <BsEye />
          <p>Winter Collection</p>
        </div>
        <div className="sm:flex sm:w-5/12 ">
          Versenciav is a contemporary fashion brand that focuses on designing
          and producing minimalist high quality clothing and accessories.
        </div>
        <div className="sm:flex flex justify-end sm:justify-center sm:w-4/12 ">
          <button
            onClick={() => navigate("/order")}
            className="flex hover:text-white hover:bg-orange-500 py-3 px-8 border-2 rounded-xl border-orange-500 text-orange-500"
          >
            View All
            <FiArrowUpRight />
          </button>
        </div>
      </div>

      {/* Items section */}
      <div className="w-[90vw] flex scrollbar-thin overflow-x-scroll">
        <div className="flex gap-5">
          {items.map((item) => (
            <div
              key={item.id}
              className="group sm:w-[500px] w-72 sm:h-[500px] h-72 overflow-hidden flex justify-start relative"
            >
              <img
                className="group-hover:opacity-75 rounded-md shadow-lg w-full h-full object-cover sm:object-top "
                src={item.img}
                alt=""
              />
              <div className="h-full py-4 group-hover:flex flex-col items-center duration-300 transition group-hover:absolute bg-white/20 backdrop-blur-md hidden w-[100%] justify-around font-bold">
                <div className="text-white">
                  <p>{item.title}</p>
                  <p>${item.price}</p>
                </div>

                <div>
                  <button
                    onClick={() => navigate("/order")}
                    className="hover:bg-orange-500 hover:border-orange-500 hover:text-white transition duration-300 py-3 px-5 rounded-xl border-2 border-white bg-transparent text-white"
                  >
                    SHOP NOW
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Items;
