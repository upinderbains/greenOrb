import styled from 'styled-components';
import green from '../img/green.png';

const Logo = styled.img`
  width: 5rem;
`;

Logo.defaultProps = {
  src: green,
};

export default Logo;
