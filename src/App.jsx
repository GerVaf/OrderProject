import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Order from "./components/Order";
import CreateItem from "./pages/CreateItem";
import First from "./pages/First";
import Home from "./pages/Home"

const App = () => { 
  
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<First/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/order" element={<Order />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/createitem" element={<CreateItem/>} />
      </Routes>
      
    </div>
  );
};

export default App;
