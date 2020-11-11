import React, { useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { CREATE_DMROOM_REQUEST } from 'reducers/chatRoom';

import './styles.scss';

const User = ({ user, me }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const createDMRoomDone = useSelector(state => state.chatRoom.createDMRoomDone);
  const dmRoom = useSelector(state => state.chatRoom.dmRoom);

  const onClickDM = useCallback((userToSend) => (e) => {
    let DMRoomName = '';
    if (me.nickname > userToSend) {
      DMRoomName = me.nickname + userToSend;
    } else {
      DMRoomName = userToSend + me.nickname;
    }
    dispatch({
      type: CREATE_DMROOM_REQUEST,
      data: {
        DMRoomName,
        userId: user.id
      }
    });
  }, [me]);

  useEffect(() => {
    if (createDMRoomDone && dmRoom) {
      history.push(`/dm/${dmRoom.id}`);
    }
  }, [createDMRoomDone, dmRoom]);

  return (
    <div className="user">
      {user.nickname}
      <i className="fas fa-plus-square" onClick={onClickDM(user.nickname)}></i>
    </div>
  )
}

export default User;
