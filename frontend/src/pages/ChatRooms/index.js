import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import io from 'socket.io-client';

import AppLayout from 'layouts/App';
import ChatRoomList from 'components/ChatRoomList';
import { LOAD_CHATROOMS_REQUEST, ADD_CHATROOM_TO_LIST } from 'reducers/chatRoom';


const ChatRooms = () => {
  const dispatch = useDispatch();
  const chatRooms = useSelector(state => state.chatRoom.chatRooms);

  useEffect(() => {
    dispatch({
      type: LOAD_CHATROOMS_REQUEST
    })
  }, []);

  useEffect(() => {
    const socket = io('http://localhost:4000/room', {
      transports: ['websocket']
    });

    socket.on('newRoom', room => {
      dispatch({
        type: ADD_CHATROOM_TO_LIST,
        data: room
      });
    });
    
    return () => {
      socket.disconnect();
    }
  }, []);

  return (
    <AppLayout>
      <ChatRoomList chatRooms={chatRooms} />
    </AppLayout>
  )
}

export default ChatRooms;
