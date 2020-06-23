import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, } from 'react-router-dom';
import './header.css';

const sections = ["Home", "Projects", "Skills", "Profiles", "About", "Contact"]
// const styles = {
//   homeBackground: {backgroundColor: '#DDDDDD'},
// }
const Header = () => (

  <Navbar collapseOnSelect expand="sm" bg="light" variant="light">
    {/* // <Navbar collapseOnSelect expand="sm" style={styles.homeBackground}> */}
      <Navbar.Brand className="logo"><Link to="/home" style={{textDecoration: 'none', color: "#f11111"}} > Hozayfa El Rifai </Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto main-navbar ">
          {sections.map((section) => 
            <Nav.Link className="inactive link-decoration" key={section}>
              <Link to={section.toLowerCase()} className="navbar-mode" style={{textDecoration: 'none'}}> {section} </Link>
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
);


export default Header;
