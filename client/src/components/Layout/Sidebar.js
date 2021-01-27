import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import green from '../../img/green.png';
import profile from '../../img/default-avatar.png';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../../styles/button';
import { LOGOUT } from '../../actions/type';
import HomeIcon from '../../icons/home';
import MessageIcon from '../../icons/message';

const Sidebar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);

  return (
    <Container>
      <Nav>
        <List>
          <NavLink to={'/home'}>
            <Image style={{ marginLeft: '1rem' }} src={green} alt='app logo' />
          </NavLink>
        </List>
        <List>
          <NavLink
            className='link'
            to={'/home'}
            activeStyle={{
              color: 'green'
            }}
          >
            <HomeIcon />
            <span className='text'>Home</span>
          </NavLink>
        </List>
        <List>
          <NavLink
            className='link'
            to={'/messages'}
            activeStyle={{
              color: 'green'
            }}
          >
            <MessageIcon />
            <span className='text'>Messages</span>
          </NavLink>
        </List>
        <List>
          <NavLink
            className='link'
            to={`/profile/${user && user._id}`}
            activeStyle={{
              color: 'green'
            }}
          >
            <Image src={profile} alt='app logo' />
            <span className='text'>Profile</span>
          </NavLink>
        </List>
        <List>
          <Button
            style={{ width: '15rem', marginLeft: '1rem' }}
            onClick={() =>
              dispatch({
                type: LOGOUT,
                payload: {}
              })
            }
          >
            Log out
          </Button>
        </List>
      </Nav>
    </Container>
  );
};

const Container = styled.nav`
  grid-area: sidebar;
  border-right: 1px solid rgb(201, 199, 199);
  padding: 5rem 2rem;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  list-style: none;
`;

const List = styled.li`
  margin: 0.5rem 0rem;

  .link {
    text-decoration: none;
    cursor: pointer;
    color: black;
    display: flex;
    align-items: center;
    position: relative;
    align-self: center;
    padding: 0.7rem 1rem;

    &:hover {
      color: green;
      border-radius: 5px;
      background-color: rgba(238, 250, 238);
    }
    &:hover svg {
      fill: currentColor;
    }

    .activeLink {
      color: red;

      svg {
        fill: red;
      }
    }
  }

  .text {
    font-size: 2rem;
    font-weight: 700;
  }
`;
const Image = styled.img`
  width: 3.5rem;
  margin-right: 2rem;
`;

export default Sidebar;
