import React, { useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useInput from 'hooks/useInput';

import './styles.scss';
import { SEND_CHAT_REQUEST } from 'reducers/chatRoom';

const SendMessageForm = ({ ChatRoomId }) => {
  const dispatch = useDispatch();
  const me = useSelector((state) => state.user.me);
  const [message, setMessage, onChangeMessage] = useInput('');
  const inputRef = useRef();

  const onSubmitMessage = useCallback(
    (e) => {
      e.preventDefault();
      if (!me) {
        return alert('로그인이 필요합니다.');
      }
      dispatch({
        type: SEND_CHAT_REQUEST,
        data: {
          ChatRoomId,
          content: message,
        },
      });
      setMessage('');
      inputRef.current.focus();
    },
    [ChatRoomId, message]
  );

  return (
    <form className="message-form" onSubmit={onSubmitMessage}>
      <label htmlFor="">메시지</label>
      <div>
        <input
          ref={inputRef}
          type="text"
          value={message}
          onChange={onChangeMessage}
        />
        <button type="submit">보내기</button>
      </div>
    </form>
  );
};

export default SendMessageForm;
