import React from 'react';

import './styles.scss';

const Chat = ({ chat }) => {

  return (
    <div className="chat">
     {chat.content}
    </div>
  )
}

export default Chat
