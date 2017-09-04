import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Login/Login";
import Courses from "./components/Courses/Courses";
import Navbar from "./components/Navbar";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="section">
            <div className="container">
              <Route exact path="/" component={Home}/>
              <Route path="/login" component={Login}/>
              <Route path="/courses" component={Courses}/>
            </div>
          </div>
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
