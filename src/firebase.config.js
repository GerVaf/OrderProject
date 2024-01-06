import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA5VbZgkoLRh5DNKprMiOxptY9K9yowB_8",
  authDomain: "goof-389c6.firebaseapp.com",
  projectId: "goof-389c6",
  storageBucket: "goof-389c6.appspot.com",
  messagingSenderId: "276539208836",
  appId: "1:276539208836:web:98fbfc9f53a48816a8bed1",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
