import React, { useEffect, useCallback } from 'react'
import { useDispatch } from 'react-redux';

import useInput from 'hooks/useInput';

const SignUp = () => {
  const dispatch = useDispatch();

  const [email, setEmail, onChangeEmail] = useInput('');
  const [nickname, setNickname, onChangeNickname] = useInput('');
  const [password, setPassword, onChangePassword] = useInput('');
  const [passwordCheck, setPasswordCheck, onChangePasswordCheck] = useInput('');

  const onSubmitForm = useCallback((e) => {
    e.preventDefault();
  }, []);

  return (
    <form>
      <label htmlFor="">이메일</label>
      <input type="text" value={email} onChange={onChangeEmail} />
      <label htmlFor="">닉네임</label>
      <input type="text" value={nickname} onChange={onChangeNickname} />
      <label htmlFor="">비밀번호</label>
      <input type="password" value={password} onChange={onChangePassword} />
      <label htmlFor="">비밀번호 확인</label>
      <input type="password" value={passwordCheck} onChange={onChangePasswordCheck} />
      <button type="submit">회원가입</button>
    </form>
  )
}

export default SignUp;
