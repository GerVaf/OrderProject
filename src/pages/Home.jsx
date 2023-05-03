import React from "react";
import Card from "../components/Card";
import Hero from "../components/Hero";
import Items from "../components/Items";
import Service from "../components/Service";

const Home = () => {

  return (
    <div className=" overflow-x-hidden">
      <Hero />
      <Service />
      <Card/>
      <Items />
    </div>
  );
};

export default Home;
