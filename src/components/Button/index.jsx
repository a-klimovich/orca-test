import { ButtonStyled } from "./styles";

const Button = (props) => {
  const { onClick, children, variant = "default", alignment, buttonRef } = props;

  return (
    <ButtonStyled
      type='button'
      onClick={onClick} 
      variant={variant}
      alignment={alignment}
      ref={buttonRef}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;
