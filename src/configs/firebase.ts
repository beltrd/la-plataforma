// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVkPv_1Jm4WyDRwH8v5tuHUnUQ9qYtlsw",
  authDomain: "guanaware.firebaseapp.com",
  databaseURL: "https://guanaware-default-rtdb.firebaseio.com",
  projectId: "guanaware",
  storageBucket: "guanaware.appspot.com",
  messagingSenderId: "618835745948",
  appId: "1:618835745948:web:c99fe0518fa0cb6c742159",
  measurementId: "G-24TZBSH177",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);

// Get Firebase Authentication instance
export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
