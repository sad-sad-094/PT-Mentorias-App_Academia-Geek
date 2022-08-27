/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */


import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { appointmentReducer, logInReducer } from '../Reducers/Reducers';


const r = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose  //*Important Eliminar previo a realizar el deploy

const Store = createStore(
  combineReducers(
    {
      userLogIn: logInReducer,
      appointment: appointmentReducer
    }
  ), r(applyMiddleware())
)

export default Store;
