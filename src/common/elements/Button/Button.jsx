import PropTypes from 'prop-types';
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

Button.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.object,
  onClick: PropTypes.func.isRequired,
};

export default Button;
