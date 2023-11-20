import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyA_-tlKHd8WHiDaQKx9FfgDb07eeGrJBPg",
  authDomain: "gestor-app-54025.firebaseapp.com",
  projectId: "gestor-app-54025",
  storageBucket: "gestor-app-54025.appspot.com",
  messagingSenderId: "346768657521",
  appId: "1:346768657521:web:7b1789ddb58aa8eb399fd0"
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);

// Obtener instancias de servicios de Firebase.
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);