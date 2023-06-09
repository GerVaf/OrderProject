import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA4i80OyfWA9C1hCcz52sC8y5O47ozp25o",
  authDomain: "clothshop-99bcc.firebaseapp.com",
  projectId: "clothshop-99bcc",
  storageBucket: "clothshop-99bcc.appspot.com",
  messagingSenderId: "156821718425",
  appId: "1:156821718425:web:8126110cf18d3c00f33f08"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)


