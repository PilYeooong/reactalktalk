import React, { useEffect } from 'react';

import AppLayout from 'layouts/App';

import Chattings from 'components/Chattings';
import SendMessageForm from 'components/SendMessageForm';

const ChatRoom = (props) => {
  const {
    match: {
      params: { id: ChatRoomId },
    },
  } = props;

  return (
    <AppLayout>
      <Chattings ChatRoomId={ChatRoomId} />
      <SendMessageForm ChatRoomId={ChatRoomId} />
    </AppLayout>
  );
};

export default ChatRoom;
