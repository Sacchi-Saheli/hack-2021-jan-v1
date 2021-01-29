import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyDDk8muzjNNzt3eBSJGToKfdyake46gN5c",
    authDomain: "hackthon-2021.firebaseapp.com",
    projectId: "hackthon-2021",
    storageBucket: "hackthon-2021.appspot.com",
    messagingSenderId: "476509358577",
    appId: "1:476509358577:web:2da3a0c05e8d8ee999dc50",
    measurementId: "G-KEVDC0VHQ4",
});

export const auth = app.auth();
export default app;
