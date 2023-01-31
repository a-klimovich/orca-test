import { useState } from "react";
import Header from "../components/Header";

import TableModule from "../modules/Table";
import CardsModule from "../modules/Cards";

const TestModule = () => {
  const [isRow, setIsRow] = useState(false);

  const handleChange = (val) => setIsRow(val);

  return (
    <>
      <Header handleChange={handleChange} />
      {isRow ? <TableModule /> : <CardsModule />}
    </>
  );
};

export default TestModule;
