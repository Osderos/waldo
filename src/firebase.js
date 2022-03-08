import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAN7aTX5SdAp6aPOHzO50SAhOkSWYezMVM",

  authDomain: "waldo-f0233.firebaseapp.com",

  projectId: "waldo-f0233",

  storageBucket: "waldo-f0233.appspot.com",

  messagingSenderId: "500118734484",

  appId: "1:500118734484:web:c4e2db81be362c50a75681",
};

initializeApp(firebaseConfig);
const db = getFirestore();
export default db;
