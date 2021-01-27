import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import Modal from 'react-modal';
import styled from 'styled-components';
import Layout from '../Layout/Layout';
import { addLike, removeLike, deletePost } from '../../actions/post';
import { ProfilePic } from '../../styles';
import ChatIcon from '../../icons/chat';
import HeartIcon from '../../icons/heart';
import { getPost } from '../../actions/post';
import Moment from 'react-moment';
import Comment from '../Comment';
import Post from '../Post/Post';

const SinglePost = () => {
  const [openComment, setOpenComment] = useState(false);

  const dispatch = useDispatch();
  const { id } = useParams();
  const { post, comments } = useSelector(state => state.post);
  const { user: authUser } = useSelector(state => state.auth);
  const { text, likes, user, date, _id } = post;

  const like = () => {
    const found = likes && likes.some(el => el.user === authUser._id);
    if (found) dispatch(removeLike(_id));
    if (!found) dispatch(addLike(_id));
  };

  useEffect(() => {
    dispatch(getPost(id));
  }, [id]);
  const values = { _id, text, date, user };
  const handleOpenModal = () => {
    setOpenComment(true);
  };
  const handleCloseModal = () => {
    setOpenComment(false);
  };
 
  return (
    <Layout>
      <Container>
        <h2 className='heading'>Post</h2>
        <UserWrapper>
          <ImgWrapper>
            <ProfilePic />
          </ImgWrapper>
          <User>
            <h3 className='name'>Name</h3>
            <h3 className='username'>@{user && user.username}</h3>
          </User>
        </UserWrapper>
        <PostWrapper>
          <h2 className='post'>{text}</h2>
        </PostWrapper>
        <TimeWrapper>
          <Moment format='LT'>{date}</Moment> •{' '}
          <Moment format='LL'>{date}</Moment>
        </TimeWrapper>
        <DetailWrapper>
          <div className='detail'>
            <h3>{comments && comments.length}</h3>
            <span>comments</span>
          </div>
          <div className='detail'>
            <h3>{likes && likes.length}</h3>
            <span>likes</span>
          </div>
        </DetailWrapper>
        <PostActions>
          <button className='button' onClick={handleOpenModal}>
            <ChatIcon />
          </button>
          <button className='button' onClick={like}>
            <HeartIcon
              liked={
                authUser &&
                authUser._id &&
                likes &&
                likes.some(el => el.user === authUser._id)
              }
            />
          </button>
        </PostActions>
      </Container>
      <div>
        {comments.map(comment => {
          return <Post key={comment._id} post={comment} auth={authUser} />;
        })}
      </div>
      <Modal
        closeTimeoutMS={200}
        isOpen={openComment}
        onRequestClose={handleCloseModal}
        style={{
          content: {
            height: '38rem'
          }
        }}
      >
        <Comment closeModal={handleCloseModal} post={values} />
      </Modal>
    </Layout>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 1px solid rgb(229, 232, 236);
  .heading {
    font-size: 2rem;
    font-weight: 800;
    border-bottom: 1px solid rgba(229, 232, 236);
    padding: 1rem 2rem;
  }
`;

const ImgWrapper = styled.div`
  margin-right: 1rem;
  z-index: 110;
`;

const UserWrapper = styled.div`
  padding: 1rem 2rem;
  display: flex;
`;
const User = styled.div`
  display: flex;
  flex-direction: column;

  .name {
    font-size: 1.6rem;
    font-weight: 400;
    text-transform: capitalize;
  }
  .username {
    font-size: 1.6rem;
    font-weight: 400;
    color: rgba(161, 165, 168);
    line-height: 1;
  }
`;
const PostWrapper = styled.div`
  margin-left: 2rem;
  .post {
    font-size: 2.5rem;
    font-weight: 400;
  }
`;
const TimeWrapper = styled.div`
  margin: 1rem 2rem 0rem 2rem;
  padding: 1rem 0rem;
  font-size: 1.6rem;
  color: rgba(161, 165, 168);
  border-bottom: 1px solid rgb(229, 232, 236);
`;
const DetailWrapper = styled.div`
  margin: 0rem 2rem;
  border-bottom: 1px solid rgb(229, 232, 236);
  display: flex;
  padding: 1.2rem 0rem;
  .detail {
    margin-right: 1.5rem;
    h3 {
      display: inline;
      margin-right: 0.5rem;
      font-size: 1.6rem;
    }
    span {
      color: rgba(161, 165, 168);
      display: inline;
      font-size: 1.6rem;
    }
  }
`;
const PostActions = styled.div`
  margin-left: 2rem;
  display: flex;
  padding: 1rem 0rem;

  .button {
    border: none;
    width: 4rem;
    height: 4rem;
    padding: 0.6rem 0.8rem;
    border-radius: 50%;
    cursor: pointer;
    outline: none;
    color: rgb(135, 139, 141);
    z-index: 110;
    margin-right: 3rem;
    &:hover {
      color: rgb(131, 175, 131);
      background-color: rgb(226, 243, 202);
    }
    &:active {
      color: rgb(90, 168, 90);
      background-color: rgb(202, 223, 202);
    }
  }
`;

export default SinglePost;
