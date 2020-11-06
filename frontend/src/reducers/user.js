import produce from 'immer';

const initialState = {
  user: {
    name: 'pilyeong',
    nickname: 'king'
  }
}

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      default:
        break;
    }
  })
}

export default reducer;