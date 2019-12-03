import firebase from "firebase";
import firebaseApp from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId:"",
  storageBucket: "",
  messagingSenderId: ,
  
};



if (!firebaseApp.apps.length) {
  firebaseApp.initializeApp(config);
}

export default firebaseApp;


