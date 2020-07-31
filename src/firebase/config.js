import * as firebase from 'firebase'
import 'firebase/firestore';


// Optionally import the services that you want to use
//import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";



// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAmhHUyElB-Yx9VN3RxY7rpom1Lx4X77WA ",
  authDomain: "e-liberary-a8cc4.firebaseapp.com",
  databaseURL: "https://e-liberary-a8cc4.firebaseio.com",
  projectId: "e-liberary-a8cc4",
  storageBucket: "e-liberary-a8cc4.appspot.com",
  messagingSenderId: "1014021675526",
  appId: "1:1014021675526:android:31ebe73da3e9b530de4187",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}