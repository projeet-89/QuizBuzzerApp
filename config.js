import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKw6aObEZ-AjxbVkZFSE7OMIHXmOwZuKI",
  authDomain: "quizbuzzerapp-fa70f.firebaseapp.com",
  databaseURL: "https://quizbuzzerapp-fa70f-default-rtdb.firebaseio.com",
  projectId: "quizbuzzerapp-fa70f",
  storageBucket: "quizbuzzerapp-fa70f.appspot.com",
  messagingSenderId: "773149491745",
  appId: "1:773149491745:web:ff10413f2718368b021960",
  measurementId: "G-LF4EPRVYWT"
};

firebase.initializeApp(firebaseConfig);

export default firebase.database();