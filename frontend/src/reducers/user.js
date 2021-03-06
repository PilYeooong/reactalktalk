import produce from 'immer';

const initialState = {
  me: null,
  userList: [],

  signupLoading: false,
  signupDone: false,
  signupError: null,

  loginLoading: false,
  loginDone: false,
  loginError: null,

  logOutLoading: false,
  logOutDone: false,
  logOutError: null,

  loadUserListLoading: false,
  loadUserListDone: false,
  loadUserListError: null,
}
export const LOAD_MY_INFO_REQUEST = 'LOAD_MY_INFO_REQUEST';
export const LOAD_MY_INFO_SUCCESS = 'LOAD_MY_INFO_SUCCESS';
export const LOAD_MY_INFO_FAILURE = 'LOAD_MY_INFO_FAILURE';

export const LOAD_USERLIST_REQUEST = 'LOAD_USERLIST_REQUEST';
export const LOAD_USERLIST_SUCCESS = 'LOAD_USERLIST_SUCCESS';
export const LOAD_USERLIST_FAILURE = 'LOAD_USERLIST_FAILURE';

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOAD_MY_INFO_REQUEST:
        draft.loadMyInfoLoading = true;
        draft.loadMyInfoDone = false;
        draft.loadMyInfoError = null;
        break;
      case LOAD_MY_INFO_SUCCESS:
        draft.loadMyInfoLoading = false;
        draft.loadMyInfoDone = true;
        draft.me = action.data;
        break;
      case LOAD_MY_INFO_FAILURE:
        draft.loadMyInfoLoading = false;
        draft.loadMyInfoDone = false;
        draft.loadMyInfoError = action.error;
        break;
      case LOAD_USERLIST_REQUEST:
        draft.loadUserListLoading = true;
        draft.loadUserListDone = false;
        draft.loadUserListError = null;
        break;
      case LOAD_USERLIST_SUCCESS:
        draft.loadUserListLoading = false;
        draft.loadUserListDone = true;
        draft.userList = action.data;
        break;
      case LOAD_USERLIST_FAILURE:
        draft.loadUserListLoading = false;
        draft.loadUserListDone = false;
        draft.loadUserListError = action.error;
        break;
      case SIGN_UP_REQUEST:
        draft.signupLoading = true;
        draft.signupDone = false;
        draft.signupError = null;
        break;
      case SIGN_UP_SUCCESS:
        draft.signupLoading = false;
        draft.signupDone = true;
        break;
      case SIGN_UP_FAILURE:
        draft.signupLoading = false;
        draft.signupDone = false;
        draft.signupError = action.error;
        break;
      case LOG_IN_REQUEST:
        draft.loginLoading = true;
        draft.loginDone = false;
        draft.loginError = null;
        break;
      case LOG_IN_SUCCESS:
        draft.loginLoading = false;
        draft.loginDone = true;
        draft.me = action.data;
      case LOG_IN_FAILURE:
        draft.loginLoading = false;
        draft.loginDone = false;
        draft.loginError = action.error;
      case LOG_OUT_REQUEST:
        draft.logOutLoading = true;
        draft.logOutDone = false;
        draft.logOutError = null;
        break;
      case LOG_OUT_SUCCESS:
        draft.logOutLoading = false;
        draft.logOutDone = true;
        draft.me = null;
        break;
      case LOG_OUT_FAILURE:
        draft.logOutLoading = false;
        draft.logOutDone = false;
        draft.logOutError = action.error;
        break;
      default:
        break;
    }
  })
}

export default reducer;