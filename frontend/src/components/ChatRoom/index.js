import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const ChatRoom = ({ chatRoom }) => {
  
  return (
    <div className="chatroom">
      <Link to={`/chatroom/${chatRoom.id}`}>
        <p>{chatRoom.name}</p>
      </Link>
      <div>인원: 5명</div>
    </div>
  )
}

export default ChatRoom
