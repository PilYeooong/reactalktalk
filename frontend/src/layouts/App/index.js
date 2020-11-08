import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { LOAD_MY_INFO_REQUEST, LOG_OUT_REQUEST } from 'reducers/user';
import './styles.scss';

const AppLayout = ({ children }) => {
  const dispatch = useDispatch();
  const me = useSelector((state) => state.user.me);

  useEffect(() => {
    dispatch({
      type: LOAD_MY_INFO_REQUEST
    });
  }, []);

  const onClickLogOut = useCallback(() => {
    dispatch({
      type: LOG_OUT_REQUEST
    })
  }, []);

  return (
    <div className="container">
      <header>
        <div className="logo">리액톡</div>
        <nav className="top-menus">
          {!me ? (
            <>
              <Link to="/signup">회원가입</Link>
              <Link to="/login">로그인</Link>
            </>
          ) : <Link onClick={onClickLogOut}>로그아웃</Link>}
        </nav>
      </header>
      <div className="content">{children}</div>
      <div className="bottom-menus">
        <div className="user-list">
          <Link to="/">유저 목록</Link>
        </div>
        <div className="chat-list">
          <Link to="/chatrooms">채팅방</Link>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
