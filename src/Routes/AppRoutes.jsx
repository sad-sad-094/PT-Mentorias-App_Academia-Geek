/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';

function AppRoutes() {

  // const logged = useSelector(state => state.userLogin.isLogged);


  return (

    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )

}

export default AppRoutes;
