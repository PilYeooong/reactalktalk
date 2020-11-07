import React, { useState, useEffect, useCallback } from 'react'
import io from 'socket.io-client';

const Chat = () => {
  const socket = io.connect('http://localhost:4000');
  const [message, setMessage] = useState('');

  const onChangeMessage = useCallback((e) => {
    setMessage(e.target.value);
  }, []);

  const onSubmitMessage = useCallback((e) => {
    // userInfo + 시간 + message
    // io.emit()
    e.preventDefault();
    const test = {
      name: 'pilyeong',
      message: 'god'
    }

    socket.emit('test', test);
  }, []);

  return (
    <div>
      <form action="" onSubmit={onSubmitMessage}>
        <input type="text" value={message} onChange={onChangeMessage} />
        <button type="submit">보내기</button>
      </form>
    </div>
  )
}

export default Chat
