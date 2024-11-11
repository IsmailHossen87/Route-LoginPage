// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA07IFeQ0WEZTJ49YJlcxJO08GODANJhhs",
  authDomain: "route-loginpage.firebaseapp.com",
  projectId: "route-loginpage",
  storageBucket: "route-loginpage.firebasestorage.app",
  messagingSenderId: "273892921167",
  appId: "1:273892921167:web:1544e26a57e370be9a3f3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
export default auth;