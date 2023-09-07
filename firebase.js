// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";




const firebaseConfig = {
  apiKey: "AIzaSyAjq1mijCbLgjduzQc5v7tQFhCNn-5pxP4",
  authDomain: "i-made-trades-53248.firebaseapp.com",
  projectId: "i-made-trades-53248",
  storageBucket: "i-made-trades-53248.appspot.com",
  messagingSenderId: "509601199252",
  appId: "1:509601199252:web:da7bb72c86bf3659c87081"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const db = getFirestore();

export {auth,db};