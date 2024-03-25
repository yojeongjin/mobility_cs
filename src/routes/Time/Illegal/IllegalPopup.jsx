import React from 'react';
import useAuth from '../../../hooks/useAuth';

import IllegalPopupContainer from '../../../container/Time/Illegal/IllegalPopupContainer';

export default function IllegalPopup() {
  const token = useAuth();

  if (token === null) {
    return window.location.replace('/signin');
  }

  return <IllegalPopupContainer />;
}
