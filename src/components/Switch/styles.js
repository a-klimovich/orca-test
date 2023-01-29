import styled from 'styled-components';

import { ReactComponent as TypeViewRowSVG } from '../../assets/items-row.svg';
import { ReactComponent as TypeViewBoxSVG } from '../../assets/items-block.svg';

const SwitchContainer = styled.label`
  display: inline-block;
  position: relative;
  width: 60px;
  height: 30px;
  background: #FFFFFF;
  border: 1px solid #CACFDB;
  border-radius: 4px;
  cursor: pointer;
`;

const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  :checked + .slider:before {
    transform: translateX(29px);
  }
`;

const SwitchSlider = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: .4s;
  :before {
    position: absolute;
    content: "";
    height: 26px;
    width: 27px;
    left: 1px;
    bottom: 1px;
    background-color: var(--blue);
    border-radius: 2px;
    transition: .4s;
  }
`;

const SvgBlock = styled(TypeViewBoxSVG)`
  position: absolute;
  top: 50%;
  left: 20%;
  transform: translate(-25%, -50%);

  & path {
    fill: ${({checked}) => checked ? 'var(--dark)' : 'var(--white)'};
  }
`

const SvgRow = styled(TypeViewRowSVG)`
  position: absolute;
  top: 50%;
  right: 20%;
  transform: translate(25%, -50%);

  & path {
    fill: ${({checked}) => !checked ? 'var(--dark)' : 'var(--white)'};
  }
`