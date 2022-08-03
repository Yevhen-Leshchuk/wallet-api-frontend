import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import sprite from '../../images/svg/sprite.svg';
import useMediaQuery from 'common/hooks/mediaRulesHook';
import ReportNavTransaction from 'common/elements/ReportNavTransaction';
import { reportSelectors } from 'redux/report';
import Chart from 'common/elements/Chart';
import s from './ReportIncomes.module.scss';

const ReportIncomes = () => {
  const tabletMediaQuery = useMediaQuery('(min-width: 768px)');
  const [incomeCategory, setIncomeCategory] = useState([]);
  const [incomeValue, setIncomeValue] = useState([]);
  const [event, setEvent] = useState(null);

  const incomesData = useSelector(reportSelectors.getIncomesData);
  const incomesArr = Object.entries(incomesData);

  useEffect(() => {
    if (incomesArr.length > 0) {
      return;
    }

    setIncomeCategory([]);
    setIncomeValue([]);
  }, [incomesArr.length]);

  const onIncomeItem = (event, item) => {
    event.preventDefault();
    setEvent(event);
    const labels = Object.entries(item[1])
      .filter(([key, value]) => key !== 'total')
      .map(([key, value]) => key);
    const values = Object.entries(item[1])
      .filter(([key, value]) => key !== 'total')
      .map(([key, value]) => value);
    setIncomeCategory(labels);
    setIncomeValue(values);
  };

  return (
    <>
      <div className={s.reportIncomesContainer}>
        {tabletMediaQuery && <ReportNavTransaction />}
        <div className={s.reportIncomesBox}>
          <ul className={s.reportIncomesList}>
            {incomesData &&
              Object.entries(incomesData).map(item => (
                <li
                  className={s.reportIncomesItem}
                  key={item[0]}
                  onClick={event => onIncomeItem(event, item)}
                >
                  <p className={s.reportIncomesCount}>{item[1].total}</p>
                  <div className={s.reportIncomesIconBox}>
                    <svg className={s.reportIncomesIcon}>
                      <use xlinkHref={`${sprite}#${item[0]}`} />
                    </svg>
                  </div>
                  <h2 className={s.reportIncomesTitle}>{item[0]}</h2>
                </li>
              ))}
          </ul>
        </div>
      </div>
      <Chart
        chartData={incomesData}
        transactionCategory={incomeCategory}
        expenseValue={incomeValue}
        event={event}
      />
    </>
  );
};

export default ReportIncomes;
