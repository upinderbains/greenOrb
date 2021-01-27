import styled from 'styled-components';

const Button = styled.button`
  display: block;
  background-color: var(--color-primary);
  border-radius: 30px;
  padding: 0.7em 0.5em;
  transition: all 0.3s;
  text-decoration: none;
  color: var(--color-white);
  cursor: pointer;
  font-size: var(--fs-4);
  font-weight: 700;
  width: 100%;
  z-index: 110;

  &:hover,
  &:focus {
    background-color: var(--color-secondary);
  }
  &:active {
    background-color: var(--color-tertiary);
    color: white;
  }
  &:disabled{
    opacity: 0.5;
    cursor: default;
    background-color: var(--color-primary);
  }
`;

export default Button;
