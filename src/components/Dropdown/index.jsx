import React, { useCallback, useState } from "react";

import Button from "../Button";
import { ReactComponent as ArrowSVG } from "../../assets/arrow.svg";

import { DropdownStyled, MenuStyled, MenuItem, ButtonPrefixStyled } from "./styles";

const Dropdown = (props) => {
  const { children, list, onClick } = props;
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(!isOpen);

  const createMenuList = useCallback((arr) => arr.map((el) => <MenuItem>{el.label}</MenuItem>), [list]);

  return (
    <DropdownStyled onClick={handleOpen}>
      <Button onClick={onClick}>
        {children}
        <ButtonPrefixStyled isOpen={isOpen}>
          <ArrowSVG />
        </ButtonPrefixStyled>
      </Button>

      {isOpen && <MenuStyled>{...createMenuList(list)}</MenuStyled>}

      {isOpen && <div className='overlay' />}
    </DropdownStyled>
  );
};

export default Dropdown;
