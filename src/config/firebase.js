// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDrFxjpJUb30yxfCYI9g9LU96IZo2aCDE8",
//   authDomain: "sikumbang-2dda3.firebaseapp.com",
//   projectId: "sikumbang-2dda3",
//   storageBucket: "sikumbang-2dda3.firebasestorage.app",
//   messagingSenderId: "245697312088",
//   appId: "1:245697312088:web:d83ff03a7bca68443d212d",
//   measurementId: "G-4N5GM7QP66"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// src/config/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA3W1cdn1JUG3vuXn6ARwybLU9TwvyD6e0",
  authDomain: "si-kumbang.firebaseapp.com",
  projectId: "si-kumbang",
  storageBucket: "si-kumbang.firebasestorage.app",
  messagingSenderId: "768754425419",
  appId: "1:768754425419:web:cdee9fa72f814628e1f7ce",
  measurementId: "G-ES5GTWX0XX",
};
// Init Firebase
const app = initializeApp(firebaseConfig);

// ✅ pastikan ada export
export const db = getFirestore(app);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
