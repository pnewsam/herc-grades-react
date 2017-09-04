import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Col from "react-bootstrap/lib/Col";

import Login from "./components/Login/Login";
import Courses from "./components/Courses/Courses";
import MainNav from "./components/MainNav";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <MainNav />
          <Col sm={12} md={10} mdOffset={1}>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/courses" component={Courses}/>
          </Col>
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
