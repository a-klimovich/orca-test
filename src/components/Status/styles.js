import styled, { css } from "styled-components";

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
  `,
};

const getStatusStyles = (variant) => ({
  High: css`
    ${variant === "modal" && "background-color: var(--pink)"};
    ${variant && "border-color: var(--pink)"};

    svg path {
      ${variant === "modal" && "fill: var(--white)"};
    }
  `,
  Medium: css`
    ${variant === "modal" && "background-color: var(--orange)"};
    ${variant && "border-color: var(--orange)"};
    svg path {
      ${variant === "modal" && "fill: var(--white)"};
    }
  `,
  Low: css`
    ${variant === "modal" && "background-color: var(--yellow)"};
    ${variant && "border-color: var(--yellow)"};
    svg path {
      ${variant === "modal" && "fill: var(--white)"};
    }
  `,
});

export const StatusStyled = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius);
  border: var(--border-default);
  background-color: transparent;

  ${({ variant, status }) => getStatusStyles(variant)[status]}
  ${({ size }) => sizeStyle[size]};
`;
