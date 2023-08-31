// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCemWMyJZRHSst9iqqiFhivSVxpG-5N9_Q",
  authDomain: "signin-498f8.firebaseapp.com",
  projectId: "signin-498f8",
  storageBucket: "signin-498f8.appspot.com",
  messagingSenderId: "700224753249",
  appId: "1:700224753249:web:2812e9d6ccef88a61d6420",
  measurementId: "G-5X3QYPV8TW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);