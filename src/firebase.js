import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB6ZTlQMyyS6Fa08REmaF4v3MIhRjR0i-U",
  authDomain: "taller-react-firebase-9.firebaseapp.com",
  projectId: "taller-react-firebase-9",
  storageBucket: "taller-react-firebase-9.appspot.com",
  messagingSenderId: "142353291661",
  appId: "1:142353291661:web:22618412717689c37f45c4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
