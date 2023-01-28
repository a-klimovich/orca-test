import { GlobalStyle, Container, Screen } from "./styles/global"

import TableModule from "./modules/Cards"
import CardsModule from "./modules/Table"


function App() {
  return (
    <>
      <GlobalStyle />
      <Screen>
        <Container>
          <TableModule />
        </Container>
      </Screen>
      <Screen>
        <Container>
          <CardsModule />
        </Container>
      </Screen>
    </>
  );
}

export default App;
