import React from 'react';
import styled from 'styled-components';
import SearchIcon from '../../icons/search'

const Searchbar = () => {
  return (
    <Container>
      <Form>
        <input className="input" type="text" placeholder="Search" />
        <div className="icon">
          <SearchIcon />
        </div>
      </Form>
    </Container>
  );
};
const Container = styled.section`
  grid-area: search;
  border-left: 1px solid rgb(201, 199, 199);
  padding: 5rem 2rem;
`;


const Form = styled.form`
  position: relative;
  width: 40rem;
  .input {
    position: absolute;
    width: 70%;
    left: 3rem;
    top: 0.2rem;
    font-size: 1.5rem;
    outline: none;
    border: none;
    background: none;

    &:focus + .icon {
      color: green;

      background-color: #fff;
    }
  }

  .icon {
    color: rgba(135, 139, 141);
    width: 100%;
    background-color: rgb(230, 236, 240);
    border-radius: 30px;
    transition: all 0.3s;
  }
`;

export default Searchbar;
