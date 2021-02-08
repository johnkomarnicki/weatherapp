import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBex2Vax5v79NGMYRDjFVDeFZ1kA20_AoI",
  authDomain: "weatherappyt.firebaseapp.com",
  projectId: "weatherappyt",
  storageBucket: "weatherappyt.appspot.com",
  messagingSenderId: "288142136182",
  appId: "1:288142136182:web:f82af1d83a340af0b36057",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();
