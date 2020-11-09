import React from 'react';

import './styles.scss';

const ChatRoom = ({ chatRoom }) => {
  return (
    <div className="chatroom">
      <p>{chatRoom.name}</p>
      <div>인원: 5명</div>
    </div>
  )
}

export default ChatRoom
