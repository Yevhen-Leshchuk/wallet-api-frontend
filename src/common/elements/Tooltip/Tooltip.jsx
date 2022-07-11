import PropTypes from 'prop-types';
import s from './Tooltip.module.scss';

const Tooltip = ({ style }) => {
  return (
    <div id="overlay" className={s.tooltipBox} style={style}>
      <p className={s.tooltipText}>
        Привет! Для начала работы внеси текущий баланс своего счета!
      </p>
      <p className={s.tooltipTextComment}>
        Ты не можешь тратить деньги пока их y тебя нет :)
      </p>
    </div>
  );
};

Tooltip.propTypes = {
  style: PropTypes.object,
};

export default Tooltip;
