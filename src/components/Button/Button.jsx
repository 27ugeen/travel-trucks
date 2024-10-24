import css from './Button.module.scss';

const Button = ({ text, onClick, variant = 'primary', validation = true }) => {
  return (
    <button
      className={`${css.button} ${css[variant]} ${
        !validation ? css.disabled : ''
      }`}
      onClick={onClick}
      disabled={!validation}
    >
      {text}
    </button>
  );
};

export default Button;
