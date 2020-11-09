import React, { useState, useEffect } from 'react';

import ChatRoom from 'components/ChatRoom';
import Button from 'components/Button';

import './styles.scss';

const ChatRoomList = ({ chatRooms }) => {
  const [rooms, setRooms] = useState(chatRooms);

  useEffect(() => {
    setRooms(chatRooms);
  }, [chatRooms]);

  return (
    <div className="chatroom-list">
      {rooms.map((v) => (
        <ChatRoom ket={v.id} chatRoom={v} />
      ))}
      <Button name={'채팅방 생성'} to={'/new'} />
    </div>
  );
};

export default ChatRoomList;
