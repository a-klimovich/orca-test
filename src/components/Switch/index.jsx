import React, { useState } from "react";

import { SwitchContainer, SwitchInput, SwitchSlider, SvgBlock, SvgRow } from "./styles";

export const Switch = (props) => {
  const {onChange} = props;
  const [isViewChanged, setIsViewChanged] = useState(false);

  const handleChange = (val) => {
    setIsViewChanged(val);
    onChange(val)
  };

  return (
    <SwitchContainer>
      <SwitchInput type='checkbox' onChange={() => handleChange(!isViewChanged)} checked={isViewChanged} />
      <SwitchSlider className='slider' />

      <SvgBlock checked={isViewChanged} />
      <SvgRow checked={isViewChanged} />
    </SwitchContainer>
  );
};
