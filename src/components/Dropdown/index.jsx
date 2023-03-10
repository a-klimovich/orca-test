import React, { useCallback, useState, useRef, createRef, useEffect } from "react";
import { createPortal } from "react-dom";

import Button from "../Button";
import { ReactComponent as ArrowSVG } from "../../assets/arrow.svg";

import { DropdownStyled, MenuStyled, MenuItemStyled, ButtonPrefixStyled } from "./styles";

const initClientRect = {
  bottom: 0,
  height: 0,
  left: 0,
  right: 0,
  top: 0,
  width: 0,
  x: 0,
  y: 0,
};

const Dropdown = (props) => {
  const { children, list, variant, isFixed = false } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [buttonPosition, setButtonPosition] = useState(initClientRect);
  const [scrollY, setScrollY] = useState(0);

  // TODO: add handler on outside click close dropdown menu
  const buttonRef = useRef();

  useEffect(() => {
    const handleWindowScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleWindowScroll);

    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
    };
  }, []);

  const handleOpen = () => {
    setButtonPosition(buttonRef.current.getBoundingClientRect());
    setIsOpen(!isOpen);
  };

  const createMenuList = useCallback(
    (arr) => (
      isOpen &&
      createPortal(
        <MenuStyled position={buttonPosition} scrollY={scrollY} isFixed={isFixed}>
          {arr?.map((el) => (
            <MenuItemStyled key={el.label}>{el?.label}</MenuItemStyled>
          ))}
        </MenuStyled>,
        document.body
      )
    ), [list, buttonPosition]);

  return (
    <DropdownStyled onClick={handleOpen}>
      <Button variant={variant} buttonRef={buttonRef}>
        {children}
        <ButtonPrefixStyled isOpen={isOpen}>
          <ArrowSVG />
        </ButtonPrefixStyled>
      </Button>

      {createMenuList(list)}

      {isOpen && <div className='overlay' />}
    </DropdownStyled>
  );
};

export default Dropdown;
