
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// console.log(import.meta.env.);
const firebaseConfig = {
    apiKey:import.meta.env.VITE_API_KEY,
    authDomain:import.meta.env.VITE_AUT_HDOMAIN,
    projectId:import.meta.env.VITE_PRO_JECTID,
    storageBucket:import.meta.env.VITE_STO_RAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_MES_SAGINGSENDERID,
    appId:import.meta.env.VITE_APP_ID,
  };
console.log(firebaseConfig)
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth