import styled from 'styled-components';
import defaultPic from '../img/default-avatar.png';

const ProfilePic = styled.img`
  width: 5rem;
  border-radius: 50%;
  object-fit: contain;
`;

ProfilePic.defaultProps = {
  src: defaultPic,
};

export default ProfilePic;
