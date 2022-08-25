/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import { NavbarImg } from '../../Styles/GlobalStyles';

function NavbarUser() {

  const navigation = useNavigate();

  const letLogout = () => {
    navigation("/home");
  }

  return (

    <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">

      <Container>

        <Navbar.Brand href="#home">Monitorías App</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="me-auto">
            <Nav.Link><NavbarImg src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1661377910/PT-Monitorias-App/calendar_icon-icons.com_66541_wwmk92.png" /></Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link onClick={() => {navigation("/userhome")}}>Home</Nav.Link>
            <Nav.Link eventKey={2} onClick={letLogout}>
              Logout
            </Nav.Link>
          </Nav>

        </Navbar.Collapse>

      </Container>

    </Navbar>
  )

}

export default NavbarUser;
