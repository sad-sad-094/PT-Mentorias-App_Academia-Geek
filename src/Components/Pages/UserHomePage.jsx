/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */


import React from 'react'
import { Button, ContainerHelper, HContainer, MainCard, MainContainer } from '../../Styles/GlobalStyles';
import NavbarUser from '../Modules/Navbar';

function UserHomePage() {

  return (

    <MainContainer>

      <NavbarUser />

      <ContainerHelper>

        <MainCard>

          <h1>Greetings manager</h1>
          <p>Take a look of your instructors' agendas or add a new member of your team.</p>

          <HContainer>

            <Button>Instructors</Button>
            <Button>Add Instructors</Button>

          </HContainer>


        </MainCard>

      </ContainerHelper>

    </MainContainer>

  )

}

export default UserHomePage;