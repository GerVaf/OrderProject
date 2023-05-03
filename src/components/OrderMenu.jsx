import React, { useState } from "react";
import { IoCaretBackOutline, IoCaretForwardOutline } from "react-icons/io5";
import Swal from "sweetalert2";
import { ContextCustom } from "../context/Context";

const OrderMenu = ({ item }) => {
  const { dispatch } = ContextCustom();

  const [quantity, setQuantity] = useState(item.quantity);

  const isadd = () => {
    item.quantity > 0
      ? [
          item.added
            ? [
                Toast.fire({
                  icon: "warning",
                  title: "Your order is cancled from cart!",
                }),
                (item.quantity = 0),
              ]
            : Toast.fire({
                icon: "success",
                title: "Your order is added to cart",
              }),
          dispatch({ type: "ADD_TO_CART", payload: item }),
        ]
      : Toast.fire({
          icon: "warning",
          title: "You need to put some order!",
        });
  };

  const increaseQty = () => {
    setQuantity((item.quantity += 1));
  };
  const decreaseQty = () => {
    quantity > 0 ? setQuantity((item.quantity -= 1)) : null;
  };

  console.log(item);


  //sweetalert2
  const Toast = Swal.mixin({
    toast: true,
    position: "top",
    showConfirmButton: false,
    timer: 1000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });


  const totalPrice = item.price * quantity;
  return (
    <div className=" sm:flex sm:flex-row flex flex-col items-center bg-white shadow-lg rounded-md ">
      <img
        src={item.image}
        className=" w-80 h-60 sm:w-80 sm:h-72 object-cover object-bottom"
        alt=""
      />
      <div className=" flex flex-col gap-5 w-80 m-5">
        <h2 className="text-gray-500 font-bold">{item.title}</h2>
        <p className="text-gray-500 font-medium ">Per price: ${item.originalPrice}</p>
        <p className="text-gray-500 font-medium ">Total amount: ${totalPrice}</p>

          {/* count&button  */}
        <div className="flex flex-col gap-3 items-center">
          <div className=" flex items-center text-orange-500 cursor-pointer gap-4 text-xl select-none ">
            <IoCaretBackOutline onClick={item.added ? null : decreaseQty} />
            <span>{quantity}</span>
            <IoCaretForwardOutline onClick={item.added ? null : increaseQty} />
          </div>
          
          <div>
            {item.added ? (
              <button
                onClick={() =>
                  dispatch({ type: "REMOVE_FROM_CART", payload: item })
                }
                className="font-bold py-2 px-5 rounded-lg bg-gradient-to-r from-red-400 to-orange-500 hover:from-rose-400 hover:to-orange-400 text-white "
              >
                CANCEL
              </button>
            ) : (
              <button
                onClick={isadd}
                className="btn text-white px-4 rounded-md font-bold "
              >
                ADD TO CART
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderMenu;
