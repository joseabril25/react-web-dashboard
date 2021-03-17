import { appTypes, authTypes } from "../types";
import { takeLatest, put, all, call } from 'redux-saga/effects';
import axios from 'axios';
import Cookies from 'js-cookie';

const apiLogin = ({email, password}) =>
  axios.post(
    process.env.REACT_APP_API_URL + '/api/v1/auth/login',
    { email, password }
  );

const apiRegister = (query) =>
  axios.post(
    process.env.REACT_APP_API_URL + '/api/v1/auth/register',
    query
  );
    
function* authLogin({payload}) {
  const { email, password } = payload;

  yield put({ type: authTypes.AUT_LOGIN_LOADING, payload: true})
  try {
    const {data: {token: jwt, user}, status} = yield call(apiLogin, { email, password});

    if(status === 200) {
      yield all([
        put({ type: authTypes.AUT_SET_LOGGED, payload: true}),
        put({ type: authTypes.AUT_SET_TOKEN, payload: jwt}),
        put({ type: authTypes.AUT_SET_USER, payload: user}),
        put({ type: appTypes.APP_HANDLE_ANALYTICS }),
        put({ type: appTypes.APP_HANDLE_USERS }),
      ])
      yield Cookies.set('jwt', jwt, { expires: 2 });
      yield Cookies.set('user', {...user}, { expires: 2 });
      // yield document.location.href = '/dashboard';
    }
  } catch (error) {
    yield put({ type: authTypes.AUT_LOGIN_ERROR, payload: error?.response?.data?.error || 'Something went wrong'})
    
  } finally {
    yield put({ type: authTypes.AUT_LOGIN_LOADING, payload: false})
  }
}

function* authRegister({payload}) {
  yield put({ type: authTypes.AUT_REGISTER_LOADING, payload: true})
  try {
    const {data: {token: jwt, user}, status} = yield call(apiRegister, payload);

    if(status === 200) {
      yield all([
        put({ type: authTypes.AUT_SET_LOGGED, payload: true}),
        put({ type: authTypes.AUT_SET_TOKEN, payload: jwt}),
        put({ type: authTypes.AUT_SET_USER, payload: user}),
      ])
      yield Cookies.set('jwt', jwt, { expires: 2 });
      yield Cookies.set('user', {...user}, { expires: 2 });
      yield document.location.href = '/dashboard';
    }
  } catch (error) {
    yield put({ type: authTypes.AUT_REGISTER_ERROR, payload: error?.response?.data?.error || 'Something went wrong'})
  } finally {
    yield put({ type: authTypes.AUT_REGISTER_LOADING, payload: false})
  }
}

function* authLogout(){
  yield Cookies.remove('jwt');
  yield Cookies.remove('user');
  yield all([
    put({ type: authTypes.AUT_SET_LOGGED, payload: false}),
    put({ type: authTypes.AUT_SET_USER, payload: null}),
  ])
  yield document.location.href = '/login'
}

function* authCheck() {
  const jwt = yield Cookies.get('jwt');
  const user = yield Cookies.get('user');

  if(jwt){
    yield all([
      put({ type: authTypes.AUT_SET_LOGGED, payload: true}),
      put({ type: authTypes.AUT_SET_TOKEN, payload: jwt}),
      put({ type: authTypes.AUT_SET_USER, payload: user}),
      put({ type: appTypes.APP_HANDLE_ANALYTICS }),
      put({ type: appTypes.APP_HANDLE_USERS }),
    ])
  }
}

// Generator: Watch Counter
export function* authWatcher() {
  yield takeLatest(authTypes.AUT_LOGIN, authLogin);
  yield takeLatest(authTypes.AUT_LOGOUT, authLogout);
  yield takeLatest(authTypes.AUT_CHECK, authCheck);
  yield takeLatest(authTypes.AUTH_HANDLE_REGISTER, authRegister);
}
  