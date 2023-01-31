import styled from "styled-components";

import { ReactComponent as TypeViewRowSVG } from "../../assets/items-row.svg";
import { ReactComponent as TypeViewBoxSVG } from "../../assets/items-block.svg";

export const SwitchContainerStyled = styled.label`
  display: inline-block;
  position: relative;
  width: 60px;
  height: 30px;
  background: var(--white);
  border: var(--border-default);
  border-radius: var(--radius);
  cursor: pointer;
`;

export const SwitchSliderStyled = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: 0.4s;
  :before {
    position: absolute;
    content: "";
    height: 26px;
    width: 27px;
    left: 1px;
    bottom: 1px;
    background-color: var(--blue);
    border-radius: var(--radius-sm);
    transition: 0.4s;
  }
`;

export const SwitchInputStyled = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  :checked + ${SwitchSliderStyled}:before {
    transform: translateX(29px);
  }
`;

export const SvgBlockStyled = styled(TypeViewBoxSVG)`
  position: absolute;
  top: 50%;
  left: 20%;
  transform: translate(-25%, -50%);

  & path {
    fill: ${({ checked }) => (checked ? "var(--dark)" : "var(--white)")};
  }
`;

export const SvgRowStyled = styled(TypeViewRowSVG)`
  position: absolute;
  top: 50%;
  right: 20%;
  transform: translate(25%, -50%);

  & path {
    fill: ${({ checked }) => (!checked ? "var(--dark)" : "var(--white)")};
  }
`;
