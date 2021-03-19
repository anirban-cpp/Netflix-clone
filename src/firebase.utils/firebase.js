// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBx6mBlq4EcRDqYNVlSAWO05ASJuFhkPcU",
    authDomain: "netflix-clone-25eea.firebaseapp.com",
    projectId: "netflix-clone-25eea",
    storageBucket: "netflix-clone-25eea.appspot.com",
    messagingSenderId: "731414100845",
    appId: "1:731414100845:web:d01b2a2b7624dc0f1f7864",
    measurementId: "G-9WTXSJLPQQ"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth }
export default db;