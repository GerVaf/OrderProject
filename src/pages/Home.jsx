import React from "react";
import Hero from "../components/Hero";
import Items from "../components/Items";
import Navbar from "../components/Navbar";
import Social from "../components/Social";
import WhyUs from "../components/WhyUs";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <WhyUs />
      <Items />
      <Social/>
    </div>
  );
};

export default Home;
