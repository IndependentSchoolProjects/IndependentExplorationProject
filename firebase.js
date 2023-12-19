// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAA0kCR0cUWYTbFHd02HYy6NyxNW0iOPNk",
  authDomain: "independentschoolproject.firebaseapp.com",
  databaseURL: "https://independentschoolproject-default-rtdb.firebaseio.com",
  projectId: "independentschoolproject",
  storageBucket: "independentschoolproject.appspot.com",
  messagingSenderId: "890951439386",
  appId: "1:890951439386:web:6163d3fd134b9948626da3",
  measurementId: "G-NWM3EPKZY2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
