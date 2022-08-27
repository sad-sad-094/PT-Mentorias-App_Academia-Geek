/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

let defaultUser = {
  email: '',
  name: '',
  faculty: '',
  isLogged: false
}

let defaultDNI = {
  DNI: ''
}

const logInReducer = (state = defaultUser, action) => {

  switch (action.type) {
    case '@user/LogIn':
      return action.payload;
    case '@user/LogOut':
      return defaultUser;
    default:
      return state;
  }
}

const appointmentReducer = (state = defaultDNI, action) => {

  switch (action.type) {
    case '@instructor/newApointment':
      return action.payload;
    default:
      return state;
  }
}


export { logInReducer, appointmentReducer };
