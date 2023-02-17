import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <>
      <Container>
        <h1>devfinder</h1>
        <Mode>
          <h1>LIGHT</h1>
        </Mode>
      </Container>
    </>
  );
}

export default Header;

const Container = styled.div``;
const Mode = styled.div``;
