import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyDyyaTGhQRiuhnmBfxleVdZ_Gm041eYlGQ",
    authDomain: "react-19770-gonzalo.firebaseapp.com",
    projectId: "react-19770-gonzalo",
    storageBucket: "react-19770-gonzalo.appspot.com",
    messagingSenderId: "287051950960",
    appId: "1:287051950960:web:f55885adba6c481eb8fdb5"
    };

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)