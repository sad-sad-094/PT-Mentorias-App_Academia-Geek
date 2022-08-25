/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../Components/Pages/HomePage';
import LoginPage from '../Components/Pages/LoginPage';
import SinginPage from '../Components/Pages/CreateAccountPage';
import UserHomePage from '../Components/Pages/UserHomePage';
import AddInstructorPage from '../Components/Pages/AddInstructorPage';
// import { useSelector } from 'react-redux';

function AppRoutes() {

  // const logged = useSelector(state => state.userLogin.isLogged);


  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signin" element={<SinginPage />} />
        <Route path="/userhome" element={<UserHomePage />} />
        <Route path="/addteam" element={<AddInstructorPage />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )

}

export default AppRoutes;
