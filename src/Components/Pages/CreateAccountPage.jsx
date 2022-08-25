/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BackButton, Button, HContainer, Input, MainCard, MainContainer } from '../../Styles/GlobalStyles';

function CreateAccountPage() {

  const navigation = useNavigate();

  return (

    <MainContainer>

      <MainCard>

        <h3>Welcome</h3>
        <p>to our app to manage your institution's instructors and their classes agendas.</p>

        <Input type="text" placeholder="Please, enter your full name" value="" required />
        <Input type="email" placeholder="Please, enter your email" value="" required />
        <Input type="password" placeholder="Please, enter your password" value="" required />
        <Input type="text" placeholder="Please, enter your faculty" value="" required />

        <HContainer>
          <Button>Signin</Button>
          <BackButton onClick={() => navigation("/") }>Back</BackButton>
        </HContainer>

      </MainCard>

    </MainContainer>
  )

}

export default CreateAccountPage;
