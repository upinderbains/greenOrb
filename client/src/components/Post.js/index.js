import React from 'react';
import SinglePost from './SinglePost';
import { useSelector } from 'react-redux';

const Posts = () => {
  const state = useSelector(state => state);
  const { post, auth } = state;
  const { posts } = post;
  const { user } = auth;
  return (
    <div>
      {posts.map(singlePost => (
        <SinglePost key={singlePost._id} post={singlePost} auth={user} />
      ))}
    </div>
  );
};

export default Posts;
