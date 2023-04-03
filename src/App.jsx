import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Order from "./components/Order";
import Navbar from "./Head-Foot/Navbar";
// import { ContextCustom } from "./context/Context";
import Home from "./pages/Home"

const App = () => {
  
  return (
    <div>
      
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/nav" element={<Navbar/>}/>
        <Route path="/order" element={<Order />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      
    </div>
  );
};

export default App;
