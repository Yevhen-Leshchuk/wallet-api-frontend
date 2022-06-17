import { ExpensesListItem } from 'components/TransactionListItem';
import s from './TransactionList.module.scss';

const ExpensesList = () => {
  return (
    <>
      <ul className={s.expListHeader}>
        <li className={s.expListHeaderItem}>Дата</li>
        <li className={s.expListHeaderItem}>Описание</li>
        <li className={s.expListHeaderItem}>Категория</li>
        <li className={s.expListHeaderItem}>Сумма</li>
      </ul>
      <div className={s.expListBox}>
        <ul className={s.expListItemBox}>
          <ExpensesListItem />
        </ul>
      </div>
    </>
  );
};

export default ExpensesList;
