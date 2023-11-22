// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBz6hZxDTyJOkAXORdnyL0EW3UqF0zEtHQ",
    authDomain: "eventos-eve.firebaseapp.com",
    projectId: "eventos-eve",
    storageBucket: "eventos-eve.appspot.com",
    messagingSenderId: "569763835824",
    appId: "1:569763835824:web:efc656d1f3f8bf32ea3075",
    measurementId: "G-CNK6QNPEJ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }