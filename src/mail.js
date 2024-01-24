// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpMmHvWlhHQGbuCvvP6BhtjIOFUb7MmXA",
  authDomain: "car-rental-54ce3.firebaseapp.com",
  databaseURL: "https://car-rental-54ce3-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "car-rental-54ce3",
  storageBucket: "car-rental-54ce3.appspot.com",
  messagingSenderId: "922000165794",
  appId: "1:922000165794:web:de3f8b6ccc3b9873bd40fb",
  measurementId: "G-HKT9EZYJ1Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);