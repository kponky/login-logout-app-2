// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD_HoU6mZ7BaS62XLLxT2WIDKojUU87jRs",
  authDomain: "signup-signin-app1.firebaseapp.com",
  projectId: "signup-signin-app1",
  storageBucket: "signup-signin-app1.appspot.com",
  messagingSenderId: "868761426782",
  appId: "1:868761426782:web:757672b9811d7aeadc4dcf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth,provider};