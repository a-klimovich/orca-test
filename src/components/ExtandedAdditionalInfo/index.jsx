import { ExtandedAdditionalInfoStyled, TitleStyled } from "./styled";
import Typography from "../Typography";

const { Text } = Typography;

export const ExtandedAdditionalInfo = (props) => {
  const {title, content} = props;
  
  return (
    <ExtandedAdditionalInfoStyled>
      <TitleStyled>
        {title}
      </TitleStyled>

      <Text breakAll={true}>{content}</Text>
    </ExtandedAdditionalInfoStyled>
  );
};
