// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyB151TmA8MM-CYPLxaAaI_ebBieUUUMS1I",
    authDomain: "clone-a3f27.firebaseapp.com",
    projectId: "clone-a3f27",
    storageBucket: "clone-a3f27.appspot.com",
    messagingSenderId: "308515874409",
    appId: "1:308515874409:web:8a002da1ac51deb8dd64f8",
    measurementId: "G-47ZFLE382N"
  };










const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

 export const auth = firebase.auth();


export const provider = new firebase.auth.GoogleAuthProvider();

export default db;
