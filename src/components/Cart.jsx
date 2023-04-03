import React from "react";
import { useNavigate } from "react-router-dom";
import { ContextCustom } from "../context/Context";

const Cart = () => {
  const {
    dispatch,
    state: { cart },
  } = ContextCustom();
  console.log(cart);

  const cancel = () => {
    dispatch({ type: "ADD_TO_CART" });
  };

  const navigate = useNavigate();
  return (
    <>
      {cart.length === 0 ? (
        <div className="flex flex-col items-center">
          <div className=" bg-amber-200 w-[75%] flex flex-col items-center rounded-lg gap-5 p-7 m-5 ">
            <div className=" text-2xl font-bold  text-red-600">
              You need to order some item!
            </div>
            <button
              onClick={() => navigate("/order")}
              className="bg-red-600 text-white hover:bg-red-500  px-[38px] py-1 rounded-md font-bold"
            >
              ORDER
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center m-10">
          <div className=" bg-amber-200 w-[75%] flex flex-col items-center rounded-lg">
            {cart?.map((item) => {
              const Total = item.quantity * item.price;
              const removeItem = () => {
                dispatch({ type: "REMOVE_FROM_CART", payload: item });
                
              };
              return (
                <div key={item?.id} className="p-4 flex flex-col items-center">
                  <div className=" flex gap-20 ">
                    {/* <img src={image} className=" w-40" alt="" /> */}
                    <div className="flex flex-col  items-center">
                      <h2 className="cart-title">Pizza Name</h2>
                      <h2 className="cart-invoice">
                        {item?.title?.substring(0, 10)}
                      </h2>
                    </div>
                    {/* <div className="flex flex-col  items-center">
                    <h2 className="cart-title">Size</h2>
                    <h2 className="cart-invoice">Medium</h2>
                  </div> */}
                    <div className="flex flex-col  items-center">
                      <h2 className="cart-title">Price</h2>
                      <h2 className="cart-invoice">${item?.price}</h2>
                    </div>
                    <div className="flex flex-col  items-center">
                      <h2 className="cart-title">Quantity</h2>
                      <h2 className="cart-invoice">{item?.quantity}</h2>
                    </div>
                    <div className="flex flex-col  items-center">
                      <h2 className="cart-title">Total</h2>
                      <h2 className="cart-invoice">${Total}</h2>
                    </div>
                    <div className=" items-baseline" onClick={removeItem}>
                      <button className=" bg-red-600 text-white hover:bg-red-500  px-[38px]  py-1  rounded-md font-bold">
                        CANCEL
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="">
              <button className="btn">PAY FOR NOW</button>
              <button onClick={cancel} className="btn">
                CANCEL
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
