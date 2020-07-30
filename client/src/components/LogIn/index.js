import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import green from '../../img/green.png';
import Button from '../../styles/button';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from '../../actions/auth';

const Login = () => {
  const [form, setFormData] = useState({
    username: '',
    password: '',
  });

  const { username, password } = form;
  const isAuthenticated = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const onChange = (e) => {
    setFormData({ ...form, [e.target.name]: e.target.value });
  };
  const submit = (e) => {
    e.preventDefault();
    dispatch(loginUser(form));
  };
  return (
    <Container>
      <Img src={green} alt="earth"></Img>
      <h1>Log in to GreenOrb</h1>
      <Form autoComplete="off" autofill="off" onSubmit={submit}>
        <FormGroup>
          <Input
            type="text"
            name="username"
            value={username}
            onChange={(e) => onChange(e)}
            autoComplete="off"
            autofill="off"
            required
          />
          <p>Username</p>
        </FormGroup>
        <FormGroup>
          <Input
            type="password"
            value={password}
            onChange={(e) => onChange(e)}
            name="password"
            autoComplete="new-password"
            minLength="6"
          />
          <p>Password</p>
        </FormGroup>
        <Button type="submit">Log In</Button>
      </Form>
      <p className="foot-text">
        Don't have an account?﹒
        <Link to="/signup" className="link">
          Sign Up
        </Link>
      </p>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  h1 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .foot-text {
    margin-top: 1.5rem;
    font-size: 1.5rem;
  }
  .link,
  .link:link,
  .link:visited {
    text-decoration: none;
    color: rgb(119, 158, 119);
  }
  .link:hover {
    text-decoration: underline;
  }
`;

const Img = styled.img`
  width: 50px;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  width: 50rem;
`;
const FormGroup = styled.div`
  width: 100%;
  height: 60px;
  font-size: 1.2rem;
  position: relative;

  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }

  p {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0%;
    pointer-events: none;
    font-size: 1.4rem;
    color: rgb(99, 100, 102);
    border-bottom: 2px solid currentColor;
    border-radius: 3px;
    padding: 5px;
    transition: all 0.3s;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  padding-top: 25px;
  border: none;
  font-size: 1.8rem;
  outline: none;
  background-color: rgb(237, 239, 241);
  border-radius: 3px;
  padding-left: 5px;
  transition: all 0.3s;

  &:focus + p {
    color: rgb(118, 155, 118);
  }
`;
export default Login;
