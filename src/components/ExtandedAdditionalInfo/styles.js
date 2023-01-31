import styled from "styled-components";

export const ExtandedAdditionalInfoStyled = styled.div`
  max-height: ${({ maxHeight }) => maxHeight || "176px"};
  overflow-y: ${({ overflowY }) => overflowY || "initial"};
  padding: 32px;
  padding-bottom: 24px;
`;

export const TitleStyled = styled.p`
  color: var(--gray-dark);
  margin-bottom: 20px;
`;

export const FooterStyled = styled.div`
  display: flex;
  margin-left: auto;
  width: fit-content;
  gap: 30px;
`;
