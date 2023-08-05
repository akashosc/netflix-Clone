// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBPfp75rM1YQm6ujTfvQO3n7V2AOKeKST8",
  authDomain: "react-netflix-clone-25d13.firebaseapp.com",
  projectId: "react-netflix-clone-25d13",
  storageBucket: "react-netflix-clone-25d13.appspot.com",
  messagingSenderId: "321997404274",
  appId: "1:321997404274:web:b20f7fc67ca80c55486aeb",
  measurementId: "G-39FGFWWD8M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth=getAuth(app);