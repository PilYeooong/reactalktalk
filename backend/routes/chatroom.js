const express = require('express');
const { ChatRoom } = require('../models');

const router = express.Router();

router.post('/', async (req, res, next) => {
  try {
    const { name } = req.body;
    const exChatRoom = await ChatRoom.findOne({ where: { name }});
    if(exChatRoom) {
      return res.status(400).send('같은 이름의 채팅방이 존재합니다.');
    }
    const newChatRoom = await ChatRoom.create({
      name
    });
    const io = req.app.get('io');
    io.of('/chatroom').emit('newRoom', newChatRoom)
    return res.status(200).send('created');
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.get('/:chatroom', async (req, res, next) => {

});



module.exports = router;