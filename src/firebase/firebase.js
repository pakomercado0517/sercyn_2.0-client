// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwg_FiVYM_ZbJUilaxRSNtM9D_TdqzK2Q",
  authDomain: "sercyn-22d2f.firebaseapp.com",
  projectId: "sercyn-22d2f",
  storageBucket: "sercyn-22d2f.appspot.com",
  messagingSenderId: "132147555631",
  appId: "1:132147555631:web:c43f6112bc45a6d96c45da",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
