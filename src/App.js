import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f7f7f7;
`;

const App = () => {
  return (
    <Container>
      <h1>Welcome to the Interactive UI Builder</h1>
    </Container>
  );
};

export default App;