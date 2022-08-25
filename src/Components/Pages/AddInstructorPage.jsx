/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import React from 'react';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
import { BackButton, Button, ContainerHelper, HContainer, Input, MainCard, MainContainer } from '../../Styles/GlobalStyles';
import NavbarUser from '../Modules/Navbar';

function AddInstructorPage() {

  const navigation = useNavigate();

  return (

    <MainContainer>

      <NavbarUser />

      <ContainerHelper>

        <MainCard>

          <h1>Add a new member to your team</h1>

          <Input type="text" placeholder="Please, enter a name" value="" required />
          <Input type="text" placeholder="Please, enter a lastname" value="" required />
          <Input type="text" placeholder="Please, enter a program" value="" required />
          <Input type="text" placeholder="Please, enter a semestre" value="" required />
          <Input type="number" placeholder="Please, enter a DNI" value="" required />
          <Input type="number" placeholder="Please, enter a contact number" value="" required />
          <Input type="email" placeholder="Please, enter a contact email" value="" required />

          <HContainer>
            <Button>Submit</Button>
            <BackButton onClick={() => navigation("/userhome")}>Back</BackButton>
          </HContainer>


          <Table striped bordered hover variant="dark">

            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>

              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>

              <tr>
                <td>3</td>
                <td>Larry the Bird</td>
                <td>@twitter</td>
              </tr>

            </tbody>

          </Table>

        </MainCard>

      </ContainerHelper>

    </MainContainer>

  )

}

export default AddInstructorPage;
