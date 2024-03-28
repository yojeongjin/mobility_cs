import React from 'react';
import useAuth from '../../../hooks/useAuth';

import IssueContainer from '../../../container/Fixed/Issue/IssueContainer';

export default function Issue() {
  const token = useAuth();

  if (token === null) {
    return window.location.replace('/signin');
  }

  return <IssueContainer />;
}
