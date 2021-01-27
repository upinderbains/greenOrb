import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { ProfilePic, Button } from '../../styles';
import Moment from 'react-moment';
import { createPost } from '../../actions/post';

const Comment = ({ closeModal, post }) => {
  const [comment, setComment] = useState('');
  const { _id, text, date, user, auth } = post;

  const dispatch = useDispatch();
  const onSubmit = () => {
    dispatch(createPost(comment, _id ));
    setComment('');
    closeModal();
  };

  return (
    <Container>
      <CloseButton>
        <button className='cross' onClick={() => closeModal()}>
          &#10005;
        </button>
      </CloseButton>
      <Wrapper>
        <ProfilePic />
        <div className='post'>
          <UserName>
            <p className='name'>{user && user.username}</p>
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
        </div>
      </Wrapper>
      <div className='reply'>
        <p>Replying to @{user && user.username}</p>
      </div>
      <Reply>
        <ProfilePic />
        <textarea
          type='text'
          rows='5'
          value={comment}
          onChange={e => setComment(e.target.value)}
          className='input'
          placeholder='Reply'
        />
      </Reply>
      <div className='reply-button'>
        <Button type='submit' onClick={onSubmit}>
          Reply
        </Button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  .reply-button {
    width: 9rem;
    margin: 1rem 2rem 1rem auto;
  }
  .reply {
    margin-left: 8rem;
    margin-bottom: 1rem;
    p {
      font-size: 1.6rem;
      color: rgba(161, 165, 168);
    }
  }
`;

const CloseButton = styled.div`
  padding: 1rem 2rem;
  border-bottom: 1px solid rgba(229, 232, 236);
  .cross {
    font-size: 2rem;
    border: none;
    cursor: pointer;
    color: green;
    border-radius: 50%;
    transition: all 0.3s;
    padding: 0.6rem 0.9rem;
    outline: none;
    background: none;

    &:hover {
      background-color: rgb(226, 243, 226);
    }

    &:active,
    &:visited {
      background-color: rgb(158, 211, 158);
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 2rem;

  .post {
    margin-left: 1rem;
  }
  .text {
    display: inline-block;
    max-width: 100%;
    color: rgb(40, 40, 41);
    white-space: pre-line;
    font-size: 1.8rem;
    pointer-events: none;
  }
`;
const UserName = styled.div`
  align-self: flex-start;
  .name {
    font-size: 1.6rem;
    font-weight: 700;
    display: inline-block;
    z-index: 110;
    text-transform: capitalize;
  }

  .username {
    font-size: 1.6rem;
    font-weight: 400;
    color: rgba(161, 165, 168);
    margin: 0rem 0.8rem;
  }
`;

const Reply = styled.div`
  display: flex;
  align-items: flex-start;
  margin-left: 7rem;
  padding: 1rem;

  .input {
    border: none;
    outline: none;
    font-size: 2rem;
    margin-left: 1rem;
    width: 90%;
    padding-top: 1rem;
    resize: none;

    &::placeholder {
      color: rgba(161, 165, 168);
      font-weight: 400;
      font-size: 1.6rem;
    }
  }
`;
export default Comment;
