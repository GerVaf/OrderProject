import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const [pizzas, setPizza] = useState([]);
  const getData = async () => {
    const { data } = await axios.get("http://localhost:3000/products");
    setPizza(data);
  };
  const deleteItem = async (id) => {
    const { data } = await axios.delete(`http://localhost:3000/products/${id}`);
  };
  useEffect(() => {
    getData();
  }, [pizzas]);
  return (
    <div className="main-bg-color">
      <div className="flex items-center justify-center flex-wrap pt-5 gap-3">
        {pizzas.map((pizza) => {
          return (
            <div
              className="w-[250px] p-5 bg-white rounded-md shadow-2xl"
              key={pizza.id}
            >
              <img src={pizza.image} alt="" className=" h-[200px]" />
              <p>$ {pizza.price}</p>
              <div className="flex items-center justify-between mt-3">
                <div className="">
                  <Link to={`/edit/${pizza.id}`} state={pizza}>
                    <button className="btn w-[100px] main-bg-color font-color">
                      Edit
                    </button>
                  </Link>
                </div>
                <button
                  className=" bg-red-600 w-[100px] btn"
                  onClick={() => deleteItem(pizza.id)}
                >
                  delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllProducts;
