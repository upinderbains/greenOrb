import React from 'react';
import styled from 'styled-components';

const MessageIcon = () => {
  return (
    <StyledSvg
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='20'
      viewBox='0 0 20 20'
    >
      <title>message</title>
      <path d='M18 6v7c0 1.1-0.9 2-2 2h-4v3l-4-3h-4c-1.101 0-2-0.9-2-2v-7c0-1.1 0.899-2 2-2h12c1.1 0 2 0.9 2 2z'></path>
    </StyledSvg>
  );
};

const StyledSvg = styled.svg`
  height: 3rem;
  width: 3rem;
  margin-right: 2rem;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.2;
`;
export default MessageIcon;
