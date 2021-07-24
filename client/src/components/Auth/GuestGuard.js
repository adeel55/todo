import React from 'react';
import { Redirect } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';

const GuestGuard = ({ children }) => {
  const { isLoggedIn } = useAuth();
  
  if (isLoggedIn) {
    return <Redirect to="/app/dashboard/analytics" />;
  }

  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
};

export default GuestGuard;
