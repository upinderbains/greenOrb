const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

require('dotenv').config();
const secret = process.env.JWT_SECRET;

const User = require('../models/User');

router.get('/', async (req, res) => {
  const users = await User.find().select('-password');
  res.json({ users });
});


//GET All user

router.get('/', async (req, res) => {
    const users = await User.find().select('-password');
    res.json({users});
})


//GET api/users - SignUp
router.post(
  '/signup',
  [
    check('username', 'username is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters')
      .trim()
      .isLength({ min: 6 }),
  ],
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password } = req.body;

    try {
      //if user alredy exist

      let user = await User.findOne({ $or: [{ email }, { username }] });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exist' }] });
      }

      //Create a new instance of user

      user = new User({
        username,
        email,
        password,
      });

      //Encrypt the password of the user
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(payload, secret, { expiresIn: '1h' }, (err, token) => {
        if (err) next(err);
        res.status(200).json({ token });
      });
     
    } catch (error) {
      next(error)
    }
  }
);

module.exports = router;
