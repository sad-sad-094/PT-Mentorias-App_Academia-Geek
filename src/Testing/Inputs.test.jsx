/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import AddInstructorPage from '../Components/Pages/AddInstructorPage';
import CreateAccountPage from '../Components/Pages/CreateAccountPage';
import LoginPage from '../Components/Pages/LoginPage';
import NewAppointmentPage from '../Components/Pages/NewAppointmentPage';
import Store from '../Redux/Store/Store';

describe('Inputs snapshots', () => {

  test('LogIn input snapshot', () => {
    const { container } = render(<Provider store={Store}> <BrowserRouter> <LoginPage /> </BrowserRouter> </Provider>);
    expect(container).toMatchSnapshot();
  });

  test('SingIn input snapshot', () => {
    const { container } = render(<Provider store={Store}> <BrowserRouter> <CreateAccountPage /> </BrowserRouter> </Provider>);
    expect(container).toMatchSnapshot();
  });

  test('Add instructors inputs snapshot', () => {
    const { container } = render(<Provider store={Store}> <BrowserRouter> <AddInstructorPage /> </BrowserRouter> </Provider>);
    expect(container).toMatchSnapshot();
  });

  test('Add new appointments inputs snapshot', () => {
    const { container } = render(<Provider store={Store}> <BrowserRouter> <NewAppointmentPage /> </BrowserRouter> </Provider>);
    expect(container).toMatchSnapshot();
  });

});

describe('Click event on buttons', () => {

  test('Click event on LogIn button', () => {

    render( <Provider store={Store}> <BrowserRouter> <LoginPage /> </BrowserRouter> </Provider> );
    fireEvent.click(screen.getByText('LogIn'));
    expect(screen.getByText('LogIn')).toBeTruthy();

  });

  test('Click event on SingIn button', () => {

    render(<Provider store={Store}> <BrowserRouter> <CreateAccountPage /> </BrowserRouter> </Provider>);
    fireEvent.click(screen.getByText('SignIn'));
    expect(screen.getByText('SignIn')).toBeTruthy();

  });

});
