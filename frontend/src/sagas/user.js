import { all, fork, call, takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';

import {
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  LOG_OUT_FAILURE,
  LOAD_MY_INFO_REQUEST,
  LOAD_MY_INFO_SUCCESS,
  LOAD_MY_INFO_FAILURE,
  LOAD_USERLIST_REQUEST,
  LOAD_USERLIST_SUCCESS,
  LOAD_USERLIST_FAILURE,
} from 'reducers/user';

function loadMyInfoAPI() {
  return axios.get('/auth');
}

function* loadMyInfo(action) {
  try {
    const result = yield call(loadMyInfoAPI);
    yield put({
      type: LOAD_MY_INFO_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_MY_INFO_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLoadMyInfo() {
  yield takeLatest(LOAD_MY_INFO_REQUEST, loadMyInfo);
}

function signupAPI(data) {
  return axios.post('/auth/join', data);
}

function* signup(action) {
  try {
    const result = yield call(signupAPI, action.data);
    yield put({
      type: SIGN_UP_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: SIGN_UP_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchSignup() {
  yield takeLatest(SIGN_UP_REQUEST, signup);
}

function loginAPI(data) {
  return axios.post('/auth/login', data);
}

function* login(action) {
  try {
    const result = yield call(loginAPI, action.data);
    console.log(result);
    yield put({
      type: LOG_IN_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOG_IN_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLogin() {
  yield takeLatest(LOG_IN_REQUEST, login);
}


function logOutAPI() {
  return axios.post('/auth/logout');
}

function* logOut(action) {
  try {
    const result = yield call(logOutAPI);
    yield put({
      type: LOG_OUT_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOG_OUT_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function loadUserListAPI() {
  return axios.get('/users');
}

function* loadUserList(action) {
  try {
    const result = yield call(loadUserListAPI);
    yield put({
      type: LOAD_USERLIST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_USERLIST_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLoadUserList() {
  yield takeLatest(LOAD_USERLIST_REQUEST, loadUserList);
}


export default function* userSaga() {
  yield all([
    fork(watchLoadMyInfo),
    fork(watchSignup),
    fork(watchLogin),
    fork(watchLogOut),
    fork(watchLoadUserList),
  ]);
}