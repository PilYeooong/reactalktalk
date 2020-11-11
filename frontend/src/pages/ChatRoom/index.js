import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import AppLayout from 'layouts/App';

import Chattings from 'components/Chattings';
import SendMessageForm from 'components/SendMessageForm';

const ChatRoom = () => {
  const history = useHistory();
  const me = useSelector(state => state.user.me);
  const { id: ChatRoomId } = useParams();

  useEffect(() => {
    if(!me) {
      history.replace('/');
    }
  }, [me]);


  return (
    <AppLayout>
      <Chattings ChatRoomId={ChatRoomId} />
      <SendMessageForm ChatRoomId={ChatRoomId} />
    </AppLayout>
  );
};

export default ChatRoom;
