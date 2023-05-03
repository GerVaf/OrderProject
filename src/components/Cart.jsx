import React from "react";
import { useNavigate } from "react-router-dom";
import { ContextCustom } from "../context/Context";
const Cart = () => {
  const {
    dispatch,
    state: { cart },
  } = ContextCustom();
  console.log(cart);

  const navigate = useNavigate();
  return (
    <>
      {cart.length === 0 ? (
        <div className="flex flex-col justify-start items-center h-[80vh]">
          <div className="  w-[80%] flex flex-col items-center rounded-lg gap-16 p-7 m-5 ">
            <div className=" text-4xl font-bold  text-orange-600">
              You need to order some item!
            </div>
            <button
              onClick={() => navigate("/order")}
              className="font-bold text-xl py-4 px-10 rounded-lg bg-gradient-to-r from-red-400 to-orange-500 hover:from-rose-400 hover:to-orange-400 text-white"
            >
              O R D E R
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className=" ">
            <div className="flex flex-wrap">
              {cart?.map((item) => {
                const Total = item.quantity * item.price;
                const removeItem = () => {
                  dispatch({ type: "REMOVE_FROM_CART", payload: item });
                };
                return (
                  <div
                    key={item?.id}
                    className="w-96  m-5 p-5 flex gap-5 flex-col items-center shadow-lg rounded-md bg-white"
                  >
                    <img
                      className=" rounded-md w-80 h-64 object-cover object-bottom"
                      src={item.image}
                      alt=""
                    />
                    <div className=" w-[100%] flex flex-col gap-3 font-bold text-gray-500">
                      <p>Name: {item.title}</p>
                      <p>Price: ${item.price}</p>
                      <p>Quantity: {item.quantity}</p>
                      <p>Total: ${Total}</p>
                    </div>
                    <button onClick={removeItem} className="font-bold py-2 px-5 rounded-lg bg-gradient-to-r from-red-400 to-orange-500 hover:from-rose-400 hover:to-orange-400 text-white">CANCEL</button>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
