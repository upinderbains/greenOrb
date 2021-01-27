import React, { useState, useEffect, useImperativeHandle } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProfile } from '../../actions/profile';
import { getMyPost } from '../../actions/post';
import Modal from 'react-modal';
import styled from 'styled-components';
import { useParams } from 'react-router';
import ProfilePic from '../../styles/profilePic';
import Button from '../../styles/button';
import LocationIcon from '../../icons/location';
import CalendarIcon from '../../icons/calendar';
import EditProfile from './EditProfile';
import Post from '../Post';
import Moment from 'react-moment';

const Profile = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };
  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const dispatch = useDispatch();
  const { id } = useParams();
  const state = useSelector(state => state);
  const { auth, userProfile } = state;
  const { user } = auth;
  const { profile } = userProfile;
  const { name, location, bio, date, user: profileUser } = profile;

  useEffect(() => {
    dispatch(getProfile(id));
    dispatch(getMyPost(id));
  }, []);

  function ifUser() {
    let userId;
    let profileId;
    if (user) userId = user._id;
    if (profileUser) profileId = profileUser._id;
    return userId === profileId;
  }

  return (
    <>
      useImperativeHandle
      <Wrapper>
        <div>
          <ProfileTitle>
            <h3>{name}</h3>
            <span>No post yet</span>
          </ProfileTitle>
          <BackgroundImage>
            <div>
              <StyledProfilePic />
            </div>
          </BackgroundImage>
        </div>
        <div className='profile-content'>
          <div className='button'>
            {ifUser() ? (
              <Button onClick={handleOpenModal}>Edit Profile</Button>
            ) : (
              <Button>Follow</Button>
            )}
          </div>
          <ProfileTitle>
            <h1>{name}</h1>
            <span>{profile && profile.user && profile.user.username}</span>
          </ProfileTitle>
          <ProfileInfo>
            <div className='profile-bio'>{bio}</div>
            <div className='profile-info'>
              <ProfileInfoItem>
                <div className='icon'>
                  <LocationIcon />
                </div>
                <span className='location-info'>{location}</span>
              </ProfileInfoItem>
              <ProfileInfoItem>
                <div className='icon'>
                  <CalendarIcon />
                </div>
                <span className='join-info'>
                  Joined <Moment format='LL'>{date}</Moment>
                </span>
              </ProfileInfoItem>
            </div>
          </ProfileInfo>
          <ProfileFollow>
            <div className='followGroup'>
              <span>23</span>
              <h3>Following</h3>
            </div>
            <div className='followGroup'>
              <span>23</span>
              <h3>Followers</h3>
            </div>
          </ProfileFollow>
        </div>
      </Wrapper>
      <Post />
      <Modal
        closeTimeoutMS={200}
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
      >
        <EditProfile profile={profile} closeModal={handleCloseModal} />
      </Modal>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid rgb(229, 232, 236);

  .profile-content {
    margin: 2rem;
  }
  .button {
    width: 15em;
    margin-left: auto;
  }
`;

const ProfileTitle = styled.div`
  h3 {
    font-size: 1.8rem;
    padding: 2rem 1rem 2rem 2rem;
    font-weight: 800;
    line-height: 1.2;
  }
  span {
    display: block;
    font-size: 1.5rem;
  }
`;
const BackgroundImage = styled.div`
  width: 100%;
  height: 20vw;
  background: rgb(204, 214, 221);
  position: relative;
`;

const StyledProfilePic = styled(ProfilePic)`
  position: absolute;
  bottom: 0;
  margin-left: 2rem;
  transform: translateY(50%);
`;

const ProfileInfo = styled.div`
  .profile-bio {
    margin-left: 2rem;
    margin-bottom: 2rem;
    font-size: 1.5rem;
  }
  .profile-info {
    display: flex;
    margin-left: -10px;
  }
`;
const ProfileInfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2rem;
  .icon {
    display: inline-block;
  }

  .location-info {
    color: #a1a5a8;
    font-size: 1.6rem;
    text-transform: capitalize;
    font-weight: 400;
  }
  .join-info {
    color: #a1a5a8;
    font-size: 1.6rem;
    font-weight: 400;
    margin-left: 0.5rem;
  }
`;
const ProfileFollow = styled.div`
  display: flex;
  .followGroup {
    margin-right: 2rem;
    span {
      font-size: 2rem;
    }
    h3 {
      margin-left: 0.5rem;
      display: inline-block;
      font-size: 1.7rem;
    }
  }
`;

export default Profile;
