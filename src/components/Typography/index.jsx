import { TextStyled, LinkStyled, CopyableStyled } from "./styled";

import { ReactComponent as CopySVG } from "../../assets/cmd-c.svg";
import { ReactComponent as TragetSVG } from "../../assets/target.svg";
import { ReactComponent as LinkSVG } from "../../assets/link.svg";

export const Typography = {};

export const Text = (props) => {
  const { children, sufix, maxWidth, breakAll = false } = props;

  return (
    <TextStyled breakWords={breakAll} maxWidth={maxWidth}>
      {children}
      {sufix && <span>{` ${sufix}`}</span>}
    </TextStyled>
  );
};

export const Copyable = (props) => {
  const { children, sufix = false, maxWidth } = props;

  const handleTextCtrlC = (event, value) => {
    return navigator.clipboard.writeText(value);
  };

  return (
    <CopyableStyled maxWidth={maxWidth}>
      {children}
      {sufix && (
        <button type='button' onClick={() => handleTextCtrlC(children)}>
          <CopySVG />
        </button>
      )}
    </CopyableStyled>
  );
};

export const Link = (props) => {
  const { prefix, children, sufix, maxWidth, ...rest } = props;

  return (
    <LinkStyled maxWidth={maxWidth}>
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