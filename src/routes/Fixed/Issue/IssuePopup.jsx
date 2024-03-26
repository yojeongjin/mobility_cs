import React from 'react';
import useAuth from '../../../hooks/useAuth';

import IssuePopupContainer from '../../../container/Fixed/Issue/IssuePopupContainer';

export default function IssuePopup() {
  const token = useAuth();

  if (token === null) {
    return window.location.replace('/signin');
  }

  return <IssuePopupContainer />;
}
