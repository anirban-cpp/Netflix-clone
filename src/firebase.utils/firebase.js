// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBx6mBlq4EcRDqYNVlSAWO05ASJuFhkPcU",
    authDomain: "netflix-clone-25eea.firebaseapp.com",
    projectId: "netflix-clone-25eea",
    storageBucket: "netflix-clone-25eea.appspot.com",
    messagingSenderId: "731414100845",
    appId: "1:731414100845:web:d01b2a2b7624dc0f1f7864",
    measurementId: "G-9WTXSJLPQQ"
  };

export const generateUserDocument = async (userAuth) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`Users/${userAuth.user.uid}`);

  const snapshot = await userRef.get();

  if(!snapshot.exists) {
      const createdAt = new Date();
      const email = userAuth.user.email;
      const Subscription = null;

      console.log(userAuth);

      try {
        await userRef.set({
          email,
          createdAt,
          Subscription
        });
      } catch(error) {
        alert('Error creating User ',error.message);
        console.log(error);
      }
    }
    return getUserDocument(userAuth.uid);
}

const getUserDocument = async uid => {
  if  (!uid) return null;
  try {
    const UserDocument = await firestore.doc(`Users/${uid}`).get();
    return {
      uid,
      ...UserDocument.data()
    };
  } catch (error) {
    console.log("Error fetching user ", error.message);
  }
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export { firestore };
export default db;