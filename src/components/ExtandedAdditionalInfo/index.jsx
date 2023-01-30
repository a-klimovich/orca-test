import Typography from "../Typography";
import Dropdown from "../Dropdown";
import Button from "../Button";

import { ReactComponent as DownloadSVG } from "../../assets/download.svg";

import { dropdownList } from "../../__mockdata";
import { ExtandedAdditionalInfoStyled, TitleStyled, FooterStyled } from "./styled";

const { Text } = Typography;

export const ExtandedAdditionalInfo = (props) => {
  const {
    title,
    content,
    maxHeight,
    overflowY,
    footer
  } = props;

  return (
    <ExtandedAdditionalInfoStyled maxHeight={maxHeight} overflowY={overflowY}>
      <TitleStyled>{title}</TitleStyled>

      <Text wordBreakAll whiteSpaceNormal margin={"0 0 16px 0"}>
        {content}
      </Text>

      <FooterStyled>
        <Button variant='blue' onClick={() => console.log('hendleDownload')}>
          Download
        </Button>

        <Dropdown variant='blue' list={dropdownList.download} onClick={() => console.log('hendleDownloadAs')}>
          <DownloadSVG /> Download as
        </Dropdown>

        <Button onClick={() => console.log('hendleCancel')}>Cancel</Button>
      </FooterStyled>
    </ExtandedAdditionalInfoStyled>
  );
};
