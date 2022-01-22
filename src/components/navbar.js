import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, NavDropdown,NavItem } from 'react-bootstrap';
import '../dist/navbar.css';
import {Link} from 'react-router-dom';


function NavbarPage () {


  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href = "/homepage">Fandom Web</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    <NavItem>
      <Nav.Link>
        <Link className = "nav-links" to = "/homepage">Home</Link>
      </Nav.Link>
  </NavItem>
  <NavItem>
    <Nav.Link>
      <Link to = "/about" className = "nav-links">About</Link>
    </Nav.Link>
 </NavItem>
 <NavItem>
    <Nav.Link>
      <Link to = '/post' className = "nav-links">Entry</Link>
    </Nav.Link>
 </NavItem>
    
      <NavDropdown title="Fandom" id="collasible-nav-dropdown">
        <NavDropdown.Item> 
        <Nav.Item>
           <Link to = '/anime' className = "dropDown-nav-links">Anime</Link>
        </Nav.Item>

        </NavDropdown.Item>
        <NavDropdown.Item>
          <Nav.Item>
            <Link to = '/kdrama' className = "dropDown-nav-links">Korean Actress/Actor</Link>
          </Nav.Item>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <Nav.Item>
            <Link to = '/kpop' className = "dropDown-nav-links">Korean pop Idols</Link>
          </Nav.Item>
        </NavDropdown.Item>
       

      </NavDropdown>
    </Nav>
    <Nav>
    <NavItem>
      <Nav.Link>
        <Link to = '/' className = "nav-links">Login</Link>
      </Nav.Link>
    </NavItem>
  </Nav>
  </Navbar.Collapse>
</Navbar>
  )
}
export default NavbarPage;