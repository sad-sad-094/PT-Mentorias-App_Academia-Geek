/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

let defaultUser = {
  email: '',
  name: '',
  faculty: '',
  isLogged: false
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


export { logInReducer };
