import styled from "styled-components"

export const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--gray);
  margin-bottom: 32px;

  img {
    max-width: 94px;
  }
`

export const WrapperStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`


export const ButtonSufixStyled = styled.span`
  display: inline-flex;
  margin-right: 8px;
`;