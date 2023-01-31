import styled from "styled-components";

import Card from "../../components/Card";

const GridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, calc((100% / 2) - (32px / 2)));
  grid-template-rows: auto;
  gap: 32px;
`;

const CardsModule = (props) => {
  const {data} = props;

  return (
    <GridStyled>
      {data.map((el) => (
        <Card key={el.value} {...el} />
      ))}
    </GridStyled>
  );
};

export default CardsModule;
