import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

const config = {
  apiKey: 'your_api_key',
  authDomain: 'your_db_name.firebaseio.com',
  databaseURL: 'https://your_db_name.firebaseio.com/'
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;
