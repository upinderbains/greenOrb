import React from 'react';
import styled from 'styled-components';

const CalendarIcon = ({ liked }) => {
  return (
    <StyledSvg
      fill='#a1a5a8'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 48 48'
      width='24px'
      height='24px'
    >
      <path
        fill='none'
        stroke='#a1a5a8'
        strokeMiterlimit='10'
        strokeWidth='3'
        d='M35.5,40.5h-23c-2.761,0-5-2.239-5-5v-23	c0-2.761,2.239-5,5-5h23c2.761,0,5,2.239,5,5v23C40.5,38.261,38.261,40.5,35.5,40.5z'
      />
      <line
        x1='7.5'
        x2='40.5'
        y1='15.5'
        y2='15.5'
        fill='none'
        stroke='#a1a5a8'
        strokeMiterlimit='10'
        strokeWidth='3'
      />
      <circle cx='15.5' cy='23.5' r='2.5' />
      <circle cx='24' cy='23.5' r='2.5' />
      <circle cx='15.5' cy='32.5' r='2.5' />
      <circle cx='24' cy='32.5' r='2.5' />
      <circle cx='32.5' cy='23.5' r='2.5' />
    </StyledSvg>
  );
};

const StyledSvg = styled.svg`
  width: 2rem;
  height: 2rem;
  stroke: #a1a5a8;
  outline: none;
`;
export default CalendarIcon;
