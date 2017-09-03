import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Button from "react-bootstrap/lib/Button";
import Col from "react-bootstrap/lib/Col";

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
            <Route exact path="/login" component={Login}/>
          </Col>
        </div>
      </Router>
    );
  }
}

const Login = () => {
  return(
  <h1>Login</h1>
  )
}

const Home = () => {
  return(
    <h1>Home</h1>
  )
}

export default App;
