// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from 'firebase/auth';
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5wF2ISlr6jYBYOFzItxnGVT610gHn_rA",
  authDomain: "animalshelter-f7503.firebaseapp.com",
  projectId: "animalshelter-f7503",
  storageBucket: "animalshelter-f7503.firebasestorage.app",
  messagingSenderId: "754227558200",
  appId: "1:754227558200:web:d530a1b9b12110b75bb3cd",
  measurementId: "G-SNYYT6M16Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth=getAuth(app);