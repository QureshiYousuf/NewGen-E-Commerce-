// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPsmbpl4KCjOyd7UTCLvd-xa_2BAtscAc",
  authDomain: "myreact-ecomm.firebaseapp.com",
  projectId: "myreact-ecomm",
  storageBucket: "myreact-ecomm.appspot.com",
  messagingSenderId: "899676627488",
  appId: "1:899676627488:web:b10200a3bfcd08859b1245",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };
