import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCSW5auU3m9majdEz5RtVTHpaFOAFGBFtk",
  authDomain: "clothessho-ef41a.firebaseapp.com",
  projectId: "clothessho-ef41a",
  storageBucket: "clothessho-ef41a.appspot.com",
  messagingSenderId: "830299042130",
  appId: "1:830299042130:web:da4913a939c3f1cf604a8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)