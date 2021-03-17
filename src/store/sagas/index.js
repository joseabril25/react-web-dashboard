import { all, fork } from 'redux-saga/effects';

// Imports: Redux Sagas
import { appWatcher } from './app.saga';
import { authWatcher } from './auth.saga';

// Redux Saga: Root Saga
export default function* rootSaga() {
  yield all([
    fork(authWatcher),
    fork(appWatcher),
  ]);
}
