
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyBahBdO4zN6CTFiMwvPj1Be2dlhLrINRWM",
  authDomain: "fir-auth-e6c2b.firebaseapp.com",
  projectId: "fir-auth-e6c2b",
  storageBucket: "fir-auth-e6c2b.firebasestorage.app",
  messagingSenderId: "495486336706",
  appId: "1:495486336706:web:8d32010595ce80d0cc455b"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);