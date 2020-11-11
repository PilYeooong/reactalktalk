import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import io from 'socket.io-client';

import { LOAD_DMROOMS_REQUEST, ADD_CHATROOM_TO_LIST } from 'reducers/chatRoom';

import AppLayout from 'layouts/App';
import ChatRoomList from 'components/ChatRoomList';

const DMList = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const me = useSelector(state => state.user.me);
  const chatRooms = useSelector(state => state.chatRoom.chatRooms);

  useEffect(() => {
    const socket = io('http://localhost:4000/dm', {
      transports: ['websocket'],
      query: {
        nickname: `${me && me.nickname}`
      }
    });

    socket.on('newDM', room => {
      dispatch({
        type: ADD_CHATROOM_TO_LIST,
        data: room
      });
    });

    return () => {
      socket.disconnect();
    }
  }, []);

  useEffect(() => {
    if (!me) {
      history.replace('/');
      return alert('해당 서비스는 로그인이 필요합니다.')
    }
    dispatch({
      type: LOAD_DMROOMS_REQUEST
    })
  }, [me]);
  
  return (
    <AppLayout>
      <ChatRoomList chatRooms={chatRooms} />
    </AppLayout>
  )
}

export default DMList;
