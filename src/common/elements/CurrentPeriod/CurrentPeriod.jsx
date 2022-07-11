import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { reportOperations } from 'redux/report';
import sprite from '../../../images/svg/sprite.svg';
import moment from 'moment';
import s from './CurrentPeriod.module.scss';

const CurrentPeriod = ({ style }) => {
  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date());
  const monthes = moment(date).format('YYYY-MM');

  useEffect(() => {
    dispatch(reportOperations.getExpensesReport(monthes));
  }, [dispatch, monthes]);

  useEffect(() => {
    dispatch(reportOperations.getIncomesReport(monthes));
  }, [dispatch, monthes]);

  const changeMonth = action => {
    const value = action === 'prev' ? -1 : 1;

    setDate(prevDate => {
      const newDate = new Date(prevDate.getTime());
      const month = newDate.getMonth();

      newDate.setMonth(month + value);
      if (newDate > new Date()) {
        return prevDate;
      }
      return newDate;
    });
  };
  const year = date.getFullYear();
  const month = date.toLocaleDateString('ru', { month: 'long' });

  return (
    <div className={s.currentPeriodBox} style={style}>
      <h2 className={s.currentPeriodTitle}>Текущий период :</h2>
      <div className={s.dateBox}>
        <button
          type="button"
          className={s.dateBtn}
          onClick={() => changeMonth('prev')}
        >
          <svg className={s.dateIcon}>
            <use xlinkHref={`${sprite}#arrow-left`} />
          </svg>
        </button>
        <p className={s.dateText}>
          {month} {year}
        </p>
        <button
          type="button"
          className={s.dateBtn}
          onClick={() => changeMonth('next')}
        >
          <svg className={s.dateIcon}>
            <use xlinkHref={`${sprite}#arrow-right`} />
          </svg>
        </button>
      </div>
    </div>
  );
};

CurrentPeriod.propTypes = {
  style: PropTypes.object,
};

export default CurrentPeriod;
