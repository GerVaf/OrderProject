import React, { createContext, useContext, useEffect, useReducer, useState } from "react";
import Navbar from "../Head-Foot/Navbar";
import Social from "../Head-Foot/Social";
import { reducer } from "./reducer";
import "./Context.css";
import Loading from "./Loading/Loading";
import { supabase } from "../Supabase/supabase";

const ContextState = createContext();

export const ContextStateProvider = ({ children }) => {
  const [item, setItem] = useState([]);
  const [isLoad, setIsLoad] = useState(false);

  const FetchData = async () => {
    setIsLoad(true);
    try {
      let { data, error } = await supabase
        .from('Clothes')
        .select("*");
      
      if (error) throw error;
      
      const newData = data.map(el => ({
        ...el,
        quantity: 0,
        originalPrice: el.price,
        added: false,
      }));

      setItem(newData);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
    setIsLoad(false);
  };

  console.log(item);

  useEffect(() => {
    FetchData();
  }, []);

  useEffect(() => {
    dispatch({ type: "SHOW_ITEM", payload: item });
  }, [item]);

  const InitialState = {
    items: [],
    cart: [],
  };

  const [state, dispatch] = useReducer(reducer, InitialState);

  const data = { state, dispatch };

  return (
    <ContextState.Provider value={data}>
      {isLoad ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          {children}
          <Social />
        </>
      )}
    </ContextState.Provider>
  );
};

export const ContextCustom = () => useContext(ContextState);
