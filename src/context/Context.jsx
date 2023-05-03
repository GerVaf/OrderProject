import { collection, onSnapshot } from "firebase/firestore";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { db } from "../firebase.config";
import Navbar from "../Head-Foot/Navbar";
import Social from "../Head-Foot/Social";
import { reducer } from "./reducer";

const ContextState = createContext();

export const ContextStateProvider = ({ children }) => {
  const [item, setItem] = useState([]);

  const FetchData = () => {
    const collectionRef = collection(db, "items");
    onSnapshot(collectionRef, (docs) => {
      const data = [];
      docs.forEach((doc) => data.push({ id: doc.id, ...doc.data() }));
      const newData = data.map((el) => {
        el = { ...el, quantity: 0, originalPrice: el.price, added: false };
        return el;
      });
      setItem(newData);
    });
  };
  console.log(item)

  useEffect(() => {
    FetchData();
  }, []);

  useEffect(() => {
    dispatch({ type: "SHOW_ITEM", payload: item });
  }, [item]);
  
  const IntialState = {
    items: [],
    cart: [],
  };
  // console.log(IntialState);

  const [state, dispatch] = useReducer(reducer, IntialState);

  const data = { state, dispatch };
  return (
    <ContextState.Provider value={data}>
      <Navbar />
      {children}
      <Social />
    </ContextState.Provider>
  );
};

export const ContextCustom = () => useContext(ContextState);
