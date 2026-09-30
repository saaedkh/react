//src/firebase/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBOABJKULkTlc7YGs7mcl8ar5cjG-Qpzu4",
  authDomain: "react-63d86.firebaseapp.com",
  projectId: "react-63d86",
  storageBucket: "react-63d86.appspot.com",
  messagingSenderId: "1076656163635",
  appId: "1:1076656163635:web:1bc15d4b998b8f00a48c46"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



export { app, auth };
