import firebase from 'firebase/app'
import 'firebase/firestore' 
import 'firebase/auth'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDr9YlV7GEQTmLas4jIpqLyWmRoRHm87bA",
    authDomain: "commerce-b072c.firebaseapp.com",
    projectId: "commerce-b072c",
    storageBucket: "commerce-b072c.appspot.com",
    messagingSenderId: "422078363600",
    appId: "1:422078363600:web:671ef99b734bfa2d3b6bd5",
    measurementId: "G-0QPYHE3HL4"
  };
  // init firebase
  firebase.initializeApp(firebaseConfig);
  const projectFirestore = firebase.firestore();
  const projectAuth = firebase.auth();
  const timestamp = firebase.firestore.Timestamp
  export { projectFirestore };
  export { projectAuth };
  export { timestamp };