import Header from "../../components/Header"
import Card from "../../components/Card";

import styled from "styled-components";

const GridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, calc((100% / 2) - (32px / 2)));
  grid-template-rows: auto;
  gap: 32px;
`

const CardsModule = () => {
  return ( 
    <>
      <Header />
      <GridStyled>
        <Card />
        <Card />
        <Card />
        <Card />
      </GridStyled>
    </>
  );
}
 
export default CardsModule;