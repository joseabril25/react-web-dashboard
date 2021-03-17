import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { authCheck } from '../store/actions/auth.actions';

const authRoutes = [
  {
    path: "/login",
    component: Login
  },
  {
    path: "/register",
    component: Register
  },
];

const mainRoutes = [
  {
    path: "/dashboard",
    component: Dashboard
  },
];

const AppRouter = ({
  isLoggedIn,
  checkUserToken,
}) => {
  console.log("🚀 ~ file: app.router.js ~ line 12 ~ isLoggedIn", isLoggedIn)
  useEffect(() => {
    checkUserToken();
  }, [checkUserToken]);

  if (!isLoggedIn) {
    return (
      
    )
  }

  return <MenuNavigator />;
};

const mapStateToProps = ({ auth }) => ({
  isLoggedIn: auth.isLoggedIn,
});

const mapDispatchToProps = {
  checkUserToken: authCheck,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppRouter);
