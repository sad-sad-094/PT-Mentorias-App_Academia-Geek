/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BackButton, Button, Form, HContainer, Input, MainCard, MainContainer } from '../../Styles/GlobalStyles';
import { doc, arrayUnion, updateDoc } from 'firebase/firestore';
import { db } from '../../Utils/Firebase';
import { toast } from 'react-toastify';


function NewAppointmentPage() {

  const navigation = useNavigate();

  const instructorDNI = useSelector(state => state.appointment.DNI);

  const defaultAppointment = () => {
    return {
      date: '',
      course: '',
      classroom: ''
    }
  }

  const [newAppointment, setNewAppointment] = useState(defaultAppointment())

  const letAppointment = (event) => {
    setNewAppointment({
      ...newAppointment,
      [event.target.name]: event.target.value,
    })
  }


  const setAppointment = () => {

    updateDoc(doc(db, 'MonitoresData', instructorDNI.DNI), {
      agenda: arrayUnion({
        date: newAppointment.date,
        course: newAppointment.course,
        classroom: newAppointment.classroom
      })
    })
      .then(() => {
        toast.success('Instructor record saved successfully.');
        navigation("/instructors");
      })
  }


  return (

    <MainContainer>

      <MainCard>

        <h3>Add a new appointment</h3>
        <p>Set a new appointment to your team.</p>

        <Form onChange={letAppointment}>
          <Input type="text" placeholder="Please, assign a date" name="date" required />
          <Input type="text" placeholder="Please, assign a course" name="course" required />
          <Input type="text" placeholder="Please, assign a classroom" name="classroom" required />
        </Form>

        <HContainer>
          <Button onClick={setAppointment}>Submit</Button>
          <BackButton onClick={() => navigation("/instructors")}>Back</BackButton>
        </HContainer>

      </MainCard>

    </MainContainer>

  )

}

export default NewAppointmentPage;
