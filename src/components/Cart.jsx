import React from "react";
import { useNavigate } from "react-router-dom";
import { ContextCustom } from "../context/Context";
import imge from "../image/pay.jpeg";
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
        <div className="flex flex-col items-center">
          <div className=" bg-amber-100 w-[80%] flex flex-col items-center rounded-lg gap-5 p-7 m-5 ">
            <div className=" text-xl font-bold  text-red-600">
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
        <>
          <div className=" hidden sm:flex flex-col items-center m-10">
            <div className=" bg-amber-200 w-[100%] sm:w-[75%] flex flex-col items-center rounded-lg">
              {cart?.map((item) => {
                const Total = item.quantity * item.price;
                const removeItem = () => {
                  dispatch({ type: "REMOVE_FROM_CART", payload: item });
                };
                return (
                  <div
                    key={item?.id}
                    className="p-4 flex flex-col items-center"
                  >
                    <div className=" flex gap-20 items-center ">
                      {/* <img src={image} className=" w-40" alt="" /> */}
                      <div className="flex flex-col  items-center">
                        <h2 className="cart-title">Pizza Name</h2>
                        <h2 className="cart-invoice">
                          {item?.title?.substring(0, 10)}
                        </h2>
                      </div>
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
              </div>
            </div>
          </div>
          {/* ---------- */}
          <div className="  sm:hidden flex flex-col items-center">
            {cart?.map((el) => {
              const Total = el.quantity * el.price;
              const removeItem = () => {
                dispatch({ type: "REMOVE_FROM_CART", payload: el });
              };
              return (
                <div key={el.id} className="font-bold text-red-600 bg-yellow-200 w-[80%] m-5 items-center flex flex-col rounded-lg ">
                  <img src={imge} className="rounded-t-lg w-[300px]" alt="" />
                  <div className="flex flex-col gap-2 p-3">
                    <h2>Name : {el?.title.substring(0, 25)}... </h2>
                    <h2>Price : ${el.price}</h2>
                    <h2>Quantity : {el.quantity}</h2>
                    <h2>Total : ${Total}</h2>
                  </div>
                  <div className=" items-baseline pb-4" onClick={removeItem}>
                        <button className=" bg-red-600 text-white hover:bg-red-500  px-[38px]  py-1  rounded-md font-bold">
                          CANCEL
                        </button>
                      </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
