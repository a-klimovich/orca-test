import { GlobalStyle, Container } from "./styles/global"

import TestModule from './Pages'

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <TestModule />
      </Container>
    </>
  );
}

export default App;
