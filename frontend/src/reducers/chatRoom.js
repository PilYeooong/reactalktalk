import produce from 'immer';

const initialState = {
  chatRooms: [],

  loadChatRoomsLoading: false,
  loadChatRoomsDone: false,
  loadChatRoomsError: null,

  createChatRoomLoading: false,
  createChatRoomDone: false,
  createChatRoomError: null,
}

export const LOAD_CHATROOMS_REQUEST = 'LOAD_CHATROOMS_REQUEST';
export const LOAD_CHATROOMS_SUCCESS = 'LOAD_CHATROOMS_SUCCESS';
export const LOAD_CHATROOMS_FAILURE = 'LOAD_CHATROOMS_FAILURE';

export const LOAD_CHATROOM_REQUEST = 'LOAD_CHATROOM_REQUEST';
export const LOAD_CHATROOM_SUCCESS = 'LOAD_CHATROOM_SUCCESS';
export const LOAD_CHATROOM_FAILURE = 'LOAD_CHATROOM_FAILURE';

export const CREATE_CHATROOM_REQUEST = 'CREATE_CHATROOM_REQUEST';
export const CREATE_CHATROOM_SUCCESS = 'CREATE_CHATROOM_SUCCESS';
export const CREATE_CHATROOM_FAILURE = 'CREATE_CHATROOM_FAILURE';

export const ADD_CHATROOM_TO_LIST_REQUEST = 'ADD_CHATROOM_TO_LIST_REQUEST'
export const ADD_CHATROOM_TO_LIST = 'ADD_CHATROOM_TO_LIST';

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOAD_CHATROOMS_REQUEST: 
        draft.loadChatRoomsLoading = true;
        draft.loadChatRoomsDone = false;
        draft.loadChatRoomsError = null;
        break;
      case LOAD_CHATROOMS_SUCCESS:
        draft.loadChatRoomsLoading = false;
        draft.loadChatRoomsDone = true;
        draft.chatRooms = action.data;
        draft.loadChatRoomsError = null;
        draft.createChatRoomDone = false;
        break;
      case LOAD_CHATROOMS_FAILURE:
        draft.loadChatRoomsLoading = false;
        draft.loadChatRoomsDone = false;
        draft.loadChatRoomsError = action.error;
        break;
      case CREATE_CHATROOM_REQUEST: 
        draft.createChatRoomLoading = true;
        draft.createChatRoomDone = false;
        draft.createChatRoomError = null;
        break;
      case CREATE_CHATROOM_SUCCESS:
        draft.createChatRoomLoading = false;
        draft.createChatRoomDone = true;
        draft.createChatRoomError = null;
        break;
      case CREATE_CHATROOM_FAILURE:
        draft.createChatRoomLoading = false;
        draft.createChatRoomDone = false;
        draft.createChatRoomError = action.error;
        break;
      case ADD_CHATROOM_TO_LIST: 
        draft.chatRooms.unshift(action.data);
        break;
      default:
        break;
    }
  })
}

export default reducer;