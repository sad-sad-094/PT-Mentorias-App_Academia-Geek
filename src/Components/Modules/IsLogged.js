/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import { Navigate } from 'react-router-dom';



const PrivateRoutes = ({ auth, children }) => {
  if (auth) {
    return children;
  } else {
    return <Navigate to={'/'} />
  }
}

const PublicRoutes = ({ auth, children }) => {
  if (!auth) {
    return children;
  } else {
    return <Navigate to={'/userhome'} />
  }
}


export { PrivateRoutes, PublicRoutes };
