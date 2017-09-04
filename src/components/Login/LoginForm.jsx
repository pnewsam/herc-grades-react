import React, { Component } from "react";
import FormGroup from "react-bootstrap/lib/FormGroup";
import FormControl from "react-bootstrap/lib/FormControl";
import ControlLabel from "react-bootstrap/lib/ControlLabel";
import Button from "react-bootstrap/lib/Button";
import Col from "react-bootstrap/lib/Col";
import PageHeader from "react-bootstrap/lib/PageHeader";

class LoginForm extends Component {
  constructor(props){
    super(props);
    this.state={
      email: '',
      pass: '',
      passConf: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  render(){
    return(
      <Col md={8} mdOffset={2}>
        <PageHeader >Login</PageHeader>
        <form>
          <FormGroup
            controlId="email"
          >
            <ControlLabel>Email</ControlLabel>
            <FormControl
              type="text"
              placeholder="Enter email here..."
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup
            controlId="pass"
          >
            <ControlLabel>Password</ControlLabel>
            <FormControl
              type="password"
              placeholder="Enter password here..."
              value={this.state.pass}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup
            controlId="passConf"
          >
            <ControlLabel>Confirm Password</ControlLabel>
            <FormControl
              type="password"
              placeholder="Retype password here..."
              value={this.state.passConf}
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button type="submit" bsStyle="primary">Submit</Button>
        </form>
      </Col>
    )
  }
}

export default LoginForm;