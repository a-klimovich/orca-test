// import { ReactComponent as Logo } from "../../assets/logo.svg";
import { useState } from "react"
import Logo from "../../assets/logo.svg"
import Checkbox from "../Checkbox"

import {HeaderStyled, WrapperStyled} from './styled'

const Header = () => {
  const [checked, setChecked] = useState(false)

  return ( 
    <HeaderStyled>
      <img src={Logo} alt="logo" />

      <WrapperStyled>
        <Checkbox 
          checked={checked}
          onChange={() => setChecked(!checked)}
          labelText="Show additional items"
        />
        
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </WrapperStyled>
    </HeaderStyled>
   );
}
 
export default Header;