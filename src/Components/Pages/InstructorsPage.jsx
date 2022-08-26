/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BsCalendarCheck } from 'react-icons/bs';
import { BackButton, ContainerHelper, MainCard, MainContainer } from '../../Styles/GlobalStyles';
import NavbarUser from '../Modules/Navbar';
import '../../Styles/Main.css'

function InstructorsPage() {

  const navigation = useNavigate();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const userName = useSelector(state => state.userLogIn.name);

  return (

    <MainContainer>

      <NavbarUser />

      <ContainerHelper>

        <MainCard>

          <h1>Let's start {userName}</h1>
          <p>Next, you will find your teams' agendas.</p>

          <Table className="react-strap-table" striped bordered hover variant="dark">

            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>DNI</th>
                <th>Email</th>
                <th>Number</th>
                <th>Program</th>
                <th>Semester</th>
                <th>Agenda</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>1</td>
                <td>Sebastian</td>
                <td>Aguirre</td>
                <td>1234456789</td>
                <td>sadw621@gmail.com</td>
                <td>1234567894</td>
                <td>FrontEnd</td>
                <td>9</td>
                <td><BsCalendarCheck onClick={handleShow} style={{ cursor: 'pointer' }} /></td>
              </tr>

              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>Thornton</td>
                <td><BsCalendarCheck onClick={handleShow} style={{ cursor: 'pointer' }} /></td>
              </tr>

              <tr>
                <td>3</td>
                <td>Larry the Bird</td>
                <td>Thornton</td>
                <td>@twitter</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>Thornton</td>
                <td><BsCalendarCheck onClick={handleShow} style={{ cursor: 'pointer' }} /></td>
              </tr>

            </tbody>

          </Table>

          <Modal show={show} onHide={handleClose} variant="dark" contentClassName="modal-content">
            <Modal.Header closeButton>
              <Modal.Title>Sebastian's agenda</Modal.Title>
            </Modal.Header>
            <Modal.Body scrollable="true">
              These are the appointments available.

              <Table className="react-strap-table" striped bordered hover variant="dark">

                <thead>
                  <tr>
                    <th>#</th>
                    <th>Date</th>
                    <th>Course</th>
                    <th>Classroom</th>
                    <th>Instructor</th>
                  </tr>
                </thead>

                <tbody>

                  <tr>
                    <td>1</td>
                    <td>27/08/2022</td>
                    <td>Redux</td>
                    <td>101b</td>
                    <td>Sebastian</td>
                  </tr>

                </tbody>

              </Table>

            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={() => navigation("/newappointment")}>
                Add new appointment
              </Button>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>

          <BackButton onClick={() => navigation("/userhome")}>Back</BackButton>

        </MainCard>

      </ContainerHelper>

    </MainContainer>

  )

}

export default InstructorsPage;
