import React from 'react';
import styled from 'styled-components';
import Header from './Header';

function Home() {
  return (
    <>
      <Main>
        <Header />
      </Main>
    </>
  );
}

export default Home;

const Main = styled.div`
  width: 100vw;
  height: 100vh;
  background: #141c2f;
`;
