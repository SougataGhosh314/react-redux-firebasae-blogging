import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyCMCgCc4T00BPiW1lhAd5xTBogRgBfkWD8",
    authDomain: "busy-cauldron.firebaseapp.com",
    projectId: "busy-cauldron",
    storageBucket: "busy-cauldron.appspot.com",
    messagingSenderId: "100125276861",
    appId: "1:100125276861:web:e785c7a05c347d4e4795d4",
    measurementId: "G-NHW230QYZM"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;