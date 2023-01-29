// import { ReactComponent as Logo } from "../../assets/logo.svg";
import { useState } from "react";
import Logo from "../../assets/logo.svg";
import Checkbox from "../Checkbox";
import Dropdown from "../Dropdown";
import { Switch } from "../Switch";

import { ReactComponent as GroupSVG } from '../../assets/group-by.svg';
import { ReactComponent as SortSVG } from '../../assets/sort-by.svg';

import { HeaderStyled, WrapperStyled, ButtonSufixStyled } from "./styled";

const dropdownList = {
  download: [
    {
      label: 'Document',
      value: 'Document',
    },
    {
      label: 'Image',
      value: 'Image',
    },
    {
      label: 'PDF',
      value: 'PDF',
    },
    {
      label: 'HTML',
      value: 'HTML',
    },
  ],
  sort: [
    {
      label: 'Name',
      value: 'Name',
    },
    {
      label: 'File name',
      value: 'File name',
    },
    {
      label: 'IP Address v4',
      value: 'IP Address v4',
    },
    {
      label: 'IP Address v6',
      value: 'IP Address v6',
    },
    {
      label: 'Scan source',
      value: 'Scan source',
    },
  ],
  group: [
    {
      label: 'Name',
      value: 'Name',
    },
    {
      label: 'File name',
      value: 'File name',
    },
    {
      label: 'IP Address v4',
      value: 'IP Address v4',
    },
    {
      label: 'IP Address v6',
      value: 'IP Address v6',
    },
    {
      label: 'Scan source',
      value: 'Scan source',
    },
  ],
}

const Header = () => {
  const [checked, setChecked] = useState(false);

  return (
    <HeaderStyled>
      <img src={Logo} alt='logo' />

      <WrapperStyled>
        <Checkbox checked={checked} onChange={() => setChecked(!checked)} labelText='Show additional items' />

        <Dropdown
          list={dropdownList.group}
        >
          <ButtonSufixStyled>
            <GroupSVG />
          </ButtonSufixStyled>

          Group by
        </Dropdown>
        
        <Dropdown
          list={dropdownList.sort}
        >
          <ButtonSufixStyled>
            <SortSVG />
          </ButtonSufixStyled>

          Sort by
        </Dropdown>

        <Switch 
          // value={() => true}
          // onChange={(e) => e.target.value}
        />
      </WrapperStyled>
    </HeaderStyled>
  );
};

export default Header;
