import { ExpensesListItem } from 'components/TransactionListItem';
import s from './TransactionList.module.scss';

const ExpensesList = () => {
  return (
    <div>
      <div>
        {/* <ul>
          <li>Дата</li>
          <li>Описание</li>
          <li>Категория</li>
          <li>Сумма</li>
        </ul> */}
        <ul className={s.expensesListBox}>
          <ExpensesListItem />
        </ul>
      </div>
    </div>
  );
};

export default ExpensesList;
