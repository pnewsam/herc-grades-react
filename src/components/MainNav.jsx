import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/lib/Navbar";
import Nav from "react-bootstrap/lib/Nav";
import NavItem from "react-bootstrap/lib/NavItem";
import Button from "react-bootstrap/lib/Button";

const MainNav = () => {
  return(
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">Herc Grades</Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem>
          <Link to="/courses">Courses</Link>
        </NavItem>
      </Nav>
      <Nav pullRight>
        <Navbar.Form>
          <Link to="/login">
            <Button bsStyle="primary" type="submit">Login</Button>
          </Link>
        </Navbar.Form>
      </Nav>
    </Navbar>
  )
}

export default MainNav;