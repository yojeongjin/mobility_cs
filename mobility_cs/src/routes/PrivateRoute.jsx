import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import useAuth from '../hooks/useAuth';
import Sidebar from '../components/Sidebar/Sidebar';

export default function PrivateRoute() {
  const token = useAuth();

  return token === null ? (
    <Navigate to="/signin" />
  ) : (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
}
