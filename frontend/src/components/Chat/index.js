import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import './styles.scss';

const Chat = ({ chat }) => {
  const me = useSelector(state => state.user.me);
  const chatRef = useRef();

  useEffect(() => {
    if (me && chat.UserId === me.id ) {
      chatRef.current.style.background="red";
    }
  }, [chat, me && me.id]);
  // if (me && chat.UserId === me.id) {
  // }

  return (
    <div className="chat" ref={chatRef}>
      {chat.User.nickname} - {chat.content}
    </div>
  )
}

export default Chat
