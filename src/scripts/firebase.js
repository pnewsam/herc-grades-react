import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAaBE7GfHVCx6TvXtg81-PHtZIe-cbR0c4",
  authDomain: "hercgrades.firebaseapp.com",
  databaseURL: "https://hercgrades.firebaseio.com",
  projectId: "hercgrades",
  storageBucket: "hercgrades.appspot.com",
  messagingSenderId: "105340824596"
};
firebase.initializeApp(config);
const database = firebase.database();

export default database;