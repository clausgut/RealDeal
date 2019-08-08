import React, { Component } from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Navbar, Nav, Form, FormControl, Button, NavDropdown} from 'react-bootstrap';


const nav_bar = {};


export default class index extends Component {
  render() {
    return (
      <div className="nav-bar">
        <Navbar variant="dark" style={nav_bar}>
          <Navbar.Brand href="#home">RealDeal</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#pricing">HotSales</Nav.Link>
            <NavDropdown title="Categories" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Fresh Produce</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Meat</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Bread, Cereal, Rice and Pasta</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Frozen Foods</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Miscellaneous Foods</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">Health & Beauty</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.7">Household</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.8">Office</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar>

      </div>
    )
  };
}




 

