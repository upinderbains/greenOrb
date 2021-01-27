import React from 'react';
import styled from 'styled-components';

const HeartIcon = ({ liked }) => {
  return (
    <StyledSvg
      className='svg'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='20'
      viewBox='0 0 20 20'
      liked={liked}
    >
      <title>heart</title>
      <path d='M17.19 4.155c-1.672-1.534-4.383-1.534-6.055 0l-1.135 1.042-1.136-1.042c-1.672-1.534-4.382-1.534-6.054 0-1.881 1.727-1.881 4.52 0 6.246l7.19 6.599 7.19-6.599c1.88-1.726 1.88-4.52 0-6.246z'></path>
    </StyledSvg>
  );
};

const StyledSvg = styled.svg`
  width: 100%;
  height: 100%;
  stroke: currentColor;
  outline: none;
  fill: ${props => (props.liked ? 'rgb(131, 175, 131)' : 'none')};
  color: ${props =>
    props.liked ? 'rgb(131, 175, 131)' : 'rgb(135, 139, 141)'};
  z-index: 110;
`;
export default HeartIcon;
