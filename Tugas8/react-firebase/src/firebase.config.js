// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth } from '@firebase/auth';
import { initializeApp } from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWfzrnPlukq71Tg3Mmp88zvaq_X7CjpZM",
  authDomain: "react-firebase-67b15.firebaseapp.com",
  projectId: "react-firebase-67b15",
  storageBucket: "react-firebase-67b15.appspot.com",
  messagingSenderId: "317773456505",
  appId: "1:317773456505:web:fbcd5e55eb7fa9d75020a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = firebase.auth();
const authentication = getAuth();
// const db = firebase.firestore();
// const storage = firebase.storage();

export { auth, authentication }