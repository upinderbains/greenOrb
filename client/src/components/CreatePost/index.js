import React, { useState } from 'react';
import styled, { StyleSheetContext } from 'styled-components';
import Logo from '../../styles/logo';
import Button from '../../styles/button';
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/post';

const CreatePost = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(createPost({ text }));
    setText('');
  };
  return (
    <Container>
      <h2 className="heading">Home</h2>
      <form className="form">
        <FormGroup>
          <Logo />
          <textarea
            rows="5"
            className="textarea"
            placeholder="Say Something..."
            pattern=".*\S*"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
        </FormGroup>
        <div className="button">
          <Button type="submit" onClick={submit} disabled={!text}>
            Submit
          </Button>
        </div>
      </form>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 10px solid rgb(229, 232, 236);
  .heading {
    font-size: 2rem;
    font-weight: 800;
    border-bottom: 1px solid rgba(229, 232, 236);
    padding: 1rem;
  }

  .form {
    display: flex;
    flex-direction: column;
  }
  .button {
    width: 10rem;
    align-self: flex-end;
    margin: 0.5rem 1rem 2rem 0rem;
  }
`;

const FormGroup = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 1rem;

  .textarea {
    flex: 1;
    border: none;
    outline: none;
    font-size: 2rem;
    resize: none;
    margin-left: 1rem;
    margin-top: 1rem;
    &::placeholder {
      color: rgba(161, 165, 168);
    }
  }
`;

export default CreatePost;
