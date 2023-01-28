import CardsContainer from "./containers/Cards"
import TableContainer from "./containers/Table"

import { GlobalStyle, Container, Screen } from "./styles/global"

function App() {
  return (
    <>
      <GlobalStyle />
      <Screen>
        <Container>
          <CardsContainer />
        </Container>
      </Screen>
      <Screen>
        <Container>
          <TableContainer />
        </Container>
      </Screen>
    </>
  );
}

export default App;
