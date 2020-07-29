import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../styles/button';
import green from '../../img/green.png';
import chat from '../../img/chat.png';
import eco from '../../img/ecology.png';
import people from '../../img/population.png';

const Landing = () => {
  return (
    <Wrapper>
      <PointPage>
        <div>
          <Content>
            <Img src={eco} alt='eco'></Img>
            <h3>Follow an Environmental Cause</h3>
          </Content>
          <Content>
            <Img src={people} alt='people'></Img>
            <h3>See what people are doing to make Earth Green</h3>
          </Content>
          <Content>
            <Img src={chat} alt='chat'></Img>
            <h3>Join the conversation</h3>
          </Content>
        </div>
      </PointPage>

      <SignPage>
        <div className='sign'>
          <Img className='logo' src={green} alt='earth'></Img>
          <h1>See what's happening in the Green Planet right now</h1>
          <h2>Join GreenOrb today.</h2>
          <div className='button'>
            <Link to='/login'>
              <Button>Log in</Button>
            </Link>
            <Link to='/signup'>
              <Button>Sign Up</Button>
            </Link>
          </div>
        </div>
      </SignPage>
    </Wrapper>
  );
};

export default Landing;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;

  @media (max-width: 1160px) {
    flex-direction: column;
  }
`;

const SignPage = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  .button {
    width: 100%;
  }

  .sign {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .logo {
    margin-bottom: 2rem;
  }

  @media (max-width: 1160px) {
    margin-top: 5rem;
    align-items: flex-start;
    .logo {
      align-self: center;
    }
  }
`;

const PointPage = styled.div`
  flex: 1;
  background-color: var(--color-secondary);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 1rem;

  h3 {
    font-size: 2rem;
    margin-left: 2rem;
    font-weight: 600;
    line-height: 1.3;
  }
`;

const Img = styled.img`
  width: 70px;
`;
