import styled from "styled-components";

export const CheckboxContainerStyled = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

export const HiddenCheckboxStyled = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const CheckboxStyled = styled.div`
  display: inline-flex;
  position: relative;
  width: 12px;
  height: 12px;
  background: ${(props) => (props.checked ? "var(--blue)" : "var(--white)")};
  border-radius: 2px;
  border: 1px solid ${(props) => (props.checked ? "var(--blue)" : "var(--gray-dark)")};
  transition: all 150ms;

  svg {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const LabelStyled = styled.label`
  cursor: pointer;

  &:hover ${CheckboxStyled} {
    border-color: var(--blue);
  }
`;
