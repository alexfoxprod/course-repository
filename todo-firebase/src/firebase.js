import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBYJhKAp_DDnYcoDmp-kVqK1ahjy2UltzU",
  authDomain: "todo-firebase-f99b9.firebaseapp.com",
  projectId: "todo-firebase-f99b9",
  storageBucket: "todo-firebase-f99b9.appspot.com",
  messagingSenderId: "143127618082",
  appId: "1:143127618082:web:cfa897e604497ba809207b",
  measurementId: "G-CQM8XC40DY",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
