import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import Searchbar from './Searchbar';

const Layout = ({ children }) => {
  return (
    <Container>
      <Sidebar />
      <div className="main">{children}</div>
      <Searchbar />
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-areas: 'sidebar main search';
  min-height: 100vh;

  .main {
    grid-area: main;
    min-width: 600px;
  }
`;

export default Layout;
