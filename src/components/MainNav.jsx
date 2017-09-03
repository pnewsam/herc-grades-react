import React, { Component } from "react";
import Navbar from "react-bootstrap/lib/Navbar";
import Nav from "react-bootstrap/lib/Nav";
import NavItem from "react-bootstrap/lib/NavItem";

const MainNav = () => {
  return(
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">React-Bootstrap</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav pullRight>
        <NavItem href="#">Link Right</NavItem>
        <NavItem href="#">Link Right</NavItem>
      </Nav>
    </Navbar>
  )
}

export default MainNav;