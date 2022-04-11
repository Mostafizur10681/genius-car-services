// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBRss95xqXAT0nfMhUyQ_X-LP3GJkri4zE",
    authDomain: "genius-car-services-5f129.firebaseapp.com",
    projectId: "genius-car-services-5f129",
    storageBucket: "genius-car-services-5f129.appspot.com",
    messagingSenderId: "595518772723",
    appId: "1:595518772723:web:271bb0d97843f0d706ee86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;