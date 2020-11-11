import React from 'react'

import './styles.scss';

const User = ({ user }) => {
  return (
    <div className="user">
      {user.nickname}
      <i class="fas fa-plus-square"></i>
    </div>
  )
}

export default User;
