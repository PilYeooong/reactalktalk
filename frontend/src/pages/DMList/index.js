import React, { useEffect } from 'react';
import io from 'socket.io-client';

import AppLayout from 'layouts/App';

const DMList = () => {

  useEffect(() => {
    const socket = io('http://localhost:4000/dm', {
      transports: ['websocket']
    });


    return () => {
      socket.disconnect();
    }
  }, []);
  
  return (
    <AppLayout>
      dm list
    </AppLayout>
  )
}

export default DMList;
