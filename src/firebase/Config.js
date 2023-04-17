// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth} from 'firebase/auth';
import {getStorage} from 'firebase/storage';
import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-RevQ1yK9P2kM5mkAa2dcvZ4VyWYORYc",
  authDomain: "my-eshop-cover.firebaseapp.com",
  projectId: "my-eshop-cover",
  storageBucket: "my-eshop-cover.appspot.com",
  messagingSenderId: "330590864478",
  appId: "1:330590864478:web:97c3f84d1a9385ffcbe0cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;