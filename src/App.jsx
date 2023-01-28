import { GlobalStyle, Container, Screen } from "./styles/global"

import TableModule from "./modules/Table"
import CardsModule from "./modules/Cards"


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
