import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyDAU-jHj4vve2cS-FPJmNDyxC2xPju1exQ",
    authDomain: "reactfirestore-92241.firebaseapp.com",
    projectId: "reactfirestore-92241",
    storageBucket: "reactfirestore-92241.appspot.com",
    messagingSenderId: "381851899963",
    appId: "1:381851899963:web:a2390a55c3c287f21ce41e"
};
firebase.initializeApp(config);
firebase.firestore().settings(settings);

export default firebase;
