// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD33rFaHk7Y6YpCnGICSex1dkwKyq4nOaE",
  authDomain: "groupproject-53c9a.firebaseapp.com",
  projectId: "groupproject-53c9a",
  storageBucket: "groupproject-53c9a.firebasestorage.app",
  messagingSenderId: "981083796327",
  appId: "1:981083796327:web:dac7aa583fb49f2fc475c2",
  measurementId: "G-DGVVR7RYX7"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
const analytics = getAnalytics(FIREBASE_APP);