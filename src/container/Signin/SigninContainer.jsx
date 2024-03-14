import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { signin } from '../../redux/modules/auth';

import SigninComponent from '../../components/Signin/SigninComponent';

export default function SigninContainer() {
  const dispatch = useDispatch();

  const login = useCallback(
    req => {
      dispatch(signin(req));
    },
    [dispatch],
  );
  return <SigninComponent login={login} />;
}
