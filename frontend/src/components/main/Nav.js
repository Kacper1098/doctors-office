import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import './main.css'
import {TiPlusOutline} from "react-icons/ti";
import NavDropdown from "react-bootstrap/NavDropdown";

class Navigation extends Component {

  render() {
    return (
      <div id="nav-component">
        <Navbar collapseOnSelect bg="light" expand="lg">
          <Navbar.Brand className="nav-item" as={Link} to="/">
            <TiPlusOutline id="logoIcon" size={"30"}/> KS MED
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            <Nav className="mr-auto-right">
              <Nav.Link eventKey="1" className="nav-item" as={Link} to="/">
                Strona główna
              </Nav.Link>
              <NavDropdown title={"Wizyta"} id={"visitDropdown"}>
                  <NavDropdown.Item eventKey={2.1} as={Link} to={"/visit"}>Umów wizytę</NavDropdown.Item>
                  <NavDropdown.Item eventKey={2.2} as={Link} to={"/visitPreview"}>Wyszukaj wizyty</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                  eventKey="3"
                  className="nav-item"
                  as={Link}
                  to="/contact"
              >
                Kontakt
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
