import React, { useEffect } from 'react';
import axios from 'axios';

import Chat from './Chat';

function App() {
  useEffect(() => {
    const result = axios
      .get('http://localhost:4000/api')
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="App">
      <Chat />
    </div>
  );
}

export default App;
