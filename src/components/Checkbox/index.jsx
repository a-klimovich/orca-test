import React from "react";

import { ReactComponent as Checkmark } from "../../assets/checkmark-arrow.svg";

import { LabelStyled, CheckboxContainerStyled, HiddenCheckboxStyled, CheckboxStyled } from "./styles";

const Checkbox = (props) => {
  const { checked, labelText, onChange } = props;

  return (
    <LabelStyled>
      <CheckboxContainerStyled>
        <HiddenCheckboxStyled onChange={onChange} checked={checked} />

        <CheckboxStyled checked={checked}>
          <Checkmark />
        </CheckboxStyled>
      </CheckboxContainerStyled>

      <span style={{ marginLeft: 8 }}>{labelText}</span>
    </LabelStyled>
  );
};

export default Checkbox;
