import React from 'react';
import useAuth from '../../hooks/useAuth';

import MonthlyContainer from '../../container/Monthly/MonthlyContainer';

export default function Monthly() {
  const token = useAuth();

  if (token === null) {
    return window.location.replace('/signin');
  }

  return <MonthlyContainer />;
}
