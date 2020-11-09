import { all, fork, call, takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';

import {
  LOAD_CHATROOMS_REQUEST,
  LOAD_CHATROOMS_SUCCESS,
  LOAD_CHATROOMS_FAILURE,
  CREATE_CHATROOM_REQUEST,
  CREATE_CHATROOM_SUCCESS,
  CREATE_CHATROOM_FAILURE,
  ADD_CHATROOM_TO_LIST_REQUEST,
  ADD_CHATROOM_TO_LIST
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

function* addChatRoomToList(action) {
  yield put({
    type: ADD_CHATROOM_TO_LIST,
    data: action.data
  })
}

function* watchAddChatRoomToList() {
  yield takeLatest(ADD_CHATROOM_TO_LIST_REQUEST, addChatRoomToList);
}

export default function* chatRoomSaga() {
  yield all([
    fork(watchLoadChatRooms),
    fork(watchCreateChatRoom),
    fork(watchAddChatRoomToList)
  ]);
}