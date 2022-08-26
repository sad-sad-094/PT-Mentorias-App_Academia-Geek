/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BackButton, Button, HContainer, Input, MainCard, MainContainer } from '../../Styles/GlobalStyles';

function NewAppointmentPage() {

  const navigation = useNavigate();

  return (

    <MainContainer>

      <MainCard>

        <h3>Add a new appointment</h3>
        <p>Set a new appointment to your team.</p>

        <Input type="text" placeholder="Please, assign a date" name="date" required />
        <Input type="text" placeholder="Please, assign a course" name="course" required />
        <Input type="text" placeholder="Please, assign a classroom" name="classroom" required />
        <Input type="text" placeholder="Please, assign a instructor" name="instructor" required />

        <HContainer>
          <Button>Submit</Button>
          <BackButton onClick={() => navigation("/instructors")}>Back</BackButton>
        </HContainer>

      </MainCard>

    </MainContainer>

  )

}

export default NewAppointmentPage;
