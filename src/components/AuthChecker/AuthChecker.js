import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  BrowserRouter as Router, 
  Redirect } from 'react-router-dom';
import { authCheck } from '../../store/actions/auth.actions';

const AuthChecker = ({ children }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(({auth}) => auth.isLoggedIn);

  useEffect(() => {
    dispatch(authCheck());
  }, [authCheck]);

  return (
    <Router>
      {isLoggedIn && <Redirect 
        to={{
          pathname: "/dashboard",
        }}
      />
      }
      {children}
    </Router>
  );
}

export default AuthChecker;
