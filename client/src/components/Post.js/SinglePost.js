import React from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import ProfilePic from '../../styles/profilePic';
import PropTypes from 'prop-types';
import icon from '../../icons/sprite.svg';
import Moment from 'react-moment';
import { addLike, removeLike, deletePost } from '../../actions/post';
import { useDispatch } from 'react-redux';
import Trash from './Trash';

const SinglePost = ({ post: { _id, text, date, likes, user }, auth }) => {
  const { username } = user;
  const dispatch = useDispatch();

  const like = () => {
    const found = likes.some(el => el.user === auth._id);
    if (found) dispatch(removeLike(_id));
    if (!found) dispatch(addLike(_id));
  };

  const deleteButton = () => {
    dispatch(deletePost(_id));
  };
  return (
    <StyledLink className='button' to={`/post/${_id}`}>
      <Container>
        <ImgWrapper>
          <ProfilePic />
        </ImgWrapper>
        <PostWrapper>
          <UserName>
            <p className='name'>{username}</p>
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
              <Button>
                <Svg>
                  <use xlinkHref={`${icon}#icon-chat`} />
                </Svg>
              </Button>
              <span className='action_num'>5</span>
            </div>
            <div className='action'>
              <Button onClick={like}>
                <Svg
                  liked={
                    auth && auth._id && likes.some(el => el.user === auth._id)
                  }
                >
                  <use xlinkHref={`${icon}#icon-heart`} />
                </Svg>
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
    </StyledLink>
  );
};

const Container = styled.div`
  display: flex;
  padding: 1rem;
  border-bottom: 1px solid rgb(229, 232, 236);
  width: 100%;
`;

const StyledLink = styled(Link)`
  width: 100%;
  height: 100%;
  display: block;

  &:hover {
    background-color: #f7fafc;
    text-decoration: none;
  }
`;
const ImgWrapper = styled.div`
  margin-right: 1rem;
  z-index: 110;
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
  z-index: 110;
`;

const UserName = styled.div`
  margin-bottom: 0.5rem;
  .name {
    font-size: 1.6rem;
    font-weight: 700;
    display: inline-block;
    z-index: 110;
  }

  .username {
    font-size: 1.6rem;
    font-weight: 400;
    color: rgba(161, 165, 168);
    margin: 0rem 0.8rem;
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

const Svg = styled.svg`
  height: 2rem;
  width: 2rem;
  fill: ${props => (props.liked ? 'rgb(131, 175, 131)' : 'none')};
  color: ${props =>
    props.liked ? 'rgb(131, 175, 131)' : 'rgb(135, 139, 141)'};
  stroke: currentColor;
  outline: none;
  z-index: 110;
`;

SinglePost.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

SinglePost.defaultProps = {
  post: {},
  auth: {}
};
export default SinglePost;
