import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import io from 'socket.io-client';

import { LOAD_CHATTINGS_REQUEST, ADD_CHAT_TO_LIST } from 'reducers/chatRoom';

import Chat from 'components/Chat';

import './styles.scss';

const Chattings = ({ ChatRoomId }) => {
  const dispatch = useDispatch();
  const chattings = useSelector(state => state.chatRoom.chattings);

  useEffect(() => {
    dispatch({
      type: LOAD_CHATTINGS_REQUEST,
      data: ChatRoomId
    })
  }, []);

  useEffect(() => {
    const socket = io(`http://localhost:4000/chat-${ChatRoomId}`, {
      transports: ['websocket']
    });

    socket.on('newMessage', message => {
      dispatch({
        type: ADD_CHAT_TO_LIST,
        data: message
      });
    });

    socket.on('newMember', data => {
      console.log(data);
    });

    socket.on('leaveRoom', data => {
      console.log(data);
    });

    return () => {
      socket.disconnect();
    }
  }, []);

  return (
    <div className="chattings-container">
      {chattings && chattings.map(chat => <Chat key={chat.id} chat={chat}/>)}
    </div>
  )
}

export default Chattings;
