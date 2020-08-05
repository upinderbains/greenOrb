import React from 'react';
import styled from 'styled-components';
import ProfilePic from '../../styles/profilePic';
import icon from '../../icons/sprite.svg';

const SinglePost = ({ post: { _id, text, date, user } }) => {
  const { username } = user;
  return (
    <Container>
      <ImgWrapper>
        <ProfilePic />
      </ImgWrapper>
      <PostWrapper>
        <UserName>
          <p className="name">{username}</p>
          <span className="username">@upinder11 •</span>
        </UserName>
        <div className="text">
          <p>{text}</p>
        </div>
        <ActionWrapper>
          <div className="action">
            <Button>
              <Svg>
                <use xlinkHref={`${icon}#icon-chat`} />
              </Svg>
            </Button>
            <span className="action_num">5</span>
          </div>
          <div className="action">
            <Button>
              <Svg>
                <use xlinkHref={`${icon}#icon-heart`} />
              </Svg>
            </Button>
            <span className="action_num">5</span>
          </div>
        </ActionWrapper>
      </PostWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  padding: 1rem;
  border-bottom: 1px solid rgb(229, 232, 236);
`;

const ImgWrapper = styled.div`
  margin-right: 1rem;
`;
const PostWrapper = styled.div`
  width: 90%;

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

const UserName = styled.div`
  margin-bottom: 0.5rem;
  .name {
    font-size: 1.6rem;
    font-weight: 700;
    display: inline-block;
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
  outline: nonoe;
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
  fill: none;
  stroke: currentColor;
  outline: none;
`;
export default SinglePost;
