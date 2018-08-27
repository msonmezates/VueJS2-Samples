import firebase from 'firebase';
import firestore from 'firebase/firestore';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAPOiVqJvVEa2j2o_UILxgFc1P4f150YqM",
  authDomain: "vue-geo-ninjas-e5a00.firebaseapp.com",
  databaseURL: "https://vue-geo-ninjas-e5a00.firebaseio.com",
  projectId: "vue-geo-ninjas-e5a00",
  storageBucket: "",
  messagingSenderId: "22890645296"
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true });

export default firebaseApp.firestore();