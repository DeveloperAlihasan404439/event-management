
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDwakove-JZf69s8R4O4VQOhLdYHmCr7bs",
    authDomain: "social-projact.firebaseapp.com",
    projectId: "social-projact",
    storageBucket: "social-projact.appspot.com",
    messagingSenderId: "528170744036",
    appId: "1:528170744036:web:c0d886fcae72fe248954f1"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth