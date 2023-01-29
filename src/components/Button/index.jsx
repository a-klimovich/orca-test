import {ButtonStyled} from './styles'

const Button = (props) => {
  const { onClick, children } = props;

  return (
    <ButtonStyled 
      onClick={onClick}
      type='button'
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;
