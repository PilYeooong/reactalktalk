const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');

const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const User = require('../models/user');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    if (req.user) {
      const user = await User.findOne({
        where: { id: req.user.id },
        attributes: {
          exclude: ['password'],
        }
      });
      return res.status(200).send(user);
    } else {
      return res.status(200).send(null);
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
})

router.post('/join', isNotLoggedIn, async (req, res, next) => {
  const { email, nickname, password } = req.body;
  try {
    const exUser = await User.findOne({ where: { email } });
    if (exUser) {
      return res.redirect('/join?joinError=이미 가입된 이메일입니다.');
    }
    const hash = await bcrypt.hash(password, 12);
    const newUser = await User.create({
      email,
      nickname,
      password: hash,
    });
    return res.status(200).send(newUser);
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

router.post('/login', isNotLoggedIn, (req, res, next) => {
  passport.authenticate('local', (authError, user, info) => {
    if (authError) {
      console.error(authError);
      return next(authError);
    }
    if (info) {
      return res
        .status(401)
        .send(
          '해당 이메일로 가입된 계정이 없거나 비밀번호가 일치하지 않습니다.'
        );
    }
    return req.login(user, async (loginError) => {
      if (loginError) {
        console.error(loginError);
        return next(loginError);
      }
      const loginUser = await User.findOne({
        where: { id: user.id },
        attributes: { exclude: ['password'] },
      });
      return res.status(200).send(loginUser);
    });
  })(req, res, next);
});

router.post('/logout', isLoggedIn, (req, res) => {
  req.logout();
  req.session.destroy();
  res.status(200).send('logout');
});

module.exports = router;
