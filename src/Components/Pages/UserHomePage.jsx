/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */


import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button, ContainerHelper, HContainer, MainCard, MainContainer } from '../../Styles/GlobalStyles';
import NavbarUser from '../Modules/Navbar';

function UserHomePage() {

  const navigation = useNavigate();
  const user = useSelector(state => state.userLogIn);

  return (

    <MainContainer>

      <NavbarUser />

      <ContainerHelper>

        <MainCard>

          <h1>Greetings {user.name}</h1>
          <p>Take a look of your instructors' agendas or add a new member of your {user.faculty} team.</p>

          <HContainer>

            <Button onClick={() => navigation("/instructors")}>Instructors</Button>
            <Button onClick={() => navigation("/addteam")}>Add Instructors</Button>

          </HContainer>


        </MainCard>

      </ContainerHelper>

    </MainContainer>

  )

}

export default UserHomePage;