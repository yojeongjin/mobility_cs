import React from 'react';
import useAuth from '../../../hooks/useAuth';

import ChargeContainer from '../../../container/Fixed/Charge/ChargeContainer';

export default function Charge() {
  const token = useAuth();

  if (token === null) {
    return window.location.replace('/signin');
  }

  return <ChargeContainer />;
}
