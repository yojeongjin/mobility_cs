import React from 'react';
import useAuth from '../../../hooks/useAuth';

import AnotherContainer from '../../../container/Time/Another/AnotherContainer';

export default function Another() {
  const token = useAuth();

  if (token === null) {
    return window.location.replace('/signin');
  }

  return <AnotherContainer />;
}
