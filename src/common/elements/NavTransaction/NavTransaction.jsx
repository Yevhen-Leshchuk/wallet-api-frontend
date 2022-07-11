import { NavLink } from 'react-router-dom';
import s from './NavTransaction.module.scss';

const NavTransaction = () => {
  return (
    <div className={s.navTransactionBox}>
      <NavLink
        to="/expenses"
        alt="expensesPage"
        className={({ isActive }) =>
          isActive ? `${s.activeLink}` : `${s.navTransactionLink}`
        }
      >
        Расход
      </NavLink>

      <NavLink
        to="/incomes"
        alt="incomesPage"
        className={({ isActive }) =>
          isActive ? `${s.activeLink}` : `${s.navTransactionLinkIncomes}`
        }
      >
        Доход
      </NavLink>
    </div>
  );
};

export default NavTransaction;
