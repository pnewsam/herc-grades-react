import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';
import "bulma/css/bulma.css";

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

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