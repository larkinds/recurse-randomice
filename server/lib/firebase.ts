import { getStorage, ref } from 'firebase/storage'
import { initializeApp } from "firebase/app";
import { FIREBASE_KEY } from '../utils/config';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: FIREBASE_KEY,
  authDomain: "recurse-icecream.firebaseapp.com",
  projectId: "recurse-icecream",
  storageBucket: "recurse-icecream.appspot.com",
  messagingSenderId: "26283755226",
  appId: "1:26283755226:web:c811d0a507a6d75ed107e3",
  measurementId: "G-GSGKPYJFDD"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage();