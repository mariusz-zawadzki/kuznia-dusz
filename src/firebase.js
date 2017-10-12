import firebase from 'firebase'

let config = {
  apiKey: "AIzaSyDBF6MaupuuexWvdt54OW7t5UHcs1rAijo",
  authDomain: "kuznia-dusz.firebaseapp.com",
  databaseURL: "https://kuznia-dusz.firebaseio.com",
  projectId: "kuznia-dusz",
  storageBucket: "kuznia-dusz.appspot.com",
  messagingSenderId: "794297029805"
};
export default firebase.initializeApp(config);