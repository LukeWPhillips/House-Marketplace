// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgvPQPUmprMqo5Dk6mqzod3kSC2aYB31w",
  authDomain: "house-marketplace-app-2a89c.firebaseapp.com",
  projectId: "house-marketplace-app-2a89c",
  storageBucket: "house-marketplace-app-2a89c.appspot.com",
  messagingSenderId: "608812525887",
  appId: "1:608812525887:web:adc5024e708d1be2e70b8a",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
