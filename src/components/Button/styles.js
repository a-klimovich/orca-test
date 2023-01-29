import styled from "styled-components";

export const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  background: #ffffff;
  border: 1px solid var(--gray);
  border-radius: 4px;
  padding: 6px 8px;

  &:hover {
    border-color: var(--blue);

    svg path{
      fill: var(--blue);
    }
  }
`;

