import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCHYfAcVMzfrz_4EXFA3UkGe0nIRiu0y_M",
  authDomain: "crwn-db-21197.firebaseapp.com",
  databaseURL: "https://crwn-db-21197.firebaseio.com",
  projectId: "crwn-db-21197",
  storageBucket: "crwn-db-21197.appspot.com",
  messagingSenderId: "273153863650",
  appId: "1:273153863650:web:8847d4c4b4c86f768bd3bb",
  measurementId: "G-WSKSTH304M"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
