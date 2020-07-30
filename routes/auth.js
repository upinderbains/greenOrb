const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
require('dotenv').config();
const secret = process.env.JWT_SECRET;

const auth = require('../middleware/auth');
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json('Server Error');
  }
});

router.post(
  '/login',
  [
    check('username', 'username is required').not().isEmpty(),
    check('password', 'Please enter a password with 6 or more characters')
      .trim()
      .exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { username, password } = req.body;
    try {
      const user = await User.findOne({ username });
      if (user) {
        const match = await bcrypt.compare(password, user.password);
        if (match) {
          const payload = {
            user: {
              id: user.id,
            },
          };
          jwt.sign(payload, secret, { expiresIn: 60 }, (err, token) => {
            if (err) next(err);
            return res.status(200).json({ token });
          });
        } else {
          return res
            .status(400)
            .json({ errors: [{ msg: 'Invalid Credentials' }] });
        }
      } else {
        res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
      }
    } catch (error) {
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
