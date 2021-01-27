import React from 'react';
import styled from 'styled-components';
import { Logo, Button, FormGroup } from '../../../styles';

const Name = ({ onChange, values, nextStep }) => {
  const { name } = values;

  const submit = () => {
    nextStep();
  };
  return (
    <>
      <Wrapper>
        <Logo />
        <h1>Create your account</h1>
        <Button
          onClick={submit}
          style={{ width: '10rem' }}
          disabled={name.length < 1}
        >
          Next
        </Button>
      </Wrapper>
      <Form>
        <FormGroup>
          <input
            type='text'
            className='input'
            name='name'
            autoComplete='off'
            autofill='off'
            maxLength='50'
            value={name}
            onChange={e => onChange(e)}
            required
          />
          <p className='field'>Name</p>
        </FormGroup>
      </Form>
    </>
  );
};

export default Name;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
`;

const Form = styled.form`
  margin-top: 2rem;
`;
