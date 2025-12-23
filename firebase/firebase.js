// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARdeEunm75RZYImhA68lVEKvbyqM-acP8",
  authDomain: "affirm-d3aba.firebaseapp.com",
  projectId: "affirm-d3aba",
  storageBucket: "affirm-d3aba.firebasestorage.app",
  messagingSenderId: "920867886574",
  appId: "1:920867886574:web:8b32911c0ad33ec0d02aff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;