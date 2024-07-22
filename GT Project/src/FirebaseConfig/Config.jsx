import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { getStorage } from "firebase/storage"; 

const firebaseConfig = {
  apiKey: "AIzaSyBV03hfp2WQ-wph7B8DI7ThdA6j0phrTU4",
  authDomain: "project-4-bbf17.firebaseapp.com",
  databaseURL:
    "https://project-4-bbf17-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "project-4-bbf17",
  storageBucket: "project-4-bbf17.appspot.com",
  messagingSenderId: "5389523991",
  appId: "1:5389523991:web:24a1e46f898d820c39d052",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const storage = getStorage(app); 
const dbURL =
  "https://project-4-bbf17-default-rtdb.europe-west1.firebasedatabase.app";
const auth = getAuth(app);
const createUser = createUserWithEmailAndPassword;
const sendEmailLink = sendEmailVerification;
const loginFirebase = signInWithEmailAndPassword;

export {
  db,
  dbURL,
  auth,
  signInWithPopup,
  createUser,
  sendEmailLink,
  loginFirebase,
  GoogleAuthProvider,
  storage
};
