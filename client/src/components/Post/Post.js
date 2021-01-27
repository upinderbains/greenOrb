import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import { Link, useHistory } from 'react-router-dom';
import ProfilePic from '../../styles/profilePic';
import PropTypes from 'prop-types';
import ChatIcon from '../../icons/chat';
import HeartIcon from '../../icons/heart';
import Moment from 'react-moment';
import { addLike, removeLike, deletePost } from '../../actions/post';
import { useDispatch } from 'react-redux';
import Trash from './Trash';
import Comment from '../Comment';

const Post = ({ post: { _id, text, date, likes, user, comments }, auth }) => {
  const [openComment, setOpenComment] = useState(false);

  const { username } = user;
  const dispatch = useDispatch();
  const history = useHistory();
  const values = { _id, text, date, user, auth };
  const like = e => {
    e.stopPropagation();
    e.preventDefault();
    const found = likes.some(el => el.user === auth._id);
    if (found) dispatch(removeLike(_id));
    if (!found) dispatch(addLike(_id));
  };

  const deleteButton = () => {
    dispatch(deletePost(_id));
  };

  const comment = e => {
    e.preventDefault();
    e.stopPropagation();
    setOpenComment(true);
  };

  const handleCloseModal = () => {
    setOpenComment(false);
  };

  const singlePost = e => {
    history.push(`/post/${_id}`);
  };
  return (
    <>
      <Container onClick={singlePost}>
        <ImgWrapper>
          <ProfilePic />
        </ImgWrapper>
        <PostWrapper>
          <UserName>
            <ProfileLink
              to={`/profile/${user && user._id}`}
              onClick={e => e.stopPropagation()}
            >
              {username}
            </ProfileLink>
            <span className='username'>
              @upinder11 •{' '}
              <Moment fromNow ago>
                {date}
              </Moment>
            </span>
          </UserName>
          <div className='text'>
            <p>{text}</p>
          </div>
          <ActionWrapper>
            <div className='action'>
              <Button onClick={comment}>
                <ChatIcon />
              </Button>
              <span className='action_num'>{comments && comments.length}</span>
            </div>
            <div className='action'>
              <Button onClick={like}>
                <HeartIcon
                  liked={
                    auth && auth._id && likes.some(el => el.user === auth._id)
                  }
                />
              </Button>
              <span className='action_num'>{likes.length}</span>
            </div>
          </ActionWrapper>
          {user && auth && user._id && auth._id && user._id === auth._id ? (
            <DeleteButton onClick={deleteButton}>
              <Trash />
            </DeleteButton>
          ) : null}
        </PostWrapper>
      </Container>
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
    </>
  );
};

const Container = styled.div`
  display: flex;
  padding: 1rem;
  border-bottom: 1px solid rgb(229, 232, 236);
  width: 100%;
  width: 100%;
  height: 100%;
  z-index: 10;

  &:hover {
    background-color: #f7fafc;
    text-decoration: none;
    z-index: 10;
    cursor: pointer;
  }
`;

const ProfileLink = styled(Link)`
  z-index: 2000;
  font-size: 1.6rem;
  font-weight: 700;
  display: inline-block;
  color: rgb(20, 23, 26);
  &:hover {
    text-decoration: underline;
  }
`;
const ImgWrapper = styled.div`
  margin-right: 1rem;
`;
const PostWrapper = styled.div`
  width: 90%;
  position: relative;
  .text {
    display: inline-block;
    max-width: 100%;
    flex: 1;
    color: rgb(40, 40, 41);
    margin-bottom: 1rem;
    white-space: pre-line;
    font-size: 1.8rem;
  }
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 0;
  right: 2rem;
  width: 2rem;
  border: none;
  outline: none;
  background: transparent;
`;

const UserName = styled.div`
  margin-bottom: 0.5rem;

  .username {
    font-size: 1.6rem;
    font-weight: 400;
    color: #a1a5a8;
    margin: 0rem 0.8rem;
  }

  .profile-link {
    z-index: 110;
    color: red;
    &:hover {
      color: red;
    }
  }
`;
const ActionWrapper = styled.div`
  display: flex;
  align-items: center;

  .action {
    margin-right: 2.5rem;
    display: flex;
    align-items: center;
  }

  .action_num {
    font-size: 1.5rem;
    margin-left: 1rem;
    font-weight: 400;
    color: rgb(161, 165, 168);
  }
`;
const Button = styled.button`
  border: none;
  padding: 0.6rem 0.8rem;
  border-radius: 50%;
  cursor: pointer;
  outline: none;
  color: rgb(135, 139, 141);

  &:hover {
    color: rgb(131, 175, 131);
    background-color: rgb(226, 243, 202);
  }
  &:active {
    color: rgb(90, 168, 90);
    background-color: rgb(202, 223, 202);
  }
`;

Post.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

Post.defaultProps = {
  post: {},
  auth: {}
};
export default Post;
