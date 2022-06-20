import s from './Budget.module.scss';

const Budget = () => {
  return (
    <div className={s.budgetBox}>
      <ul className={s.budgetList}>
        <li className={s.budgetListItem}>
          <p className={s.budgetListItemText}>Расходы:</p>
          <span className={s.budgetListItemExp}>- 18000.00 €</span>
        </li>
        <li className={s.budgetListItem}>
          <p className={s.budgetListItemText}>Доходы:</p>
          <span className={s.budgetListItemInc}>+ 45000.00 €</span>
        </li>
      </ul>
    </div>
  );
};

export default Budget;
