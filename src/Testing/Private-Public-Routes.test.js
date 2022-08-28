/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import { Navigate } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "../Components/Modules/IsLogged";


describe('Checking for logged user routing', () => {

  test('Checking for logged user/true', () => {

    const auth = true;
    const PrivateRoute = ({ auth, children }) => {
      if (auth) {
        return children;
      } else {
        return <Navigate to={'/'} />
      }
    }

    const testRouting = PrivateRoute(auth);
    const appRouting = PrivateRoutes(auth);

    expect(testRouting).toEqual(appRouting);

  });

  test('Checking for logged user/false', () => {

    const auth = false;
    const PrivateRoute = ({ auth, children }) => {
      if (auth) {
        return children;
      } else {
        return <Navigate to={'/'} />
      }
    }

    const testRouting = PrivateRoute(auth);
    const appRouting = PrivateRoutes(auth);

    expect(testRouting).toEqual(appRouting);

  });

  test('Checking for unlogged user/false', () => {

    const auth = false;
    const PublicRoute = ({ auth, children }) => {
      if (!auth) {
        return children;
      } else {
        return <Navigate to={'/userhome'} />
      }
    }

    const testRouting = PublicRoute(auth);
    const appRouting = PublicRoutes(auth);

    expect(testRouting).toEqual(appRouting);

  });

  test('Checking for unlogged user/true', () => {

    const auth = true;
    const PublicRoute = ({ auth, children }) => {
      if (!auth) {
        return children;
      } else {
        return <Navigate to={'/userhome'} />
      }
    }

    const testRouting = PublicRoute(auth);
    const appRouting = PublicRoutes(auth);

    expect(testRouting).toEqual(appRouting);

  })

})
