import React from 'react'
import {CheckboxContainer, Icon, HiddenCheckbox, StyledCheckbox, LabelStyled} from './styled'

const Checkbox = (props) => {
  const { className, checked, labelText, ...rest } = props;

  return (
    <LabelStyled>
      <CheckboxContainer className={className}>
        <HiddenCheckbox checked={checked} {...rest} />

        <StyledCheckbox checked={checked}>
          <Icon viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </Icon>
        </StyledCheckbox>
      </CheckboxContainer>
      
      <span style={{ marginLeft: 8 }}>{labelText}</span>
    </LabelStyled>
  )
}

export default Checkbox