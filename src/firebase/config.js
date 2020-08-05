import * as firebase from "firebase";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSPQ3WQkgVAvi07JNd5_GIcCz1j3OoPjc",
  authDomain: "firegram-7ee48.firebaseapp.com",
  databaseURL: "https://firegram-7ee48.firebaseio.com",
  projectId: "firegram-7ee48",
  storageBucket: "firegram-7ee48.appspot.com",
  messagingSenderId: "973600350328",
  appId: "1:973600350328:web:1d5d29d70798423079cd8d",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timestamp };
