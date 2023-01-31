import styled from "styled-components";

export const CardContentWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  border: 1px solid var(--bg-gray);
  border-radius: 4px;
  padding: 20px 32px;
`;

export const CardStyled = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 32px;
`;

export const ContentColumnStyled = styled.div`
  margin-right: auto;

  & > div {
    &:first-child {
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }
    
    padding-top: 4px;
    padding-bottom: 4px;
    margin-bottom: 8px;
  }
`;

export const CardContainerStyled = styled.div`
  display: flex;
  flex-wrap: nowrap;

  ${ContentColumnStyled}:first-child {
    padding-right: 10px;
  }
`;