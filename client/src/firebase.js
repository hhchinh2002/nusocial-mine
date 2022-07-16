// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0Zc89BXHAF_1cb3O4kbas-QqaSuCpn5g",
  authDomain: "nusocial-93f0e.firebaseapp.com",
  projectId: "nusocial-93f0e",
  storageBucket: "nusocial-93f0e.appspot.com",
  messagingSenderId: "9073533960",
  appId: "1:9073533960:web:9e3557269d35a1bcc95dbd",
  measurementId: "G-YGG5Y7P297"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);