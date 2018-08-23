import firebase from "firebase";
import firestore from "firebase/firestore";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAN8vjThVN0sYkTy9zXDJnHIFd1037mD64",
  authDomain: "vuejs-ninja-smoothies.firebaseapp.com",
  databaseURL: "https://vuejs-ninja-smoothies.firebaseio.com",
  projectId: "vuejs-ninja-smoothies",
  storageBucket: "vuejs-ninja-smoothies.appspot.com",
  messagingSenderId: "2783855734"
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true });

// export firestore database
export default firebaseApp.firestore();
