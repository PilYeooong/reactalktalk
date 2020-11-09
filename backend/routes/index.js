const express = require('express');
const authRouter = require('./auth');
const chatRoomsRouter = require('./chatrooms');
const chatRoomRouter = require('./chatroom');

const router = express.Router();

router.use('/auth', authRouter);
router.use('/chatroom', chatRoomRouter);
router.use('/chatrooms', chatRoomsRouter);

module.exports = router;
