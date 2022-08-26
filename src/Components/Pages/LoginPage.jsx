/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FcGoogle } from 'react-icons/fc'
import { BackButton, Button, Form, HContainer, Input, MainCard, MainContainer } from '../../Styles/GlobalStyles';
import { toast } from 'react-toastify';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../../Utils/Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { actionLogIn } from '../../Redux/Actions/Actions';

function LoginPage() {

  const navigation = useNavigate();
  const dispatch = useDispatch();

  const defaultUser = () => {
    return {
      email: '',
      name: '',
      password: '',
      faculty: ''
    }
  }

  const [user, setUser] = useState(defaultUser());

  const logUser = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    })
  }

  const checkLogIn = (user) => {
    if (!user.emailVerified) {
      toast.warm('Your account has not been verified. Please verify your account before attempting to LogIn.')
    } else {
      getDoc(doc(db, 'ManagerData', auth.currentUser.uid))
        .then(doc => {
          if (doc.exists) {
            let userData = doc.data();
            let logInaction = Object.assign({}, actionLogIn);
            logInaction.payload = { name: user.displayName, email: user.email, isLogged: true, faculty: userData.faculty};
            dispatch(logInaction);
            navigation("/userhome");
          } else {
            toast.error('Please call the admin because your LogIn has an error.')
          }
        })
        
    }
  }

  const checkLoginErr = (code) => {
    switch (code) {
      case "auth/user-not-found":
      case "auth/wrong-password":
        toast.warn("Incorrect email or password");
        break;
      case "auth/too-many-requests":
        toast.warn("The verification email has been sent too many times.");
        break;
      default:
        break;
    }
  }

  const letLogIn = () => {
    signInWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        checkLogIn(userCredential.user);
      })
      .catch(err => {
        checkLoginErr(err.code)
      })
  }


  return (

    <MainContainer>

      <MainCard>

        <h3>Welcome back manager</h3>
        <p>Return to your duties about your instructors' agenda.</p>

        <Form onChange={logUser}>
          <Input type="email" placeholder="Please, enter your email" name="email" required />
          <Input type="password" placeholder="Please, enter your password" name="password" required />
        </Form>

        <HContainer>
          <Button onClick={letLogIn}>LogIn</Button>
          <BackButton onClick={() => navigation("/")}>Back</BackButton>
        </HContainer>

        <p>Or LogIn with: <FcGoogle style={{ cursor: 'pointer' }} /> </p>

      </MainCard>

    </MainContainer>
  )

}

export default LoginPage;
