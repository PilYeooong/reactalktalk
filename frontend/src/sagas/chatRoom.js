import { all, fork, call, takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';

import {
  LOAD_CHATROOMS_REQUEST,
  LOAD_CHATROOMS_SUCCESS,
  LOAD_CHATROOMS_FAILURE,
  LOAD_CHATTINGS_REQUEST,
  LOAD_CHATTINGS_SUCCESS,
  LOAD_CHATTINGS_FAILURE,
  CREATE_CHATROOM_REQUEST,
  CREATE_CHATROOM_SUCCESS,
  CREATE_CHATROOM_FAILURE,
  SEND_CHAT_SUCCESS,
  SEND_CHAT_FAILURE,
  SEND_CHAT_REQUEST,
} from 'reducers/chatRoom';

function loadChatRoomsAPI() {
  return axios.get('/chatrooms');
}

function* loadChatRooms(action) {
  try {
    const result = yield call(loadChatRoomsAPI);
    yield put({
      type: LOAD_CHATROOMS_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_CHATROOMS_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLoadChatRooms() {
  yield takeLatest(LOAD_CHATROOMS_REQUEST, loadChatRooms);
}

// chattings

function loadChattingsAPI(data) {
  return axios.get(`/chatroom/${data}`);
}

function* loadChattings(action) {
  try {
    const result = yield call(loadChattingsAPI, action.data);
    yield put({
      type: LOAD_CHATTINGS_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_CHATTINGS_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLoadChattings() {
  yield takeLatest(LOAD_CHATTINGS_REQUEST, loadChattings);
}

function createChatRoomAPI(data) {
  return axios.post('/chatroom', data);
}

function* createChatRoom(action) {
  try {
    const result = yield call(createChatRoomAPI, action.data);
    yield put({
      type: CREATE_CHATROOM_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: CREATE_CHATROOM_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchCreateChatRoom() {
  yield takeLatest(CREATE_CHATROOM_REQUEST, createChatRoom);
}

function sendChatAPI(data) {
  return axios.post(`/chatroom/${data.ChatRoomId}`, data);
}

function* sendChat(action) {
  try {
    const result = yield call(sendChatAPI, action.data);
    yield put({
      type: SEND_CHAT_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: SEND_CHAT_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchSendChat() {
  yield takeLatest(SEND_CHAT_REQUEST, sendChat);
}

export default function* chatRoomSaga() {
  yield all([
    fork(watchLoadChatRooms),
    fork(watchLoadChattings),
    fork(watchCreateChatRoom),
    fork(watchSendChat)
  ]);
}