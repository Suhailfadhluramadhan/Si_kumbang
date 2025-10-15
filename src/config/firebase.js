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
  apiKey: "AIzaSyDrFxjpJUb30yxfCYI9g9LU96IZo2aCDE8",
  authDomain: "sikumbang-2dda3.firebaseapp.com",
  projectId: "sikumbang-2dda3",
  storageBucket: "sikumbang-2dda3.appspot.com",
  messagingSenderId: "245697312088",
  appId: "1:245697312088:web:d83ff03a7bca68443d212d",
  measurementId: "G-4N5GM7QP66"
};

// Init Firebase
const app = initializeApp(firebaseConfig);

// ✅ pastikan ada export
export const db = getFirestore(app);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
