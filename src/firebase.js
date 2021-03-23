import firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';
import 'firebase/firestore';

// Configuration (mettez-y les vôtres !)
const firebaseConfig = {
  apiKey: "AIzaSyB59hy-uKr1sfRHsEoC2GFPFfboh59chu4",
  authDomain: "utilisateurs-ex4-3b8e2.firebaseapp.com",
  projectId: "utilisateurs-ex4-3b8e2",
  storageBucket: "utilisateurs-ex4-3b8e2.appspot.com",
  messagingSenderId: "909059696592",
  appId: "1:909059696592:web:5fc4b52c9b3aa5f23a3bd5",
  measurementId: "G-927ST4XN6S"
};

// Initialiser Firebase
if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Initialiser FirebaseUI
export const instanceFirebaseUI = new firebaseui.auth.AuthUI(firebase.auth());

// Initialiser Firestore
export const firestore = firebase.firestore();
