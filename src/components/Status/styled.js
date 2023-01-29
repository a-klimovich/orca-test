import styled, {css} from "styled-components"

const sizeStyle = {
  sm: css`
    width: 16px;
    height: 16px;
    padding: 4px 3px;

    svg {
      width: 8px;
      height: 8px;
    }
  `,

  md: css`
    width: 26px;
    height: 26px;
    padding: 6px;
  `,

  lg: css`
    width: 32px;
    height: 32px;
    padding: 8px;
  `
}

export const StatusStyled = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({variant}) => variant === 'table' ? '#E2005E' : '#CACFDB'};
  border-radius: 4px;
  background-color: ${({variant}) => variant === 'modal' ? '#E2005E' : 'transparent'};

  ${({size}) => sizeStyle[size]};
`;
