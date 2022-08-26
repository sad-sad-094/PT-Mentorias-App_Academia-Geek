/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 1rem auto;
`;

export const ContainerHelper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin-top: 4rem;
`;

export const MainCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 0.5rem;
  padding: 1rem;
  background-color: #7b304f;
  border-radius: 10px;
`;

export const HContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 60%;
  margin: 0.5rem;
`;

export const Button = styled.button`
  width: 30%;
  height: 15%;
  margin: 0.5rem auto;
  justify-content: center;
  align-items: center;
  background-color: #bc6b89;
  color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 15px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
  }

`;

export const BackButton = styled.button`
  width: 30%;
  height: 15%;
  margin: 0.5rem auto;
  justify-content: center;
  align-items: center;
  background-color: #bc6b89;
  color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 15px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
  }
`;

export const NavbarImg = styled.img`
  width: 7%;
`;

export const Input = styled.input`
  width: 60%;
  margin: 0.5rem auto;
  padding: 0.5rem 1rem;
  border-radius: 15px;
  color: black;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 0.5rem;
  padding: 1rem;
`;
