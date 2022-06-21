import { Link, useLocation } from 'react-router-dom';
import sprite from '../../../images/svg/sprite.svg';
import s from './ReportNavTransaction.module.scss';

const ReportNavTransaction = () => {
  const location = useLocation();
  const activeLocation = location.pathname;
  console.log(activeLocation);

  return (
    <div className={s.reportNavTransactionBox}>
      <Link
        to="/report/expenses"
        alt="expensesPage"
        className={s.reportNavTransactionLink}
      >
        <svg className={s.reportNavIcon}>
          <use xlinkHref={`${sprite}#arrow-left`} />
        </svg>
      </Link>
      {activeLocation === '/report/expenses' ? (
        <p className={s.reportNavTransactionTitle}>Расходы</p>
      ) : (
        <p className={s.reportNavTransactionTitle}>Доходы</p>
      )}

      <Link
        to="/report/incomes"
        alt="incomesPage"
        className={s.reportNavTransactionLinkIncomes}
      >
        <svg className={s.reportNavIcon} width="8" height="15">
          <use xlinkHref={`${sprite}#arrow-right`} />
        </svg>
      </Link>
    </div>
  );
};

export default ReportNavTransaction;
