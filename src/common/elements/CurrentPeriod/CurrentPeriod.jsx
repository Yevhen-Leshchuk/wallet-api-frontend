import sprite from '../../../images/svg/sprite.svg';
import s from './CurrentPeriod.module.scss';

const CurrentPeriod = () => {
  return (
    <div className={s.currentPeriodBox}>
      <h2 className={s.currentPeriodTitle}>Текущий период :</h2>
      <div className={s.dateBox}>
        <button type="button" className={s.dateBtn} onClick={() => null}>
          <svg className={s.dateIcon}>
            <use xlinkHref={`${sprite}#arrow-left`} />
          </svg>
        </button>
        <p className={s.dateText}>Июль 2022</p>
        <button type="button" className={s.dateBtn} onClick={() => null}>
          <svg className={s.dateIcon}>
            <use xlinkHref={`${sprite}#arrow-right`} />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CurrentPeriod;
