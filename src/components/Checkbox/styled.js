import styled from "styled-components";

export const LabelStyled = styled.label`
  cursor: pointer;
`

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  padding-bottom: 1px;
`;

export const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
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

export const StyledCheckbox = styled.div`
  display: inline-block;
  position: relative;
  width: 12px;
  height: 12px;
  background: ${props => (props.checked ? 'var(--blue)' : 'var(--white)')};
  border-radius: 2px;
  border: 1px solid var(--gray-dark);
  transition: all 150ms;

  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
    position: absolute;
  }
`;
