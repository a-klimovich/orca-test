import Typography from "../Typography";
import Dropdown from "../Dropdown";
import Button from "../Button";

import { ReactComponent as DownloadSVG } from "../../assets/download.svg";
import { dropdownList } from "../../__mockdata";

import { ExtandedAdditionalInfoStyled, TitleStyled, FooterStyled } from "./styles";

const { Text } = Typography;

export const ExtandedAdditionalInfo = (props) => {
  const { title, content, maxHeight, overflowY, isModalFooter } = props;

  return (
    <ExtandedAdditionalInfoStyled maxHeight={maxHeight} overflowY={overflowY}>
      <TitleStyled>{title}</TitleStyled>

      <Text wordBreakAll whiteSpaceNormal margin={"0 0 16px 0"}>
        {content}
      </Text>

      <FooterStyled>
        <Button variant='blue' onClick={() => console.log("hendleDownload")}>
          Download
        </Button>

        <Dropdown
          isFixed={true}
          variant='blue'
          list={dropdownList.download}
          onClick={() => console.log("hendleDownloadAs")}>
          <DownloadSVG />
          Download as
        </Dropdown>

        {isModalFooter && <Button onClick={() => console.log("hendleCancel")}>Cancel</Button>}
      </FooterStyled>
    </ExtandedAdditionalInfoStyled>
  );
};
