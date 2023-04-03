import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { IoCaretBackOutline, IoCaretForwardOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { ContextCustom } from "../context/Context";
import image from "../image/pz.jpeg"

const OrderMenu = ({ item }) => {

  const {dispatch}=ContextCustom()

  const [quantity, setQuantity] = useState(0);

  // useEffect(()=>{
  //   dispatch({type:"Qty",payload:quantity})
  // },[quantity])

  const [isAdded,setIsAdded] = useState(item.added)
  //Add to cart and quantity
  // ,dispatch({type:"REMOVE_FROM_ORDER",payload:item})] 
  const isadd = () =>{
    
    item.quantity > 0 ?
    setIsAdded(!isAdded)
    [isAdded
     ? [Swal.fire({
      text: "Your order is cancled from cart!",
      icon: 'warning',
    }),quantity=0]: Toast.fire({
      icon: 'success',
      title: 'Your order is added to cart'
    }),dispatch({type:"ADD_TO_CART",payload:item})]:Toast.fire({
      icon: 'warning',
      title: 'You need to put some order!'
    })
  }
  // console.log(isAdded);

  const increaseQty = ()=>{
    setQuantity(item.quantity+=1)
  }
  const decreaseQty =()=>{
    quantity>0? setQuantity(item.quantity-=1):null
  }

  console.log(item);

  //sweetalert2 for cancel 

  //sweetalert2
  const Toast = Swal.mixin({
    toast: true,
    position: "top",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
  

  // useEffect(()=>{item.quantity = 0},[dispatch({type:"REMOVE_FROM_CART"})])

  

  //totalPrice 
  const totalPrice = item.price*quantity
  return (
    <div className=" bg-amber-200 w-4/6 rounded-md">
      <div className=" flex py-4 px-40 gap-14">
        <img src={image} className=" rounded-lg" alt="" />
        <div className=" flex flex-col gap-4">
          <h2 className=" text-xl text-red-600 font-bold">{item.title}</h2>
          <p className=" font-extrabold text-amber-500">Original price: ${item.originalPrice}</p>
          <p className=" font-extrabold text-amber-500">Total amount: ${totalPrice}</p>
          {/* size */}
          {/* <div className=" text-lime-50 flex gap-4">
            <button className=" size-btn ">Small</button>
            <button className=" size-btn ">Medium</button>
            <button className=" size-btn">Large</button>
          </div> */}
          {/* Quantity */}
          <div className=" flex  items-center text-red-600 cursor-pointer gap-4 text-xl select-none ">
            <IoCaretBackOutline onClick={isAdded? null:decreaseQty} />
            <span>{quantity}</span>
            <IoCaretForwardOutline onClick={isAdded? null:increaseQty } />
          </div>
          <div>
            <button
              onClick={isadd}
              className={`${isAdded? "bg-red-600 text-white hover:bg-red-500  px-[38px]": "text-red-600 bg-amber-400 hover:bg-amber-300"}  py-1 px-4 rounded-md font-bold `}
            >
              {isAdded? "CANCEL" : "ADD TO CART"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderMenu;
