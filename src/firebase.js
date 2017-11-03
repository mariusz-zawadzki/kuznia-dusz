import firebase from 'firebase'
require("firebaase/firestore");

let config = {
  apiKey: "AIzaSyDBF6MaupuuexWvdt54OW7t5UHcs1rAijo",
  authDomain: "kuznia-dusz.firebaseapp.com",
  databaseURL: "https://kuznia-dusz.firebaseio.com",
  projectId: "kuznia-dusz",
  storageBucket: "kuznia-dusz.appspot.com",
  messagingSenderId: "794297029805"
};
const fbase = firebase.initializeApp(config);
export default fbase;