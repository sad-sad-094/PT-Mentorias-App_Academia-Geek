/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import { doc, setDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { BackButton, Button, ContainerHelper, Form, HContainer, Input, MainCard, MainContainer } from '../../Styles/GlobalStyles';
import { db } from '../../Utils/Firebase';
import NavbarUser from '../Modules/Navbar';

function AddInstructorPage() {

  const navigation = useNavigate();

  const defaultInstructor = () => {
    return {
      name: '',
      lastname: '',
      program: '',
      semester: '',
      DNI: '',
      number: '',
      email: ''
    }
  }

  const [instructor, setInstructor] = useState(defaultInstructor());

  const getInstructor = (event) => {
    setInstructor({
      ...instructor,
      [event.target.name]: event.target.value,
    })
  }

  const newInstructor = () => {
    setDoc(doc(db, 'MonitoresData', instructor.DNI), {
      name: instructor.name,
      lastname: instructor.lastname,
      program: instructor.program,
      semester: instructor.semester,
      DNI: instructor.DNI,
      number: instructor.number,
      email: instructor.email
    })
      .then(() => {
        toast.success('Instructor record saved successfully.')
      })
  }

  return (

    <MainContainer>

      <NavbarUser />

      <ContainerHelper>

        <MainCard>

          <h1>Add a new member to your team</h1>

          <Form onChange={getInstructor}>
            <Input type="text" placeholder="Please, enter a name" name="name" required />
            <Input type="text" placeholder="Please, enter a lastname" name="lastname" required />
            <Input type="text" placeholder="Please, enter a program" name="program" required />
            <Input type="text" placeholder="Please, enter a semester" name="semester" required />
            <Input type="number" placeholder="Please, enter a DNI" name="DNI" required />
            <Input type="number" placeholder="Please, enter a contact number" name="number" required />
            <Input type="email" placeholder="Please, enter a contact email" name="email" required />
          </Form>

          <HContainer>
            <Button onClick={newInstructor}>Submit</Button>
            <BackButton onClick={() => navigation("/userhome")}>Back</BackButton>
          </HContainer>

        </MainCard>

      </ContainerHelper>

    </MainContainer>

  )

}

export default AddInstructorPage;
