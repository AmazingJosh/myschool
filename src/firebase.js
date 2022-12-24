// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8RrGlzm22pf8W_WKLXHHfoLoQwFt8WCM",
  authDomain: "university-ea8c9.firebaseapp.com",
  projectId: "university-ea8c9",
  storageBucket: "university-ea8c9.appspot.com",
  messagingSenderId: "45665827552",
  appId: "1:45665827552:web:e7adcf6998e4ac1838ae85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth()
export default app