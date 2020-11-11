const express = require('express');
const authRouter = require('./auth');
const usersRouter = require('./users');
const chatRoomsRouter = require('./chatrooms');
const chatRoomRouter = require('./chatroom');

const router = express.Router();

router.use('/auth', authRouter);
router.use('/users', usersRouter);
router.use('/chatroom', chatRoomRouter);
router.use('/chatrooms', chatRoomsRouter);

module.exports = router;
