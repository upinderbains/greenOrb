import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CreatePost from '../CreatePost';
import Post from '../Post';
import { getPosts } from '../../actions/post';

const Home = () => {
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
