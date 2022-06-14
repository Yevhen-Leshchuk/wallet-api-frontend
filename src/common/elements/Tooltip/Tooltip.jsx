import s from './Tooltip.module.scss';

const Tooltip = () => {
  return (
    <div id="overlay" className={s.tooltipBox}>
      <p className={s.tooltipText}>
        Привет! Для начала работы внеси текущий баланс своего счета!
      </p>
      <p className={s.tooltipTextComment}>
        Ты не можешь тратить деньги пока их у тебя нет :)
      </p>
    </div>
  );
};

export default Tooltip;
