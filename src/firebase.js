import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBsjzYRCdyvugwGQ-nbzvQcixxdYSkYl1U",
  authDomain: "manashmodi-f8116.firebaseapp.com",
  projectId: "manashmodi-f8116",
  storageBucket: "manashmodi-f8116.appspot.com",
  messagingSenderId: "41898709464",
  appId: "1:41898709464:web:858045012ce014750fa2ad"
};

export const App = initializeApp(firebaseConfig);
export const db = getFirestore();

