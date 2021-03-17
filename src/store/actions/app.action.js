import { appTypes } from '../types';
/**
 *
 * @param {Object} payload
 */
export const getAnalytics = () => ({
  type: appTypes.APP_HANDLE_ANALYTICS,
});

export const getUsers = () => ({
  type: appTypes.APP_HANDLE_USERS,
});
