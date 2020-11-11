import produce from 'immer';

const initialState = {
  chatRooms: [],
  chattings: null,
  dmRoom: null,

  loadChatRoomsLoading: false,
  loadChatRoomsDone: false,
  loadChatRoomsError: null,

  loadChattingsLoading: false,
  loadChattingsDone: false,
  loadChattingsError: null,

  createChatRoomLoading: false,
  createChatRoomDone: false,
  createChatRoomError: null,

  createDMRoomLoading: false,
  createDMRoomDone: false,
  createDMRoomError: null,

  sendChatLoading: false,
  sendChatDone: false,
  sendChatError: null,
}

export const LOAD_CHATROOMS_REQUEST = 'LOAD_CHATROOMS_REQUEST';
export const LOAD_CHATROOMS_SUCCESS = 'LOAD_CHATROOMS_SUCCESS';
export const LOAD_CHATROOMS_FAILURE = 'LOAD_CHATROOMS_FAILURE';

export const LOAD_DMROOMS_REQUEST = 'LOAD_DMROOMS_REQUEST';
export const LOAD_DMROOMS_SUCCESS = 'LOAD_DMROOMS_SUCCESS';
export const LOAD_DMROOMS_FAILURE = 'LOAD_DMROOMS_FAILURE';

export const LOAD_CHATTINGS_REQUEST = 'LOAD_CHATTINGS_REQUEST';
export const LOAD_CHATTINGS_SUCCESS = 'LOAD_CHATTINGS_SUCCESS';
export const LOAD_CHATTINGS_FAILURE = 'LOAD_CHATTINGS_FAILURE';

export const CREATE_CHATROOM_REQUEST = 'CREATE_CHATROOM_REQUEST';
export const CREATE_CHATROOM_SUCCESS = 'CREATE_CHATROOM_SUCCESS';
export const CREATE_CHATROOM_FAILURE = 'CREATE_CHATROOM_FAILURE';

export const CREATE_DMROOM_REQUEST = 'CREATE_DMROOM_REQUEST';
export const CREATE_DMROOM_SUCCESS = 'CREATE_DMROOM_SUCCESS';
export const CREATE_DMROOM_FAILURE = 'CREATE_DMROOM_FAILURE';

export const SEND_CHAT_REQUEST = 'SEND_CHAT_REQUEST';
export const SEND_CHAT_SUCCESS = 'SEND_CHAT_SUCCESS';
export const SEND_CHAT_FAILURE = 'SEND_CHAT_FAILURE';

export const ADD_CHATROOM_TO_LIST = 'ADD_CHATROOM_TO_LIST';
export const ADD_CHAT_TO_LIST = 'ADD_CHAT_TO_LIST';

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOAD_CHATROOMS_REQUEST: 
      case LOAD_DMROOMS_REQUEST:
        draft.loadChatRoomsLoading = true;
        draft.loadChatRoomsDone = false;
        draft.loadChatRoomsError = null;
        break;
      case LOAD_CHATROOMS_SUCCESS:
      case LOAD_DMROOMS_SUCCESS:
        draft.loadChatRoomsLoading = false;
        draft.loadChatRoomsDone = true;
        draft.chatRooms = action.data;
        draft.loadChatRoomsError = null;
        draft.createChatRoomDone = false;
        break;
      case LOAD_CHATROOMS_FAILURE:
      case LOAD_DMROOMS_FAILURE:
        draft.loadChatRoomsLoading = false;
        draft.loadChatRoomsDone = false;
        draft.loadChatRoomsError = action.error;
        break;
      case LOAD_CHATTINGS_REQUEST: 
        draft.loadChattingsLoading = true;
        draft.loadChattingsDone = false;
        draft.loadChattingsError = null;
        draft.dmRoom = null;
        draft.createDMRoomDone = false;
        break;
      case LOAD_CHATTINGS_SUCCESS:
        draft.loadChattingsLoading = false;
        draft.loadChattingsDone = true;
        draft.chattings = action.data;
        draft.loadChattingsError = null;
        break;
      case LOAD_CHATTINGS_FAILURE:
        draft.loadChattingsLoading = false;
        draft.loadChattingsDone = false;
        draft.loadChattingsError = action.error;
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
      case CREATE_DMROOM_REQUEST: 
        draft.createDMRoomLoading = true;
        draft.createDMRoomDone = false;
        draft.createDMRoomError = null;
        break;
      case CREATE_DMROOM_SUCCESS:
        draft.createDMRoomLoading = false;
        draft.createDMRoomDone = true;
        draft.dmRoom = action.data;
        draft.createDMRoomError = null;
        break;
      case CREATE_DMROOM_FAILURE:
        draft.createDMRoomLoading = false;
        draft.createDMRoomDone = false;
        draft.createDMRoomError = action.error;
        break;
      case SEND_CHAT_REQUEST: 
        draft.sendChatLoading = true;
        draft.sendChatDone = false;
        draft.sendChatError = null;
        break;
      case SEND_CHAT_SUCCESS:
        draft.sendChatLoading = false;
        draft.sendChatDone = true;
        draft.sendChatError = null;
        break;
      case SEND_CHAT_FAILURE:
        draft.sendChatLoading = false;
        draft.sendChatDone = false;
        draft.sendChatError = action.error;
        break;
      case ADD_CHATROOM_TO_LIST: 
        draft.chatRooms.unshift(action.data);
        break;
      case ADD_CHAT_TO_LIST:
        draft.chattings.push(action.data);
        break;
      default:
        break;
    }
  })
}

export default reducer;