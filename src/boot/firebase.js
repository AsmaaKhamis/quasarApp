// firebase App (the core firebase SDK) is always required and must be listed first
import firebase from 'firebase/app'




// Add the Firebase product that you want to use
import "firebase/auth";
import "firebase/database";



  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyA0s_HERAQOXM0eeYkMXN5zHO1KD3rIdnI",
    authDomain: "smackchat-9de96.firebaseapp.com",
    projectId: "smackchat-9de96",
    storageBucket: "smackchat-9de96.appspot.com",
    messagingSenderId: "1002725103011",
    appId: "1:1002725103011:web:c21209fccf007494913616",
    measurementId: "G-SSFW23K6MP"
  };
  // Initialize Firebase
  let firebaseApp = firebase.initializeApp(firebaseConfig);
  let firebaseAuth = firebaseApp.auth()
  let firebaseDb = firebaseApp.database()

  export{firebaseAuth,
    firebaseDb}
