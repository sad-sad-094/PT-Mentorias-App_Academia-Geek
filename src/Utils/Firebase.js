/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbAKuH3Zz_Y9GHnjwOG2rIy69a1k4pJbk",
  authDomain: "monitoriasapp-academiageek-sad.firebaseapp.com",
  projectId: "monitoriasapp-academiageek-sad",
  storageBucket: "monitoriasapp-academiageek-sad.appspot.com",
  messagingSenderId: "91276377297",
  appId: "1:91276377297:web:27410a6da5fd56731059f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export default app;
export { db, auth };
