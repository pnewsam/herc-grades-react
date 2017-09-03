import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import MainNav from "./components/MainNav";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <MainNav />
          <Route exact path="/" component={Home}/>
        </div>
      </Router>
    );
  }
}

const Home = () => {
  return(
    <h1>Home</h1>
  )
}

export default App;
