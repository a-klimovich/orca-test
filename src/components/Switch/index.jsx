import React, { useState } from "react";

import { SwitchContainerStyled, SwitchInputStyled, SwitchSliderStyled, SvgBlockStyled, SvgRowStyled } from "./styles";

export const Switch = (props) => {
  const { onChange } = props;
  const [isViewChanged, setIsViewChanged] = useState(false);

  const handleChange = (val) => {
    setIsViewChanged(val);
    onChange(val);
  };

  return (
    <SwitchContainerStyled>
      <SwitchInputStyled type='checkbox' onChange={() => handleChange(!isViewChanged)} checked={isViewChanged} />
      <SwitchSliderStyled className='slider' />

      <SvgBlockStyled checked={isViewChanged} />
      <SvgRowStyled checked={isViewChanged} />
    </SwitchContainerStyled>
  );
};
