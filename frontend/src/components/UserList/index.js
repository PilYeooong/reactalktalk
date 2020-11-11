import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { LOAD_USERLIST_REQUEST } from 'reducers/user';
import User from 'components/User';

import './styles.scss';

const UserList = () => {
  const dispatch = useDispatch();
  const me = useSelector(state => state.user.me);
  const userList = useSelector(state => state.user.userList);

  useEffect(() => {
    dispatch({
      type: LOAD_USERLIST_REQUEST
    })
  }, []);

  return (
    <div className="userlist">
      {!me && <div className="userlist-message">유저목록을 보려면 로그인 하세요.</div>}
      {me && userList.map((user, idx) => user.id !== me.id ? <User user={user} me={me} /> : null)}
    </div>
  )
}

export default UserList
