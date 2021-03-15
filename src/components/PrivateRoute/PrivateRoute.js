import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Route,
  Redirect,
} from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
  const isLoggedIn = useSelector(({auth}) => auth.isLoggedIn);
  console.log("🚀 ~ file: PrivateRoute.js ~ line 16 ~ PrivateRoute ~ isLoggedIn", isLoggedIn)

  useEffect(() => {
    if(isLoggedIn){

    }
  }, [isLoggedIn])
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;