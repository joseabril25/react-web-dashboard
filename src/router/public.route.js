import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect, useSelector } from "react-redux";

const PublicRoutes = () => {
  const isLoggedIn = useSelector(({auth}) => auth.isLoggedIn);
  
  useEffect(() => {
    effect
    return () => {
      cleanup
    }
  }, [input])
}

export default PublicRoutes