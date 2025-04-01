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
  apiKey: "AIzaSyBY9syzM7q2AZDKpbx9NCXGyheB1qSMFQw",
  authDomain: "smoodle-fe977.firebaseapp.com",
  databaseURL: "https://smoodle-fe977-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "smoodle-fe977",
  storageBucket: "smoodle-fe977.firebasestorage.app",
  messagingSenderId: "825831455390",
  appId: "1:825831455390:web:5a979e0bf0a4534673d98f",
  measurementId: "G-E3VZ9KEBDV"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
const analytics = getAnalytics(FIREBASE_APP);