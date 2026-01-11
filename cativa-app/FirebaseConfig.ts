// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth} from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmqMYQQDt1DgfGqw7krEIG05wi6l406vw",
  authDomain: "cativa-cd938.firebaseapp.com",
  projectId: "cativa-cd938",
  storageBucket: "cativa-cd938.firebasestorage.app",
  messagingSenderId: "591278200165",
  appId: "1:591278200165:web:7c2174c6977feb3a2c3d8c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app);