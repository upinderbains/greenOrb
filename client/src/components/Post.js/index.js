import React from 'react';
import SinglePost from './SinglePost';
import { useSelector } from 'react-redux';

const Posts = () => {
  const post = useSelector((state) => state.post);
  const { posts } = post;
  return (
    <div>
      {posts.map((singlePost) => (
        <SinglePost key={singlePost._id} post={singlePost} />
      ))}
    </div>
  );
};

export default Posts;
