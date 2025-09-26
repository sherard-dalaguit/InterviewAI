import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBSQtGIMoYEnO_aW6pOBVKVjYoyROOyyw8",
  authDomain: "interviewai-19a0d.firebaseapp.com",
  projectId: "interviewai-19a0d",
  storageBucket: "interviewai-19a0d.firebasestorage.app",
  messagingSenderId: "557340416034",
  appId: "1:557340416034:web:8647f94b8a493d0af1527b",
  measurementId: "G-GPGF74EC9S"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);