const express = require('express');

const { User, ChatRoom } = require('../models');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const chatRooms = await ChatRoom.findAll({ where: { type: 'public' }, order:[['createdAt', 'DESC']]});
    return res.status(200).send(chatRooms);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.get('/dms', async (req, res, next) => {
  try {
    if(!req.user) {
      return res.status(401).send('로그인이 필요합니다.');
    }
    const user = await User.findOne({ where: { id: req.user.id }});
    const dmRooms = await user.getChatRooms();

    return res.status(200).send(dmRooms);
  } catch (err) {
    console.error(err);
    next(err);
  }
})



module.exports = router;