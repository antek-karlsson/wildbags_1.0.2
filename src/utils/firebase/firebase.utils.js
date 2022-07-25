import { initializeApp } from "firebase/app";
// import { getStorage } from "firebase/storage";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  // collection,
  // writeBatch,
  // query,
  // getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDzUH_s7Dbiy_crH7Zhv29fY4yV6xbJZj0",
  authDomain: "wildbags-demo.firebaseapp.com",
  projectId: "wildbags-demo",
  storageBucket: "wildbags-demo.appspot.com",
  messagingSenderId: "454333856327",
  appId: "1:454333856327:web:2d87d78804b2433bf08f62",
};

const firebaseApp = initializeApp(firebaseConfig);
// const storage = getStorage();
const auth = getAuth();
const db = getFirestore(firebaseApp);

export const createUserDoc = async (userAuth, additionalInformation = {}) => {
  console.log(userAuth);
  if (!userAuth) return;
  const userDocRef = await doc(db, "users", userAuth.user.uid);
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth.user;
    const createdAt = new Date();
    try {
      setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (err) {
      console.log(err);
    }
  }
  console.log("userDocRef OK");
  return userDocRef;
};

export const createUser = async (email, password) => {
  if (!email || !password) return;
  console.log("createUser OK");
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const logIn = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const logOut = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
