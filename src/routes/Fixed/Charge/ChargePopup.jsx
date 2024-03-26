import React from 'react';
import useAuth from '../../../hooks/useAuth';

import ChargePopupContainer from '../../../container/Fixed/Charge/ChargePopupContainer';

export default function ChargePopup() {
  const token = useAuth();

  if (token === null) {
    return window.location.replace('/signin');
  }

  return <ChargePopupContainer />;
}
