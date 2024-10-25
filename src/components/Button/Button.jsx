import styles from './Button.module.scss';

const Button = ({
  children,
  onClick,
  variant = 'primary',
  validation = true,
  type = 'button',
}) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${styles[variant]} ${
        !validation ? styles.disabled : ''
      }`}
      onClick={onClick}
      disabled={!validation}
    >
      {children}
    </button>
  );
};

export default Button;
