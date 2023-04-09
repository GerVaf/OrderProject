import React, { useRef, useState } from "react";
import { IoCaretBackOutline, IoCaretForwardOutline } from "react-icons/io5";
import Swal from "sweetalert2";
import { ContextCustom } from "../context/Context";
import image from "../image/pz.jpeg"

const OrderMenu = ({ item }) => {

  const {dispatch}=ContextCustom()

  const [quantity, setQuantity] = useState(item.quantity);

  const isadd = () =>{
    
    item.quantity > 0 ?
    
    [item.added
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

  const totalPrice = item.price*quantity
  return (
    <div className=" bg-amber-100 w-[90%] sm:w-4/6 rounded-md">
      <div className=" flex flex-col sm:flex-row sm:py-4 sm:px-40 sm:gap-14">
        <img src={image} className=" rounded-t-lg sm:rounded-lg" alt="" />
        <div className=" p-4 flex flex-col gap-4">
          <h2 className=" text-xl text-red-600 font-bold">{item.title}</h2>
          <p className=" font-extrabold text-amber-500">Per price: ${item.originalPrice}</p>
          <p className=" font-extrabold text-amber-500">Total amount: ${totalPrice}</p>
          {/* size */}
          {/* <div className=" text-lime-50 flex gap-4">
            <button className=" size-btn ">Small</button>
            <button className=" size-btn ">Medium</button>
            <button className=" size-btn">Large</button>
          </div> */}
          {/* Quantity */}
          <div className=" flex  items-center text-red-600 cursor-pointer gap-4 text-xl select-none ">
            <IoCaretBackOutline onClick={item.added? null:decreaseQty} />
            <span>{quantity}</span>
            <IoCaretForwardOutline onClick={item.added? null:increaseQty } />
          </div>
          <div>
          {item.added?<button
              onClick={()=>dispatch({type:"REMOVE_FROM_CART",payload:item})}
              className="bg-red-600 text-white hover:bg-red-500  px-[38px] py-1  rounded-md font-bold"
            >
              CANCEL
            </button>: <button
              onClick={isadd}
              className= "text-red-600 bg-amber-400 hover:bg-amber-300 py-1 px-4 rounded-md font-bold "
            >
              ADD TO CART
            </button> }
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderMenu;
