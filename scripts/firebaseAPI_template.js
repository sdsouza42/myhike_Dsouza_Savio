//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
  apiKey: "AIzaSyDoJbK3eb4Au8M4gL6xFKeYmeouER_EK3g",
  authDomain: "comp1800-ds.firebaseapp.com",
  projectId: "comp1800-ds",
  storageBucket: "comp1800-ds.appspot.com",
  messagingSenderId: "716600974574",
  appId: "1:716600974574:web:7a39e2fe21196475b2a7ff"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();