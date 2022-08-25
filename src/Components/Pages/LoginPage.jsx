/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BackButton, Button, HContainer, Input, MainCard, MainContainer } from '../../Styles/GlobalStyles';

function LoginPage() {

  const navigation = useNavigate();

  return (

    <MainContainer>

      <MainCard>

        <h3>Welcome back manager</h3>
        <p>Return to your duties about your instructors' agenda.</p>

        <Input type="email" placeholder="Please, enter your email" value="" required />
        <Input type="password" placeholder="Please, enter your password" value="" required />

        <HContainer>
          <Button>Login</Button>
          <BackButton onClick={() => {navigation("/")}}>Back</BackButton>
        </HContainer>

      </MainCard>

    </MainContainer>
  )

}

export default LoginPage;
