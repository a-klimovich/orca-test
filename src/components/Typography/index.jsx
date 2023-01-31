import { ReactComponent as CopySVG } from "../../assets/cmd-c.svg";
import { ReactComponent as TragetSVG } from "../../assets/target.svg";
import { ReactComponent as LinkSVG } from "../../assets/link.svg";

import { TextStyled, LinkStyled, CopyableStyled, ButtonCopyStyled } from "./styles";

export const Typography = {};

export const Text = (props) => {
  const { children, sufix, maxWidth, ...rest } = props;

  return (
    <TextStyled {...rest} maxWidth={maxWidth}>
      {children}
      {sufix && <span>{` ${sufix}`}</span>}
    </TextStyled>
  );
};

export const Copyable = (props) => {
  const { children, sufix = false, ...rest } = props;

  const handleTextCtrlC = (value) => navigator.clipboard.writeText(value);

  return (
    <CopyableStyled {...rest}>
      {children}
      {sufix && (
        <ButtonCopyStyled type='button' onClick={() => handleTextCtrlC(children)}>
          <CopySVG />
        </ButtonCopyStyled>
      )}
    </CopyableStyled>
  );
};

export const Link = (props) => {
  const { prefix, children, sufix, maxWidth, whiteSpaceNormal, wordBreakAll, paddingTop, ...rest } = props;

  return (
    <LinkStyled maxWidth={maxWidth} whiteSpaceNormal={whiteSpaceNormal} wordBreakAll={wordBreakAll}>
      {prefix && (
        <span className='prefix'>
          <TragetSVG />
        </span>
      )}

      <a {...rest}>{children}</a>

      {sufix && (
        <span className='sufix'>
          <LinkSVG />
        </span>
      )}
    </LinkStyled>
  );
};

Typography.Text = Text;
Typography.Copyable = Copyable;
Typography.Link = Link;

export default Typography;
