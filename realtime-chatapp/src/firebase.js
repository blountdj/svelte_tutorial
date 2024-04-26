import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDVeKb2_dXbT7B3RSs9KOHwdw_QPgjmMro",
    authDomain: "realtime-chatapp-b0f63.firebaseapp.com",
    projectId: "realtime-chatapp-b0f63",
    storageBucket: "realtime-chatapp-b0f63.appspot.com",
    messagingSenderId: "721456191212",
    appId: "1:721456191212:web:f12ad90679d301516ef7c9"
};
  
const app = initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const db = firebase.firestore();
