const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Profile = require('../models/Profile');
const User = require('../models/User');
const { check, validationResult } = require('express-validator');
const helper = require('../utils/helper');

router.post(
  '/',
  auth,
  [
    check('name', 'name is required')
      .not()
      .isEmpty()
  ],
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, location, bio } = req.body;
    const profileFields = {};
    profileFields.user = req.user.id;

    if (name) profileFields.name = name;
    if (location) profileFields.location = location;
    if (bio) profileFields.bio = bio;

    try {
      let profile = await Profile.findOne({ user: req.user.id });
      if (profile) {
        profile = await Profile.findOneAndUpdate(
          {
            user: req.user.id
          },
          { $set: profileFields },
          { new: true }
        ).populate('user', ['username']);
        return res.json(profile);
      } else {
        profile = new Profile(profileFields);
        await profile.save();
        res.status(200).json(profile);
      }
    } catch (error) {
      next(error);
    }
  }
);

router.get('/user/:user_id', async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id
    }).populate('user', ['username']);
    if (!profile) {
      return res.status(400).json({ msg: 'Profile not found ' });
    }
    res.status(200).json(profile);
  } catch (error) {
    if (error.kind == 'ObjectId') {
      return res.status(400).json({ msg: 'Profile not found' });
    }
    res.status(500).json('Server Error');
  }
});

router.post('/upload', async (req, res, next) => {
  try {
    const myFile = req.file;
    const imageUrl = await helper.uploadImage(myFile);

    res.status(200).json({
      msg: 'Upload was successful',
      data: imageUrl
    });
  } catch (error) {
    next(error);
  }
});

router.put('/follow/:id', auth, async (req, res, next) => {
  try {
    const profile = await Profile.findOne({ user: req.params.id });
    const userProfle = await Profile.findOne({ user: req.user.id });
    profile.followers.unshift({ user: req.user.id });
    userProfle.following.unshift({ user: req.params.id });
    await profile.save();
    res.json(profile.followers);
  } catch (error) {
    if (error.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Profile not found' });
    }
    next(error);
  }
});

module.exports = router;
