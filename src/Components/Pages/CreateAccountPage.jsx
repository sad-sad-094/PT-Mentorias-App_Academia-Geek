/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import React, { useState } from 'react';
import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, updateProfile, sendEmailVerification } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { BackButton, Button, Form, HContainer, Input, MainCard, MainContainer } from '../../Styles/GlobalStyles';
import { db, auth } from '../../Utils/Firebase';

function CreateAccountPage() {

  const navigation = useNavigate();

  const defaultNewUser = () => {
    return {
      name: "",
      email: "",
      password: "",
      faculty: ""
    }
  }


  const [newUser, setNewUser] = useState(defaultNewUser());

  const setUser = (event) => {
    setNewUser({
      ...newUser,
      [event.target.name]: event.target.value,
    })
  }

  const createUser = () => {

    createUserWithEmailAndPassword(auth, newUser.email, newUser.password)
      .then(() => {
        updateProfile(auth.currentUser, { displayName: newUser.name })
          .then(() => {
            sendEmailVerification(auth.currentUser)
              .then(() => {
                toast.success('Email verification have been sent.')
                setDoc(doc(db, 'ManagerData', auth.currentUser.uid), {faculty: newUser.faculty })
                  .then(() => {
                    toast.success('SignIn successful.')
                  })
              })
          })
      })

      navigation("/login");
  }


  return (

    <MainContainer>

      <MainCard>

        <h3>Welcome</h3>
        <p>to our app to manage your institution's instructors and their classes agendas.</p>

        <Form onChange={setUser}>
          <Input type="text" placeholder="Please, enter your full name" name="name" required />
          <Input type="email" placeholder="Please, enter your email" name="email" required />
          <Input type="password" placeholder="Please, enter your password" name="password" required />
          <Input type="text" placeholder="Please, enter your faculty" name="faculty" required />
        </Form>

        <HContainer>
          <Button onClick={createUser}>SignIn</Button>
          <BackButton onClick={() => navigation("/")}>Back</BackButton>
        </HContainer>

      </MainCard>

    </MainContainer>
  )

}

export default CreateAccountPage;
