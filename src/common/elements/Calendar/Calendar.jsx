import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import sprite from '../../../images/svg/sprite.svg';
import s from './Calendar.module.scss';

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className={s.calendarBox}>
      <div className={s.calendarIconBox}>
        <svg className={s.calendarIcon}>
          <use xlinkHref={`${sprite}#calendar`} />
        </svg>
      </div>
      <DatePicker
        className={s.datePicker}
        // selected={
        //   date ? new Date(date.split('.').reverse().join('-')) : new Date()
        // }
        dateFormat="dd.MM.yyyy"
        // onChange={handleChangeDate}
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
      />
    </div>
  );
};

export default Calendar;
