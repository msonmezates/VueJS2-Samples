import firebase from "firebase";
import firestore from "firebase/firestore";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyChEWYcnQVoTc7nY50WrbzzxJqZGq3vAYI",
  authDomain: "vuejs-ninja-chat-fdb79.firebaseapp.com",
  databaseURL: "https://vuejs-ninja-chat-fdb79.firebaseio.com",
  projectId: "vuejs-ninja-chat-fdb79",
  storageBucket: "vuejs-ninja-chat-fdb79.appspot.com",
  messagingSenderId: "923867258646"
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true });

export default firebaseApp.firestore();
