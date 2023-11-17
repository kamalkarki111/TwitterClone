import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-SSXbNGwLW9Mh6gjBHAm4ijUB09Yuzoo",
  authDomain: "twitter-clone-7d5f0.firebaseapp.com",
  projectId: "twitter-clone-7d5f0",
  storageBucket: "twitter-clone-7d5f0.appspot.com",
  messagingSenderId: "358744646323",
  appId: "1:358744646323:web:c1486d76287dfc8a3a06c6",
  measurementId: "G-FV6F8KCPF3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);



