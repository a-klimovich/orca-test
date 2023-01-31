import styled, { css } from "styled-components";

const btnVariant = {
  blue: css`
    background-color: var(--blue);
    color: var(--white);
    border-color: transparent;

    &:hover {
      border-color: var(--gray);

      svg path {
        fill: var(--white);
      }
    }
  `,

  default: css`
    background-color: var(--white);
    border-color: var(--gray);

    &:hover {
      border-color: var(--blue);
      color: var(--blue);

      svg path {
        fill: var(--blue);
      }
    }
  `,
};

const btnAlignment = {
  toLeft: css`
    margin-right: auto;
    align-self: flex-start;
  `,

  toRight: css`
    margin-left: auto;
    align-self: flex-end;
  `,

  center: css`
    margin: 0 auto;
    align-self: center;
  `,
};

export const ButtonStyled = styled.button`
  display: flex;
  gap: 8px;
  align-items: center;

  border-width: 1px;
  border-style: solid;
  border-radius: var(--radius);

  padding: 6px 8px;
  max-width: fit-content;

  &,
  svg path {
    transition: all 0.373s;
  }

  ${({ variant }) => btnVariant[variant]};

  ${({ alignment }) => btnAlignment[alignment]};
`;
