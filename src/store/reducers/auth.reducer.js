import { authTypes } from '../types';

const defaultState = {
  isChecking: true,
  checkError: null,

  isLoggedIn: false,
  isLoginLoading: false,
  loginError: null,

  isOnboarding: false,

  user: null,
  jwt: null,
  roles: null,
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    // Auth Check
    case authTypes.AUT_CHECK_LOADING: {
      return {
        ...state,
        isChecking: action.payload,
      };
    }
    case authTypes.AUT_CHECK_ERROR: {
      return {
        ...state,
        checkError: action.payload,
      };
    }

    // Login
    case authTypes.AUT_LOGIN_LOADING: {
      return {
        ...state,
        isLoginLoading: action.payload,
      };
    }
    case authTypes.AUT_LOGIN_ERROR: {
      return {
        ...state,
        loginError: action.payload,
      };
    }

    // Setters
    case authTypes.AUT_SET_LOGGED: {
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    }
    case authTypes.AUT_SET_USER: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case authTypes.AUT_SET_TOKEN: {
      return {
        ...state,
        jwt: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
