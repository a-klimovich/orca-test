import styled, { css } from "styled-components";

const colors = {
  white: css`
    color: var(--white);
  `,
  dark: css`
    color: var(--dark);
  `,
  gray: css`
    color: var(--gray);
  `,
  grayDark: css`
    color: var(--gray-dark);
  `,
  blue: css`
    color: var(--blue);
  `,
  pink: css`
    color: var(--pink);
  `,
  orange: css`
    color: var(--orange);
  `,
  yellow: css`
    color: var(--yellow);
  `,
};

const Base = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}` : "fit-content")};
  padding: 5px 0 5px 0;

  ${({ wordBreakAll }) =>
    wordBreakAll
      ? css`
          hyphens: auto;
          overflow-wrap: anywhere;
          word-break: break-word;
        `
      : css`
          word-break: normal;
        `}

  white-space: ${({ whiteSpaceNormal }) => (whiteSpaceNormal ? "normal" : "nowrap")};

  ${({ color }) => colors[color]};

  margin: ${({ margin }) => margin};

  span {
    color: var(--gray);
  }
`;

export const TextStyled = styled(Base)``;

export const LinkStyled = styled(Base)`
  display: inline-flex;

  &:hover {
    color: var(--blue);

    .sufix svg path {
      fill: var(--blue);
    }
  }

  .prefix {
    display: inline-block;
    padding-right: 4px;
  }

  .sufix {
    display: inline-block;
    padding-left: 4px;
  }
`;

export const CopyableStyled = styled(Base)`
  border: var(--border-default);
  border-radius: var(--radius);
  padding: 4px 0 4px 0;
  padding-right: 26px;
  padding-left: 8px;
  position: relative;
`;

export const ButtonCopyStyled = styled.button`
  position: absolute;
  top: calc(50% + 1px);
  right: 0;
  transform: translateY(-50%);
  padding: 4px 8px;
  vertical-align: middle;
  margin-bottom: -2px;

  &:hover svg path {
    fill: var(--blue);
  }
`;
