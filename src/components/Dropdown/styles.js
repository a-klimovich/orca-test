import styled from 'styled-components';

export const DropdownStyled = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`

export const MenuStyled = styled.ul`
  position: absolute;
  min-width: 100%;
  width: max-content;
  top: calc(100% + 4px);
  right: 0;
  background-color: var(--white);
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  padding: 4px 0;
  z-index: 99;
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
  margin-left: 8px;
  margin-top: 2px;

  svg {
    transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0)")};
  }
`;