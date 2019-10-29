
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: "all-social-auth",
    storageBucket: "all-social-auth.appspot.com",
    messagingSenderId: "238685329888",
    appId: "1:238685329888:web:403dec904edcf3cce23385",
    measurementId: "G-SR2F8BXLBG"
  };

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;
