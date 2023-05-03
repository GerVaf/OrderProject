import React from "react";
import { BsArrowRight } from "../../node_modules/react-icons/bs";
import {
  AiOutlineInstagram,
  AiFillFacebook,
  AiFillTwitterCircle,
} from "../../node_modules/react-icons/ai";
import { Carousel } from "@mantine/carousel";
import { rem } from "@mantine/core";

import orange from "../image/orange.jpeg";
import orange1 from "../image/orange1.jpeg";
import orange2 from "../image/orange2.jpeg";
import orange3 from "../image/orange3.jpeg";
import { Image } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const First = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="sm:flex ">
        <div className="sm:flex flex justify-center my-10 gap-10 sm:m-0 sm:w-8/12 sm:my-20 sm:justify-center">
          <div className="flex flex-col gap-4 text-xl sm:text-3xl text-orange-500 sm:gap-16 sm:flex sm:flex-col  sm:pr-10">
            <AiOutlineInstagram />
            <AiFillFacebook />
            <AiFillTwitterCircle />
          </div>
          <div className="sm:text-[80px] font-bold text-[20px] sm:ml-[300px] text-orange-500">
            GRANDE VALUE <br /> SECRET -2023 <br /> YORK
          </div>
        </div>

        {/* carousel */}
        <div className="hidden sm:block sm:w-4/12 sm:my-20 cursor-pointer">
          <Carousel
            slideSize="70%"
            height={300}
            slideGap="md"
            dragFree
            withControls={false}
            withIndicators
            styles={{
              indicator: {
                width: rem(25),
                height: rem(10),
              },
            }}
          >
            <Carousel.Slide>
              <Image src={orange} />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image src={orange1} />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image src={orange2} />
            </Carousel.Slide>
          </Carousel>
        </div>
        {/* for mobile */}
        <div className="block sm:hidden sm:w-4/12 sm:my-20 cursor-pointer mb-10">
          <Carousel
            slideSize="70%"
            height={200}
            slideGap="md"
            dragFree
            withControls={false}
            withIndicators
            styles={{
              indicator: {
                width: rem(25),
                height: rem(10),
              },
            }}
          >
            <Carousel.Slide>
              <Image src={orange} />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image src={orange1} />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image src={orange2} />
            </Carousel.Slide>
          </Carousel>
        </div>
      </div>

      <div className="flex flex-col gap-5 m-5 sm:m-0 sm:flex-row sm:flex sm:gap-5">
        <img
          className=" rounded-md w-[100%] h-[200px] sm:w-4/12 sm:h-[30vh] object-cover object-top"
          src={orange3}
          alt=""
        />

        <div className="sm:w-5/12 sm:text-lg sm:flex sm:justify-center">
          <p className=" sm:w-3/5">
            Welcome to NAMI! We're here to assist you in finding the perfect
            outfit. Are you looking for something specific or do you need help
            exploring our collection? We have a wide variety of styles to choose
            from, so whether you're looking for something casual, formal, or
            anything in between, we're confident that we can find something
            you'll love. Let me know if you have any questions or if there's
            anything else We can do to help out!
          </p>
        </div>
        <div className="sm:w-3/12 flex justify-end sm:flex sm:justify-center sm:items-end">
          <button
            onClick={() => navigate("/home")}
            className="bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center gap-5 text-white hover:from-yellow-300 transition duration-300 hover:to-orange-400 rounded-sm font-bold sm:py-10 sm:px-16 py-5 px-3"
          >
            View All About Fashion
            <BsArrowRight className="text-xl" />
          </button>
        </div>
      </div>
    </>
  );
};

export default First;
