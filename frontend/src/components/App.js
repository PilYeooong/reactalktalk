import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'global-styles/main.scss';

import Home from 'pages/Home';
import ChatRooms from 'pages/ChatRooms';
import LogIn from 'pages/Login';
import SignUp from 'pages/SignUp';
import NewRoom from 'pages/NewRoom';
import ChatRoom from 'pages/ChatRoom';
import DMList from 'pages/DMList';
import DM from 'pages/DM';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/login' component={LogIn} />
        <Route exact path='/new' component={NewRoom} />
        <Route exact path='/chatrooms' component={ChatRooms} />
        <Route exact path='/chatroom/:id' component={ChatRoom}/>
        <Route exact path='/dm' component={DMList} />
        <Route exact path='/dm/:id' component={DM}/>
      </Switch>
    </Router>
  );
}

export default App;
