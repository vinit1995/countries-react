import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const LoginGuard = ({ element: Component }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return isAuthenticated ? Component : <Navigate to="/login" />;
};

export default LoginGuard;
