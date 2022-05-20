// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdkiQhNbsOkZHNa93IxMrjpnnDyhHsSmk",
  authDomain: "piotrobotics-fe0cf.firebaseapp.com",
  projectId: "piotrobotics-fe0cf",
  storageBucket: "piotrobotics-fe0cf.appspot.com",
  messagingSenderId: "291095705624",
  appId: "1:291095705624:web:4893b7281e101d02522b6d",
  measurementId: "G-N7BVRG5544",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
