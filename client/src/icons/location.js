import React from 'react';
import styled from 'styled-components';

const LocationIcon = () => {
  return (
    <StyledSvg
      enable-background='new 0 0 100 100'
      id='Layer_1'
      version='1.1'
      viewBox='0 0 100 100'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g>
        <path
          d='M50.2,21.1c-12.7,0-22.9,10.3-22.9,22.9s22.9,37.1,22.9,37.1S73.1,56.7,73.1,44S62.9,21.1,50.2,21.1z    M50.2,78.1c-2.1-2.3-6-6.8-9.9-12.1c-7.2-9.7-11-17.3-11-22.1c0-11.5,9.4-20.9,20.9-20.9S71.1,32.5,71.1,44   c0,4.7-3.8,12.4-11,22.1C56.2,71.3,52.3,75.8,50.2,78.1z'
          fill='#a1a5a8'
        />
        <path
          d='M50.2,32.1c-6,0-10.8,4.8-10.8,10.8c0,6,4.8,10.8,10.8,10.8c6,0,10.8-4.8,10.8-10.8   C61,37,56.2,32.1,50.2,32.1z M56.4,49.2c-1.6,1.6-3.8,2.6-6.2,2.6c-2.4,0-4.6-1-6.2-2.6c-1.6-1.6-2.6-3.8-2.6-6.2   c0-2.4,1-4.6,2.6-6.2c1.6-1.6,3.8-2.6,6.2-2.6c2.4,0,4.6,1,6.2,2.6c1.6,1.6,2.6,3.8,2.6,6.2C59,45.4,58,47.6,56.4,49.2z'
          fill='#a1a5a8'
        />
      </g>
    </StyledSvg>
  );
};

const StyledSvg = styled.svg`
  width: 3rem;
  height: 3rem;
  stroke: #a1a5a8;
  outline: none;
`;
export default LocationIcon;
