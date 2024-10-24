import scss from './Button.module.scss';

const Button = ({
  children,
  onClick,
  variant = 'primary',
  validation = true,
}) => {
  return (
    <button
      className={`${scss.button} ${scss[variant]} ${
        !validation ? scss.disabled : ''
      }`}
      onClick={onClick}
      disabled={!validation}
    >
      {children}
    </button>
  );
};

export default Button;
