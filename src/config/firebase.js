// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore/lite";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxiXPjZvLHM6kIG1jbLLACs3mJUUzbgp8",
  authDomain: "tiktok-clone---jornadade-90609.firebaseapp.com",
  projectId: "tiktok-clone---jornadade-90609",
  storageBucket: "tiktok-clone---jornadade-90609.appspot.com",
  messagingSenderId: "896379980632",
  appId: "1:896379980632:web:56d2fec07fd8ec01bdf32d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
