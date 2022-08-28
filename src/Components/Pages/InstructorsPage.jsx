/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { BsCalendarCheck } from 'react-icons/bs';
import { BackButton, ContainerHelper, HContainer, Input, Label, MainCard, MainContainer, SearchButton } from '../../Styles/GlobalStyles';
import NavbarUser from '../Modules/Navbar';
import '../../Styles/Main.css'
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../Utils/Firebase';
import { actionInstructorDNI } from '../../Redux/Actions/Actions';

function InstructorsPage() {

  const [instructorsData, setInstructorsData] = useState([]);
  const [instructorAgenda, setInstructorAgenda] = useState({ agenda: [], instructor: "" });
  const [instructorDNI, setInstructorDNI] = useState({ DNI: '' })

  const firebaseResponse = (response) => {
    let finalData = [];
    response.forEach((doc) => {
      finalData.push(doc.data())
    }, [finalData])
    setInstructorsData(finalData);
  }

  const getInstructor = (filter) => {
    let promiseData;
    if (filter === '') {
      promiseData = getDocs(collection(db, "MonitoresData"))
    } else {
      promiseData = getDocs(query(collection(db, "MonitoresData"), where("name", "==", filter)))
    }
    promiseData.then(firebaseResponse)
  }


  useEffect(() => {
    console.log('hi')
    getDocs(collection(db, "MonitoresData"))
      .then((response) => {
        let finalData = [];
        response.forEach((doc) => {
          finalData.push(doc.data())
        }, [finalData])
        console.log('hi2')
        setInstructorsData(finalData)
      })
  }, [setInstructorsData]);

  const navigation = useNavigate();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (agenda, name, DNI) => {
    setInstructorDNI({ DNI: DNI });
    setInstructorAgenda({ agenda: agenda, instructor: name });
    setShow(true);
  };

  const userName = useSelector(state => state.userLogIn.name);
  const dispatch = useDispatch();

  const newAppointment = () => {
    let appointmentAction = Object.assign({}, actionInstructorDNI);
    appointmentAction.payload = { DNI: instructorDNI };
    dispatch(appointmentAction);

    navigation("/newappointment");
  }

  const [search, setSearch] = useState('');


  return (

    <MainContainer>

      <NavbarUser />

      <ContainerHelper>

        <MainCard>

          <h1>Let's start {userName}</h1>
          <p>Next, you will find your teams' agendas.</p>

          <HContainer>
            <Label>
              Search by name:     
              <Input type="text" placeholder="Search..." onChange={(event) => setSearch(event.target.value)} />
            </Label>
            <SearchButton onClick={() => getInstructor(search)}>Search</SearchButton>
          </HContainer>

          <Table className="react-strap-table" striped bordered hover variant="dark">

            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>DNI</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Program</th>
                <th>Semester</th>
                <th>Agenda</th>
              </tr>
            </thead>

            <tbody>

              {instructorsData.map((instructor, index, instructorsData) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{instructor.name}</td>
                    <td>{instructor.lastname}</td>
                    <td>{instructor.DNI}</td>
                    <td>{instructor.email}</td>
                    <td>{instructor.number}</td>
                    <td>{instructor.program}</td>
                    <td>{instructor.semester}</td>
                    <td><BsCalendarCheck onClick={() => handleShow(instructor.agenda, instructor.name, instructor.DNI)} style={{ cursor: 'pointer' }} /></td>
                  </tr>
                )
              })

              }

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

                  {instructorAgenda.agenda.map((appointment, index, agenda) => {
                    return (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{appointment.date}</td>
                        <td>{appointment.course}</td>
                        <td>{appointment.classroom}</td>
                        <td>{instructorAgenda.instructor}</td>
                      </tr>
                    )
                  })
                  }

                </tbody>

              </Table>

            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={newAppointment}>
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
