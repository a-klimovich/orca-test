import React, { useState } from "react";

import { SwitchContainer, SwitchInput, SwitchSlider, SvgBlock, SvgRow } from "./styles";

export const Switch = ({ value }) => {
  const [isViewChanged, setIsViewChanged] = useState(true);

  const handleChange = () => {
    setIsViewChanged(!isViewChanged);
  };

  return (
    <SwitchContainer>
      <SwitchInput type='checkbox' value={value} onChange={handleChange} checked={isViewChanged} />
      <SwitchSlider className='slider' />

      <SvgBlock checked={isViewChanged} />
      <SvgRow checked={isViewChanged} />
    </SwitchContainer>
  );
};
