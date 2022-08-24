/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */


import { createStore, combineReducers, applyMiddleware, compose } from 'redux';


const r = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose  //*Important Eliminar previo a realizar el deploy

const Store = createStore(
  combineReducers(
    {

    }
  ), r(applyMiddleware())
)

export default Store;
