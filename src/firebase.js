import firebase from 'firebase'
require("firebase/firestore");

let config = {
  apiKey: "AIzaSyDBF6MaupuuexWvdt54OW7t5UHcs1rAijo",
  authDomain: "kuznia-dusz.firebaseapp.com",
  databaseURL: "https://kuznia-dusz.firebaseio.com",
  projectId: "kuznia-dusz",
  storageBucket: "kuznia-dusz.appspot.com",
  messagingSenderId: "794297029805"
};
const fbase = firebase.initializeApp(config);

export const firestore = firebase.firestore().enablePersistence();

export default fbase;