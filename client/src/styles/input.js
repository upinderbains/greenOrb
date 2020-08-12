import styled from 'styled-components';

const FormGroup = styled.div`
  width: 100%;
  height: auto;
  font-size: 1.2rem;
  position: relative;
  background-color: rgb(237, 239, 241);
  display: flex;
  flex-direction: column-reverse;
  border-radius: 3px;

  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }

  .field {
    width: 100%;
    height: 100%;
    pointer-events: none;
    font-size: 1.4rem;
    color: rgb(99, 100, 102);
    border-radius: 3px;
    padding: 2px 10px;
    transition: all 0.3s;
  }
  .input {
    width: 100%;
    height: 100%;
    padding-bottom: 25px;
    border: none;
    font-size: 1.8rem;
    outline: none;
    resize: none;
    background: transparent;
    border-radius: 3px;
    padding-left: 10px;
    transition: all 0.3s;
    border-bottom: 2px solid rgb(99, 100, 102);

    &:focus + p {
      color: rgb(118, 155, 118);
    }
    &:focus {
      border-bottom: 2px solid rgb(118, 155, 118);
    }
    &::placeholder {
      font-size: 1.6rem;
    }
  }
`;

export default FormGroup;
