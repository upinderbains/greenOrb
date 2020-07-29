import styled from 'styled-components';

const Button = styled.button`
  display: block;
  background-color: var(--color-primary);
  border-radius: 30px;
  padding: 0.9em 1.5em;
  margin: 2rem 0rem 2rem;
  transition: all 0.3s;
  text-decoration: none;
  color: var(--color-white);
  cursor: pointer;
  font-size: var(--fs-3);
  font-weight: 700;
  width: 100%;

  &:hover,
  &:focus {
    background-color: var(--color-secondary);
  }
  &:active {
    background-color: var(--color-tertiary);
    color: white;
  }
`;

export default Button;
