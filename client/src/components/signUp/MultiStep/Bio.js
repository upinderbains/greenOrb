import React from 'react';
import { Logo, Button, FormGroup } from '../../../styles';

const Bio = ({ onChange, values, nextStep, prevStep }) => {
  const { bio } = values;
  return (
    <>
      <div>
        <Button onClick={() => nextStep()}>Continue</Button>
        <Logo />
        <Button onClick={() => prevStep()}>Prev</Button>
      </div>
      <h1>Describe yourself</h1>
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
