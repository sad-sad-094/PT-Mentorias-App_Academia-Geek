/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MainCard, MainContainer, NavbarImg, ContainerHelper } from '../../Styles/GlobalStyles';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function HomePage() {

  const navigation = useNavigate();

  const letLogin = () => {
    navigation("/login");
  }

  const letSignin = () => {
    navigation("/signin");
  }

  return (

    <MainContainer>

      <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">

        <Container>

          <Navbar.Brand href="#home">Monitorías App</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">

            <Nav className="me-auto">
              <Nav.Link><NavbarImg src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1661377910/PT-Monitorias-App/calendar_icon-icons.com_66541_wwmk92.png" /></Nav.Link>
            </Nav>

            <Nav>
              <Nav.Link onClick={letLogin}>LogIn</Nav.Link>
              <Nav.Link eventKey={2} onClick={letSignin}>
                SignIn
              </Nav.Link>
            </Nav>

          </Navbar.Collapse>

        </Container>

      </Navbar>

      <ContainerHelper>

        <MainCard>
          <h1>Welcome to Monitorías App</h1>
          <p>This is your app to manage your institution's instructors and their classes agendas.</p>
          <p>If you already have an account, please login to see your information, otherwise singin to our system.</p>
        </MainCard>

      </ContainerHelper>

    </MainContainer>
  )

}

export default HomePage;
