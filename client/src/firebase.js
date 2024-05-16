// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "getfit-64cc6.firebaseapp.com",
  projectId: "getfit-64cc6",
  storageBucket: "getfit-64cc6.appspot.com",
  messagingSenderId: "458697020803",
  appId: "1:458697020803:web:302187e02d2d7ff88512b6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);