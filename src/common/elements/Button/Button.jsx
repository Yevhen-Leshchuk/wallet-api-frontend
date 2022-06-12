import s from './Button.module.scss';

const Button = ({ text, style, btnAction }) => {
  // const onClickAction = e => {
  //   e.preventDefault();
  //   btnAction();
  // };
  return (
    <>
      <button type="button" className={s.button} style={style} onClick={null}>
        {text}
      </button>
    </>
  );
};

export default Button;
