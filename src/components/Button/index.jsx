import { ButtonStyled } from "./styles";

const Button = (props) => {
  const { onClick, children, variant = 'default', alignment } = props;

  return (
    <ButtonStyled type='button' onClick={onClick} variant={variant} alignment={alignment}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
