import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authCheck } from '../../store/actions/auth.actions';

const AuthChecker = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(authCheck());
  }, []);

  return <>{children}</>;
};

export default AuthChecker;
