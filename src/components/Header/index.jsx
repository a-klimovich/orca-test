// import { ReactComponent as Logo } from "../../assets/logo.svg";
import { useState } from "react";
import Checkbox from "../Checkbox";
import Dropdown from "../Dropdown";
import { Switch } from "../Switch";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as GroupSVG } from "../../assets/group-by.svg";
import { ReactComponent as SortSVG } from "../../assets/sort-by.svg";

import { dropdownList } from "../../__mockdata";

import { HeaderStyled, WrapperStyled, ButtonSufixStyled } from "./styles";

const Header = (props) => {
  const { handleChange } = props;

  const [checked, setChecked] = useState(false);

  return (
    <HeaderStyled>
      <a href='#'>
        <Logo />
      </a>

      <WrapperStyled>
        <Checkbox checked={checked} onChange={() => setChecked(!checked)} labelText='Show additional items' />

        <Dropdown list={dropdownList.group}>
          <ButtonSufixStyled>
            <GroupSVG />
          </ButtonSufixStyled>
          Group by
        </Dropdown>

        <Dropdown list={dropdownList.sort}>
          <ButtonSufixStyled>
            <SortSVG />
          </ButtonSufixStyled>
          Sort by
        </Dropdown>

        <Switch onChange={handleChange} />
      </WrapperStyled>
    </HeaderStyled>
  );
};

export default Header;
