import React from 'react';
import useAuth from '../hooks/useAuth';

import SigninContainer from '../container/Signin/SigninContainer';

export default function Signin() {
  const token = useAuth();

  if (token !== null) {
    return window.location.replace('/');
  }
  return <SigninContainer />;
}
