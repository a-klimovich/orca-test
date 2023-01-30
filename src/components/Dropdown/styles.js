import styled from 'styled-components';

export const DropdownStyled = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`

export const MenuStyled = styled.ul`
  position: absolute;
  min-width: ${({position}) => position.width + 'px'};
  width: max-content;
  top: ${(props) => ((props.position.top + props.scrollY) - props.position.height + 70) + 'px'};
  left: ${({position}) => (position.right - position.width) + 'px'};
  background-color: var(--white);
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  padding: 4px 0;
  z-index: 9999;
`

export const MenuItem = styled.li`
  padding: 4px 16px;

  &:hover {
    background-color: #E1EEFD;
    color: var(--blue);
    cursor: pointer;
  }
`

export const ButtonPrefixStyled = styled.span`
  display: inline-flex;
  margin-top: 2px;

  svg {
    transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0)")};
  }
`;