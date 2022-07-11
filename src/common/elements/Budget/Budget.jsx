import { useSelector } from 'react-redux';
import { reportSelectors } from 'redux/report';
import s from './Budget.module.scss';

const Budget = () => {
  const expensesTotal = useSelector(reportSelectors.getExpenseTotal);
  const incomesTotal = useSelector(reportSelectors.getIncomeTotal);

  return (
    <div className={s.budgetBox}>
      <ul className={s.budgetList}>
        <li className={s.budgetListItem}>
          <p className={s.budgetListItemText}>Расходы:</p>
          <span className={s.budgetListItemExp}>
            {expensesTotal && `- ${expensesTotal} €`}
          </span>
        </li>
        <li className={s.budgetListItem}>
          <p className={s.budgetListItemText}>Доходы:</p>
          <span className={s.budgetListItemInc}>
            {incomesTotal && `+ ${incomesTotal} €`}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Budget;
