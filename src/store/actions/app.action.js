import { appTypes } from '../types';
/**
 *
 * @param {Object} payload
 */
export const getAnalytics = () => ({
  type: appTypes.APP_HANDLE_ANALYTICS,
});
