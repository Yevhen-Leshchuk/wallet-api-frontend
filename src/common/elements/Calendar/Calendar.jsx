import { useSelector, useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { dateSelectors } from 'redux/date';
import { selectedDate } from 'redux/date';
import sprite from '../../../images/svg/sprite.svg';
import s from './Calendar.module.scss';

const Calendar = () => {
  const dispatch = useDispatch();

  const date = useSelector(dateSelectors.getSelectedDate);

  const handleChangeDate = date => {
    console.log(date);
    dispatch(
      selectedDate(
        date.toISOString().slice(0, 10).split('.').reverse().join('-')
      )
    );
  };

  return (
    <div className={s.calendarBox}>
      <div className={s.calendarIconBox}>
        <svg className={s.calendarIcon}>
          <use xlinkHref={`${sprite}#calendar`} />
        </svg>
      </div>
      <DatePicker
        className={s.datePicker}
        selected={
          date ? new Date(date.split('.').reverse().join('-')) : new Date()
        }
        dateFormat="yyyy-MM-dd"
        onChange={handleChangeDate}
      />
    </div>
  );
};

export default Calendar;
