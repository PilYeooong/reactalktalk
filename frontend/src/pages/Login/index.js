import React, { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import useInput from 'hooks/useInput';
import { LOG_IN_REQUEST } from 'reducers/user';
import { useHistory } from 'react-router-dom';

const LogIn = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const me = useSelector(state => state.user.me);

  const [email, setEmail, onChangeEmail] = useInput('pilyeooong@gmail.com');
  const [password, setPassword, onChangePassword] = useInput('123');

  useEffect(() => {
    if(me) {
      history.replace('/');
    }
  }, [me]);

  const onSubmitForm = useCallback((e) => {
    e.preventDefault();
    dispatch({
      type: LOG_IN_REQUEST,
      data: {
        email,
        password
      }
    })
  }, [email, password]);

  return (
    <form onSubmit={onSubmitForm}>
      <label htmlFor="">이메일</label>
      <input type="text" value={email} onChange={onChangeEmail} />
      <label htmlFor="">비밀번호</label>
      <input type="password" value={password} onChange={onChangePassword} />
      <button type="submit">로그인</button>
    </form>
  )
}

export default LogIn;
