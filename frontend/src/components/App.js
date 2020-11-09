import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'global-styles/main.scss';
import axios from 'axios';

import Home from 'pages/Home';
import ChatRooms from 'pages/ChatRooms';
import LogIn from 'pages/Login';
import SignUp from 'pages/SignUp';
import NewRoom from 'pages/NewRoom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/login' component={LogIn} />
        <Route exact path='/chatrooms' component={ChatRooms} />
        <Route exact path='/new' component={NewRoom} />
      </Switch>
    </Router>
  );
}

export default App;
