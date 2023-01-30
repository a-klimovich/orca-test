import styled from "styled-components";

export const CardContentWrapperStyles = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  border: 1px solid var(--bg-gray);
  border-radius: 4px;
  padding: 20px 32px;
`;

export const CardStyles = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 32px;
`;

export const ContentColumnStyles = styled.div`
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

export const CardContainerStyles = styled.div`
  display: flex;
  flex-wrap: nowrap;

  ${ContentColumnStyles}:first-child {
    padding-right: 10px;
  }
`;