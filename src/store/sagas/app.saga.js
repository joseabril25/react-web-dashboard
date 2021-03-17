import { takeLatest, all, call, put, select } from 'redux-saga/effects';
import { appTypes } from '../types';
import axios from 'axios';

const requestAnalytics = (token) =>
  axios.get(process.env.REACT_APP_API_URL + '/api/v1/users', 
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  },
);

const requestGetUsers = (token) =>
  axios.get(process.env.REACT_APP_API_URL + '/api/v1/users/all-users', 
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  },
);

/**
 * @type APP_HANDLE_ANALYTICS
 */
 function* getAnalytics() {

  const { token } = yield select(({ auth }) => ({
    token: auth.jwt,
  }));

  try {
    yield all([
      put({ type: appTypes.APP_LOADING_ANALYTICS, payload: true }),
    ]);

    const { data: response, status } = yield call(requestAnalytics, token);
    const { success, data } = response;
    if (success) {
      yield put({ type: appTypes.APP_SET_ANALYTICS, payload: data})
     
    }
  } catch (error) {

  } finally {
    yield put({ type: appTypes.APP_LOADING_ANALYTICS, payload: false });
  }
}

/**
 * @type APP_HANDLE_USERS
 */
 function* getUsers() {

  const { token } = yield select(({ auth }) => ({
    token: auth.jwt,
  }));

  try {
    yield all([
      put({ type: appTypes.APP_LOADING_ANALYTICS, payload: true }),
    ]);

    const { data: response, status } = yield call(requestGetUsers, token);
    const { success, data } = response;
    if (success) {
      yield put({ type: appTypes.APP_SET_USERS, payload: data})
     
    }
  } catch (error) {

  } finally {
    yield put({ type: appTypes.APP_LOADING_ANALYTICS, payload: false });
  }
}

export function* appWatcher() {
  yield takeLatest(appTypes.APP_HANDLE_ANALYTICS, getAnalytics);
  yield takeLatest(appTypes.APP_HANDLE_USERS, getUsers);
}