// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtVt3h4CsCnqieKCR1PKsHLdEPVfvTqFA",
  authDomain: "netflixgpt-cfcf8.firebaseapp.com",
  projectId: "netflixgpt-cfcf8",
  storageBucket: "netflixgpt-cfcf8.appspot.com",
  messagingSenderId: "225715718562",
  appId: "1:225715718562:web:f1f216f57ae79adc2e8afb",
  measurementId: "G-KXM2X492F5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
