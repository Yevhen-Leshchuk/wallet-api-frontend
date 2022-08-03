import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import useMediaQuery from 'common/hooks/mediaRulesHook';
import ReportNavTransaction from 'common/elements/ReportNavTransaction';
import { reportSelectors } from 'redux/report';
import Chart from 'common/elements/Chart';
import sprite from '../../images/svg/sprite.svg';
import s from './ReportExpenses.module.scss';

const ReportExpenses = () => {
  const tabletMediaQuery = useMediaQuery('(min-width: 768px)');
  const [expenseCategory, setExpenseCategory] = useState([]);
  const [expenseValue, setExpenseValue] = useState([]);
  const [event, setEvent] = useState(null);

  const expensesData = useSelector(reportSelectors.getExpensesData);
  const expensesArr = Object.entries(expensesData);

  useEffect(() => {
    if (expensesArr.length > 0) {
      return;
    }

    setExpenseCategory([]);
    setExpenseValue([]);
  }, [expensesArr.length]);

  const onExpenseItem = (event, item) => {
    event.preventDefault();
    setEvent(event);
    const labels = Object.entries(item[1])
      .filter(([key, value]) => key !== 'total')
      .map(([key, value]) => key);
    const values = Object.entries(item[1])
      .filter(([key, value]) => key !== 'total')
      .map(([key, value]) => value);
    setExpenseCategory(labels);
    setExpenseValue(values);
  };

  return (
    <>
      <div className={s.reportExpensesContainer}>
        {tabletMediaQuery && <ReportNavTransaction />}
        <div className={s.reportExpensesBox}>
          <ul className={s.reportExpensesList}>
            {expensesData &&
              Object.entries(expensesData).map(item => (
                <li
                  className={s.reportExpensesItem}
                  key={item[0]}
                  onClick={event => onExpenseItem(event, item)}
                >
                  <p className={s.reportExpensesCount}>{item[1].total}</p>
                  <div className={s.reportExpensesIconBox}>
                    <svg className={s.reportExpensesIcon}>
                      <use xlinkHref={`${sprite}#${item[0]}`} />
                    </svg>
                  </div>
                  <h2 className={s.reportExpensesTitle}>{item[0]}</h2>
                </li>
              ))}
          </ul>
        </div>
      </div>

      <Chart
        chartData={expensesData}
        transactionCategory={expenseCategory}
        expenseValue={expenseValue}
        event={event}
      />
    </>
  );
};

export default ReportExpenses;
