import { all, fork } from 'redux-saga/effects';
import axios from 'axios';

import userSaga from 'sagas/user';
import { API_HOST } from 'utils/Constants';

axios.defaults.baseURL = `${API_HOST}/api/`;
axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([
    fork(userSaga)
  ])
}