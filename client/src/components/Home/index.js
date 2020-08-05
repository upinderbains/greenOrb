import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CreatePost from '../CreatePost';

import Post from '../Post.js';
import { getPosts } from '../../actions/post';

const Home = () => {
  const auth = useSelector((state) => state.auth);
  const { user } = auth;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);
  return (
    <>
      <CreatePost />
      <Post />
    </>
  );
};

export default Home;
