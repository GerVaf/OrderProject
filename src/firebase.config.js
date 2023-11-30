import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCfCIAAVYoXQQy_0jDd793jzdnaPPkxsG0",
  authDomain: "blah-feb50.firebaseapp.com",
  projectId: "blah-feb50",
  storageBucket: "blah-feb50.appspot.com",
  messagingSenderId: "604582476489",
  appId: "1:604582476489:web:fbdf9afeb0509914696b18",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
