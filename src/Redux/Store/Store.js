/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */


import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { appointmentReducer, logInReducer } from '../Reducers/Reducers';

let Store;

if (process.env.NODE_ENV !== 'production') {

  const r = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose  //*Important Eliminar previo a realizar el deploy

  Store = createStore(
    combineReducers(
      {
        userLogIn: logInReducer,
        appointment: appointmentReducer
      }
    ), r(applyMiddleware())
  )
  
} else {

  Store = createStore(
    combineReducers(
      {
        userLogIn: logInReducer,
        appointment: appointmentReducer
      }
    ))
}



export default Store;
