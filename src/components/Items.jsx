import React from 'react'
import menuOne from "../assets/menu1.png"
import menuTwo from "../assets/menu2.png"
import menuThree from "../assets/menu3.png"
import menuFour from "../assets/menu4.png"
import menuFive from "../assets/menu5.png"
import menuSix from "../assets/menu6.png"

const Items = () => {
  return (
    <div>
        <div className="main-bg-color p-5">
            <h1 className=' text-center text-2xl font-color uppercase font-semibold'>pizza menu</h1>
            <div className=" w-3/4 mx-auto flex flex-wrap items-center justify-center mt-5 gap-7">
                <div className="">
                    <img src={menuOne} alt="..." className=' w-[250px]'/>
                    <p className=' font-color text-xl my-3'>Margherita Pizza</p>
                    <span className=' bg-white px-3 py-1 rounded-lg '>$25</span>
                </div>
                <div className="">
                    <img src={menuTwo} alt="..." className=' w-[250px]'/>
                    <p className=' font-color text-xl my-3'>Margherita Pizza</p>
                    <span className=' bg-white px-3 py-1 rounded-lg '>$25</span>
                </div>
                <div className="">
                    <img src={menuThree} alt="..." className=' w-[250px]'/>
                    <p className=' font-color text-xl my-3'>Margherita Pizza</p>
                    <span className=' bg-white px-3 py-1 rounded-lg '>$25</span>
                </div>
                <div className="">
                    <img src={menuFour} alt="..." className=' w-[250px]'/>
                    <p className=' font-color text-xl my-3'>Margherita Pizza</p>
                    <span className=' bg-white px-3 py-1 rounded-lg '>$25</span>
                </div>
                <div className="">
                    <img src={menuFive} alt="..." className=' w-[250px]'/>
                    <p className=' font-color text-xl my-3'>Margherita Pizza</p>
                    <span className=' bg-white px-3 py-1 rounded-lg '>$25</span>
                </div>
                <div className="">
                    <img src={menuSix} alt="..." className=' w-[250px]'/>
                    <p className=' font-color text-xl my-3'>Margherita Pizza</p>
                    <span className=' bg-white px-3 py-1 rounded-lg '>$25</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Items