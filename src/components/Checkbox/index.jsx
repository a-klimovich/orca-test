import React from 'react'
import {CheckboxContainer, HiddenCheckbox, StyledCheckbox, LabelStyled} from './styled'
import { ReactComponent as Checkmark } from '../../assets/checkmark-arrow.svg'

const Checkbox = (props) => {
  const { className, checked, labelText, ...rest } = props;

  return (
    <LabelStyled>
      <CheckboxContainer className={className} {...rest}>
        <HiddenCheckbox checked={checked} />

        <StyledCheckbox checked={checked}>
          <Checkmark />
        </StyledCheckbox>
      </CheckboxContainer>

      <span style={{ marginLeft: 8 }}>{labelText}</span>
    </LabelStyled>
  )
}

export default Checkbox