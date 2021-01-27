import React from 'react';
import styled from 'styled-components';
import { Logo, Button, FormGroup } from '../../../styles';

const Bio = ({ onChange, values, nextStep, prevStep }) => {
  const { bio } = values;
  return (
    <>
      <Wrapper>
        <div style={{ width: '10rem' }}>
          <Button onClick={() => prevStep()}>Prev</Button>
        </div>
        <Logo />
        <div style={{ width: '12rem' }}>
          <Button onClick={() => nextStep()}  disabled={bio.length < 1}>Continue</Button>
        </div>
      </Wrapper>
      <form>
        <FormGroup>
          <textarea
            type='text'
            name='bio'
            placeholder='Your bio'
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
      </form>
    </>
  );
};

export default Bio;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  .button {
    width: 10rem;
  }
`;
