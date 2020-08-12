import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import ProfilePic from '../../styles/profilePic';
import Button from '../../styles/button';
import FormGroup from '../../styles/input';
import { createProfile } from '../../actions/profile';

const EditProfile = ({ closeModal, profile }) => {
  const [formData, setFormData] = useState({
    name: '',
    bio: '',
    location: ''
  });

  const { name, bio, location } = formData;

  useEffect(() => {
    if (profile) {
      setFormData({
        name: profile.name,
        bio: profile.bio,
        location: profile.location
      });
    }
  }, [profile]);

  const dispatch = useDispatch();
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSave = () => {
    console.log(formData)
    dispatch(createProfile(formData));
    closeModal();
  };
  return (
    <Wrapper>
      <FormActions>
        <div className='close'>
          <button className='cross' onClick={() => closeModal()}>
            &#10005;
          </button>
          <span>Edit Profile</span>
        </div>
        <div className='button'>
          <Button onClick={onSave}>Save</Button>
        </div>
      </FormActions>
      <BackgroundImage>
        background image
        <div>
          <StyledProfilePic />
        </div>
      </BackgroundImage>
      <Form>
        <FormGroup>
          <input
            type='text'
            className='input'
            name='name'
            placeholder='Add your name'
            autoComplete='off'
            autofill='off'
            maxLength='50'
            value={name}
            onChange={e => onChange(e)}
            required
          />
          <p className='field'>Name</p>
        </FormGroup>
        <FormGroup>
          <textarea
            type='text'
            name='bio'
            placeholder='Add your bio'
            autoComplete='off'
            autofill='off'
            maxLength='160'
            rows='100'
            value={bio}
            className='input'
            onChange={e => onChange(e)}
            style={{ height: '80px' }}
          />
          <p className='field'>Bio</p>
        </FormGroup>
        <FormGroup>
          <input
            type='text'
            className='input'
            name='location'
            placeholder='Add your location'
            autoComplete='off'
            autofill='off'
            onChange={e => onChange(e)}
            value={location}
            maxLength='30'
          />
          <p className='field'>Location</p>
        </FormGroup>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const FormActions = styled.div`
  display: flex;
  width: 100%;

  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;

  .close {
    font-size: 1.8rem;

    span {
      margin-left: 3rem;
      font-weight: 600;
    }
  }
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

const BackgroundImage = styled.div`
  width: 100%;
  height: 20rem;
  background: rgb(204, 214, 221);
  position: relative;
`;
const StyledProfilePic = styled(ProfilePic)`
  position: absolute;
  bottom: 0;
  margin-left: 2rem;
  transform: translateY(60%);
`;

const Form = styled.form`
  width: 95%;
  margin: 5rem auto;
`;

export default EditProfile;
