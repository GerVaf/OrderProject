import React from "react";
import Hero from "../components/Hero";
import Items from "../components/Items";
import Service from "../components/Service";

const Home = () => {

  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <Service />
      <Items />
      {/* <Social/> */}
    </div>
  );
};

export default Home;
