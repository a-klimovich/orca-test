import { StatusStyled } from "./styled";

import { ReactComponent as StatusDangerSVG } from "../../assets/warning-danger.svg";
import { ReactComponent as StatusWarninSVG } from "../../assets/warning.svg";
import { ReactComponent as StatusCautionSVG } from "../../assets/warning-caution.svg";

const getCurrentStatusIcon = (status) => {
  switch (status) {
    case 'danger':
      return <StatusDangerSVG />
      
    case 'warning':
      return <StatusWarninSVG />
      
    case 'caution':
      return <StatusCautionSVG />
  
    default:
      break;
  }
}

export const Status = (props) =>  {
  const { status, variant, size } = props;

  return (
    <StatusStyled variant={variant} size={size}>
      { getCurrentStatusIcon(status) }
    </StatusStyled>
  )
}
