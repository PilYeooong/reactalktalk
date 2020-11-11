const express = require('express');
const { ChatRoom, Chat, User } = require('../models');

const router = express.Router();

router.post('/', async (req, res, next) => {
  try {
    const { name } = req.body;
    const exChatRoom = await ChatRoom.findOne({ where: { name } });
    if (exChatRoom) {
      return res.status(400).send('같은 이름의 채팅방이 존재합니다.');
    }
    const newChatRoom = await ChatRoom.create({
      name,
      type: 'public'
    });
    const io = req.app.get('io');
    io.of('/room').emit('newRoom', newChatRoom);
    return res.status(200).send('created');
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  const { id: ChatRoomId } = req.params;
  try {
    const chattings = await Chat.findAll({
      where: { ChatRoomId },
      include: [{ model: User, attributes: ['nickname'] }],
    });
    return res.status(200).send(chattings);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.post('/:id', async (req, res, next) => {
  try {
    const { id: ChatRoomId } = req.params;
    const newChat = await Chat.create({
      UserId: req.user.id,
      ChatRoomId,
      content: req.body.content,
    });
    const chatToSend = Object.assign(newChat.toJSON(), {
      User: { nickname: req.user.nickname },
    });
    const io = req.app.get('io');
    const chatRoom = `chat-${ChatRoomId}`;
    io.of(chatRoom).emit('newMessage', chatToSend);
    return res.status(200).send('ok');
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.get('/dm', async (req, res, next) => {
  try {
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.post('/dm', async (req, res, next) => {
  try {
    
    const dmRoom = await ChatRoom.create({
      name
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.get('/dm/:id', async (req, res, next) => {
  try {
    
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.post('/dm/:id', async (req, res, next) => {
  try {
    
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
