import s from './Button.module.scss';

const Button = ({ text, style, onClick }) => {
  return (
    <>
      <button
        type="submit"
        className={s.button}
        style={style}
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
