import React from 'react';
import useAuth from '../../../hooks/useAuth';

import AnotherPopupContainer from '../../../container/Time/Another/AnotherPopupContainer';

export default function AnotherPopup() {
  const token = useAuth();

  if (token === null) {
    return window.location.replace('/signin');
  }

  return <AnotherPopupContainer />;
}
