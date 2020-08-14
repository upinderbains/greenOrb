import React from 'react';
import { Logo, Button, FormGroup } from '../../../styles';

const Name = ({ onChange, values, nextStep }) => {
  const { name } = values;
  return (
    <>
      <div>
        <Button onClick={() => nextStep()}>Next</Button>
        <Logo />
      </div>
      <h1>Create your account</h1>
      <form>
        <FormGroup>
          <input
            type='text'
            className='input'
            name='name'
            placeholder='Name'
            autoComplete='off'
            autofill='off'
            maxLength='50'
            value={name}
            onChange={e => onChange(e)}
            required
          />
          <p className='field'>Name</p>
        </FormGroup>
      </form>
    </>
  );
};

export default Name;
