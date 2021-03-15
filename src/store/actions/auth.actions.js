import { authTypes } from '../types';
/**
 *
 * @param {Object} payload
 */
export const authCheck = () => ({
  type: authTypes.AUT_CHECK,
});

export const authLogin = (payload) => ({
  type: authTypes.AUT_LOGIN,
  payload,
});

export const authRegister = (payload) => ({
  type: authTypes.AUTH_HANDLE_REGISTER,
  payload,
});

export const authLogout = () => ({
  type: authTypes.AUT_LOGOUT,
});
