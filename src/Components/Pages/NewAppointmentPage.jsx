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

        <Input type="text" placeholder="Please, assign a date" value="" required />
        <Input type="text" placeholder="Please, assign a course" value="" required />
        <Input type="text" placeholder="Please, assign a classroom" value="" required />
        <Input type="text" placeholder="Please, assign a instructor" value="" required />

        <HContainer>
          <Button>Submit</Button>
          <BackButton onClick={() => navigation("/instructors")}>Back</BackButton>
        </HContainer>

      </MainCard>

    </MainContainer>

  )

}

export default NewAppointmentPage;
