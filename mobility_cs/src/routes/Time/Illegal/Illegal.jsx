import React from 'react';
import useAuth from '../../../hooks/useAuth';

import IllegalContainer from '../../../container/Time/Illegal/IllegalContainer';

export default function Illegal() {
  const token = useAuth();

  if (token === null) {
    return window.location.replace('/signin');
  }

  return <IllegalContainer />;
}
