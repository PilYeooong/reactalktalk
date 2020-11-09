const express = require('express');

const { ChatRoom } = require('../models');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const chatRooms = await ChatRoom.findAll({ order:[['createdAt', 'DESC']]});
    return res.status(200).send(chatRooms);
  } catch (err) {
    console.error(err);
    next(err);
  }
});



module.exports = router;