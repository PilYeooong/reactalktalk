import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import useInput from 'hooks/useInput';
import { CREATE_CHATROOM_REQUEST } from 'reducers/chatRoom';

const NewChatRoomForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const createChatRoomDone = useSelector(state => state.chatRoom.createChatRoomDone);
  const [name, setName, onChangeName] = useInput('');

  useEffect(() => {
    if(createChatRoomDone) {
      history.push('/chatrooms');
    }
  }, [createChatRoomDone]);

  const onSubmitForm = useCallback((e) => {
    e.preventDefault();
    dispatch({
      type: CREATE_CHATROOM_REQUEST,
      data: {
        name
      }
    })
  }, [name]);

  return (
    <form onSubmit={onSubmitForm}>
      <label htmlFor="">채팅방 이름</label>
      <input type="text" value={name} onChange={onChangeName}/>
      <button type="submit">생성</button>
    </form>
  )
}

export default NewChatRoomForm;
