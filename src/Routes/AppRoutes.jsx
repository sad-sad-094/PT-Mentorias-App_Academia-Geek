/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import {PrivateRoutes, PublicRoutes} from '../Components/Modules/IsLogged';
import HomePage from '../Components/Pages/HomePage';
import LoginPage from '../Components/Pages/LoginPage';
import SinginPage from '../Components/Pages/CreateAccountPage';
import UserHomePage from '../Components/Pages/UserHomePage';
import AddInstructorPage from '../Components/Pages/AddInstructorPage';
import InstructorsPage from '../Components/Pages/InstructorsPage';
import NewAppointmentPage from '../Components/Pages/NewAppointmentPage';
import { useSelector } from 'react-redux';

function AppRoutes() {

  const logged = useSelector(state => state.userLogIn.isLogged);


  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicRoutes auth={logged}> <HomePage /> </PublicRoutes>} />
        <Route path="/login" element={<PublicRoutes auth={logged}> <LoginPage /> </PublicRoutes>} />
        <Route path="/signin" element={<PublicRoutes auth={logged}> <SinginPage /> </PublicRoutes>} />

        <Route path="/userhome" element={<PrivateRoutes auth={logged}> <UserHomePage /> </PrivateRoutes>} />
        <Route path="/addteam" element={<PrivateRoutes auth={logged}> <AddInstructorPage /> </PrivateRoutes>} />
        <Route path="/instructors" element={<PrivateRoutes auth={logged}> <InstructorsPage /> </PrivateRoutes>} />
        <Route path="/newappointment" element={<PrivateRoutes auth={logged}> <NewAppointmentPage /> </PrivateRoutes>} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )

}

export default AppRoutes;
