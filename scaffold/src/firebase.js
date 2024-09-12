
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOlKRlNZtUwEjubVThbnIOifWpc1D9hkM",
  authDomain: "photofolio-a707e.firebaseapp.com",
  projectId: "photofolio-a707e",
  storageBucket: "photofolio-a707e.appspot.com",
  messagingSenderId: "231860642974",
  appId: "1:231860642974:web:2dcd3d1f051e96fa87c78f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};