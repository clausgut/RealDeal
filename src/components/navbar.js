import React, { Component } from 'react'
import './style.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Navbar, Nav, Form, FormControl, Button, NavDropdown} from 'react-bootstrap';
import SearchForm from '../SearchForm';


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
         <SearchForm />
        </Navbar>

      </div>
    )
  };
}




    // <nav className="navbar navbar-light bg-light">
    //   <a className="navbar-brand" href="/">
    //     <img src="img" width="30" height="30" class="d-inline-block align-top" alt="" />
    //     RealDeal
    //   </a>

    //   {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //       <span className="navbar-toggler-icon"></span>
    //     </button> */}

    //   <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //     <ul className="navbar-nav mr-auto">
    //       <li className="nav-item active">
    //         <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
    //       </li>
    //       <li className="nav-item">
    //         <a className="nav-link" href="#">Link</a>
    //       </li>
    //       <li className="nav-item dropdown">
    //         <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    //           Dropdown
    //           </a>
    //         <div className="dropdown-menu" aria-labelledby="navbarDropdown">
    //           <a className="dropdown-item" href="#">Action</a>
    //           <a className="dropdown-item" href="#">Another action</a>
    //           <div className="dropdown-divider"></div>
    //           <a className="dropdown-item" href="#">Something else here</a>
    //         </div>
    //       </li>
    //       <li className="nav-item">
    //         <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
    //       </li>
    //     </ul>
    //     <form className="form-inline my-2 my-lg-0">
    //       <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
    //         <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    //       </input>
    //     </form>
    //   </div>

    // </nav>

