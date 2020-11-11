const express = require('express');
const { User } = require('../models');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({ attributes: { exclude: ['password'] } });
    return res.status(200).send(users);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
