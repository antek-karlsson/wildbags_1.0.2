import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDzUH_s7Dbiy_crH7Zhv29fY4yV6xbJZj0",
  authDomain: "wildbags-demo.firebaseapp.com",
  projectId: "wildbags-demo",
  storageBucket: "wildbags-demo.appspot.com",
  messagingSenderId: "454333856327",
  appId: "1:454333856327:web:2d87d78804b2433bf08f62",
};

const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage();
const auth = getAuth();
const db = getFirestore(firebaseApp);
