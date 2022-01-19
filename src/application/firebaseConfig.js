import { initializeApp } from "firebase/app";
import {FacebookAuthProvider, GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBkHk3Pzjbl69EQMv0XXznYw9zlQuUlUDU",
    authDomain: "as-703f0.firebaseapp.com",
    projectId: "as-703f0",
    storageBucket: "as-703f0.appspot.com",
    messagingSenderId: "856501148284",
    appId: "1:856501148284:web:49cefb231449790b49c7f9"
};

const app = initializeApp(firebaseConfig);

const google = new GoogleAuthProvider()

const db = getFirestore()

const facebook = new FacebookAuthProvider()

export {app, google, db, facebook}