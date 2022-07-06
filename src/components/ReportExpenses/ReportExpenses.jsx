import { useSelector } from 'react-redux';
import useMediaQuery from 'common/hooks/mediaRulesHook';
import ReportNavTransaction from 'common/elements/ReportNavTransaction';
import { reportSelectors } from 'redux/report';
import sprite from '../../images/svg/sprite.svg';
import s from './ReportExpenses.module.scss';

const ReportExpenses = () => {
  const mobileMediaQuery = useMediaQuery('(max-width: 767px)');
  const tabletMediaQuery = useMediaQuery('(min-width: 768px)');
  const expensesData = useSelector(reportSelectors.getExpensesData);

  return (
    <div className={s.reportExpensesContainer}>
      {tabletMediaQuery && <ReportNavTransaction />}
      <div className={s.reportExpensesBox}>
        <ul className={s.reportExpensesList}>
          {expensesData &&
            Object.entries(expensesData).map(item => (
              <li className={s.reportExpensesItem} key={item[0]}>
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
  );
};

export default ReportExpenses;
