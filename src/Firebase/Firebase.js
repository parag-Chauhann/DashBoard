// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1HI4iTFYBrgpatx0DbogxSi6USd686ow",
  authDomain: "dashbard-assignment.firebaseapp.com",
  projectId: "dashbard-assignment",
  storageBucket: "dashbard-assignment.appspot.com",
  messagingSenderId: "245086797690",
  appId: "1:245086797690:web:3ceed0e2b86e01a4cd20c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);