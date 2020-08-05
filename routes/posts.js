const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const Posts = require('../models/Posts');
const Profile = require('../models/Profile');

router.get('/', auth, async (req, res, next) => {
  try {
    const posts = await Posts.find()
      .sort({ date: -1 })
      .populate('user', ['username']);
    res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
});

router.post(
  '/',
  [check('text', 'Some text is required').not().isEmpty()],
  auth,
  async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const newPost = new Posts({
        text: req.body.text,
        user: req.user.id,
      });
      const post = await newPost.save();
      res.status(200).json(post);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id', auth, async (req, res, next) => {
  try {
    const post = await Posts.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ msg: 'Post not found' });
    }
    if (post.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }
    await post.remove();
    res.json({ msg: 'Post removed' });
  } catch (error) {
    if (error.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Post not found' });
    }
    next(error);
  }
});

router.put('/like/:id', auth, async (req, res, next) => {
  try {
    const post = await Posts.findById(req.params.id);
    const ifLiked = post.likes.some((el) => el.user.toString() === req.user.id);
    if (ifLiked) {
      return res.status(404).json({ msg: 'Post already liked' });
    }
    post.likes.unshift({ user: req.user.id });
    await post.save();
    res.json(post.likes);
  } catch (error) {
    if (error.kind === 'ObjectId') {
      return res.status(400).json({ msg: 'Post not found' });
    }
    next(error);
  }
});

router.put('/unlike/:id', auth, async (req, res, next) => {
  try {
    const post = await Posts.findById(req.params.id);
    const ifLiked = post.likes.some((el) => el.user.toString() === req.user.id);
    if (!ifLiked) {
      return res.status(400).json({ msg: 'Post not yet liked' });
    }
    const removeIndex = post.likes.findIndex(
      (el) => el.user.toString() === req.user.id
    );
    console.log(removeIndex);
    post.likes.splice(removeIndex, 1);
    await post.save();
    res.json(post.likes);
  } catch (error) {
    if (error.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Post not found' });
    }
    next(error);
  }
});

module.exports = router;
