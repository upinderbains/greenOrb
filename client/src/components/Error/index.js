import React from 'react';
import styled from 'styled-components';

const index = ({ error }) => {
  return (
    <Wrapper>
      <p className='text'>{error}</p>
    </Wrapper>
  );
};

export default index;

const Wrapper = styled.div`
  margin: 1rem;
  .text {
    color: red;
    font-size: 1.8rem;
  }
`;
