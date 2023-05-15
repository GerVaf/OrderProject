import React from "react";
import { useNavigate } from "react-router-dom";
import { SiWikidata } from "../../node_modules/react-icons/si";
import heroImage from "../image/hero.jpeg";
import { motion } from "framer-motion";

const Hero = () => {
  const navigate = useNavigate();

  const fromTo = {
    hidden: {
      y: 1000,
      transition: {
        duration: 1,
      },
    },
    visible: {
      y: 0,
    },
  };
  return (
    <>
      <div className="sm:flex sm:justify-center sm:items-center relative">
        <div className="sm:w-[100%] sm:rounded-lg sm:my-5">
          <img
            className=" sm:rounded-md w-[100%] h-[60vh] object-cover sm:h-[90vh] object-bottom sm:object-bottom sm:w-[100%]"
            src={heroImage}
            alt=""
          />
        </div>
        <div className="sm:text-[50px] top-5 left-10 sm:left-60 sm:top-5 absolute text-orange-600 font-bold flex">
          <SiWikidata />
        </div>

        <div className="absolute overflow-hidden bottom-60 flex sm:block justify-center w-[100%] sm:bottom-20 sm:left-60 font-bold ">
          <motion.button
            variants={fromTo}
            initial="hidden"
            animate="visible"
            className=" border border-white text-gray-500 sm:text-white hover:text-gray-100 transition duration-300 bg-transparent py-2 px-5 rounded-l-md"
          >
            2023 LookBook
          </motion.button>
          <motion.button
            variants={fromTo}
            initial="hidden"
            animate="visible"
            onClick={() => navigate("/order")}
            className=" border border-white text-orange-600 hover:bg-gray-50 hover:text-orange-500 transition duration-300 bg-white py-2 px-5 rounded-r-md"
          >
            SHOP NOW
          </motion.button>
        </div>
        <motion.div
          variants={fromTo}
          initial="hidden"
          animate="visible"
          className=" overflow-hidden hidden sm:block absolute bottom-40 sm:bottom-20 sm:right-60 font-bold "
        >
          <p className="text-gray-500 sm:text-white sm:text-xl">
            Contemporary fashion brand , facuses on designing and <br />{" "}
            producing minimalist , high-quality clothing and accessores.
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
