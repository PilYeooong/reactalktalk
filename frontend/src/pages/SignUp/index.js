import React, { useEffect, useState, useCallback } from 'react'
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import useInput from 'hooks/useInput';
import { SIGN_UP_REQUEST } from 'reducers/user';

const SignUp = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const signupDone = useSelector(state => state.user.signupDone);

  const [email, setEmail, onChangeEmail] = useInput('');
  const [nickname, setNickname, onChangeNickname] = useInput('');
  const [password, setPassword, onChangePassword] = useInput('');
  const [passwordCheck, setPasswordCheck, onChangePasswordCheck] = useInput('');
  const [isPasswordMatched, setIsPasswordMatched] = useState(false);

  useEffect(() => {
    if(signupDone) {
      history.push('/login');
    }
  }, [signupDone]);

  useEffect(() => {
    if(password === passwordCheck) {
      setIsPasswordMatched(true);
    } else {
      setIsPasswordMatched(false);
    }
  }, [password, passwordCheck]);

  const onSubmitForm = useCallback((e) => {
    e.preventDefault();
    if(!isPasswordMatched) {
      return alert('동일한 비밀번호를 입력하세요');
    }
    dispatch({
      type: SIGN_UP_REQUEST,
      data: {
        email,
        nickname,
        password
      }
    })
  }, [email, nickname, password, passwordCheck, isPasswordMatched]);

  return (
    <form onSubmit={onSubmitForm}>
      <div>
        <label htmlFor="">이메일</label>
        <input type="text" value={email} onChange={onChangeEmail} />
      </div>
      <div>
        <label htmlFor="">닉네임</label>
        <input type="text" value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <label htmlFor="">비밀번호</label>
        <input type="password" value={password} onChange={onChangePassword} />
      </div>
      <div>
        <label htmlFor="">비밀번호 확인</label>
        <input type="password" value={passwordCheck} onChange={onChangePasswordCheck} />
      </div>
      <button type="submit">회원가입</button>
    </form>
  )
}

export default SignUp;
