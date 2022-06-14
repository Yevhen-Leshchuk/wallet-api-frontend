import { Link } from 'react-router-dom';
import s from './NavTransaction.module.scss';

const NavTransaction = () => {
  return (
    <div className={s.navTransactionBox}>
      <Link to="/expenses" alt="expensesPage" className={s.navTransactionLink}>
        Расход
      </Link>

      <Link
        to="/incomes"
        alt="incomesPage"
        className={s.navTransactionLinkIncomes}
      >
        Доход
      </Link>
    </div>
  );
};

export default NavTransaction;
