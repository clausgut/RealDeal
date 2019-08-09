import React, { Component } from 'react'
import './Navbar.css';
import axios from 'axios'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


export default class Navbar extends Component{
  constructor() {
      super()
      this.logout = this.logout.bind(this)
  }

  logout(event) {
      event.preventDefault()
      console.log('logging out')
      axios.post('/user/logout').then(response => {
        console.log(response.data)
        if (response.status === 200) {
          this.props.updateUser({
            loggedIn: false,
            username: null
          })
        }
      }).catch(error => {
          console.log('Logout error')
      })
    }

  render() {
      const loggedIn = this.props.loggedIn;
      console.log('navbar render, props: ')
      console.log(this.props);
      
      return (
          <nav className="navbar navbar-expand-sm bg-light navbar-light">
                      <div id="top-filler"></div>
                      <a className="navbar-brand" href="/">
                         
                      </a>
                          <h1 className="App-title">Gizmo</h1>
                      {loggedIn ? (
                          <section className="navbar-section">
                              <Link to="/forum" className="btn btn-link ml-5">
                                  <span className="text-secondary">stories</span>
                      </Link>
                              <Link to="#" className="btn btn-link text-secondary" onClick={this.logout}>
                              <span className="text-secondary">logout</span></Link>
                          </section>
                      ) : (
                          <section className="navbar-section">
                              <Link to="/" className="btn btn-link text-secondary ml-5">
                                  <span className="text-secondary">home</span>
                              </Link>
                              <Link to="/login" className="btn btn-link text-secondary">
                                  <span className="text-secondary">login</span>
                      </Link>
                              <Link to="/signup" className="btn btn-link">
                                  <span className="text-secondary">sign up</span>
                      </Link>
                              <Link to="/forum" className="btn btn-link">
                                  <span className="text-secondary">stories</span>
                      </Link>
                          </section>
                      )}
          </nav>

      );

  }
}



// const nav_bar = {};


// export default class index extends Component {
//   render() {
//     return (
//       <div className="nav-bar">
//         <Navbar variant="dark" style={nav_bar}>
//           <Navbar.Brand href="#home">RealDeal</Navbar.Brand>
//           <Nav className="mr-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#pricing">HotSales</Nav.Link>
//             <NavDropdown title="Categories" id="collasible-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Fresh Produce</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">Meat</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Bread, Cereal, Rice and Pasta</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.4">Frozen Foods</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.5">Miscellaneous Foods</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.6">Health & Beauty</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.7">Household</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.8">Office</NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar>

//       </div>
//     )
//   };
// }




 

