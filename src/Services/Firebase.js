// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { useNavigate } from "react-router-dom";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
 } from "firebase/auth";
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  where,
  query

} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4FTzXdYnZp1ASmVUWugJNEQSIcCpmysQ",
  authDomain: "myifce.firebaseapp.com",
  projectId: "myifce",
  storageBucket: "myifce.appspot.com",
  messagingSenderId: "905536320468",
  appId: "1:905536320468:web:23fc00bb2ff10bafbe9c41",
  measurementId: "G-XK1JEDF0PW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = async () => {
  console.log("Deslogando");
  await signOut(auth);
};

export {
  db,
  auth,
  collection,
  doc,
  addDoc,
  updateDoc,
  getDocs,
  deleteDoc,
  signInWithEmailAndPassword,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
};