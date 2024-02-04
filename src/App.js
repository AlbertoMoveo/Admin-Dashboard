import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Header from './components/Header/Header';
import Login from './components/Login/Login';
import MainDashboard from './components/Dashboard/MainDashboard/MainDashboard';
import Auth from './Auth/Auth';
import UnauthorizedPage from './components/Unauthorized/UnauthorizedPage';

const router = createBrowserRouter([
  { path: '/', element: <Auth><MainDashboard /></Auth>},
  { path: '/login', element: <Login />},
  { path: '/unauthorized', element: <UnauthorizedPage />}
]);

const AppRoutes = () => {
  return (
    <>
    <Header />
    <RouterProvider router ={router} />
    </>
  );
};

export default AppRoutes;
