import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { transactionOperations, transactionSelectors } from 'redux/transaction';
import { ExpensesListItem } from 'components/TransactionListItem';
import useMediaQuery from 'common/hooks/mediaRulesHook';
import s from './TransactionList.module.scss';

const ExpensesList = () => {
  const mobileMediaQuery = useMediaQuery('(max-width: 767px)');
  const tabletMediaQuery = useMediaQuery('(min-width: 768px)');
  const dispatch = useDispatch();
  const expensesList = useSelector(transactionSelectors.getExpensesData);
  const isAddExpenseItem = useSelector(
    transactionSelectors.getIsAddExpenseItem
  );
  const isDeleteExpenseItem = useSelector(
    transactionSelectors.getIsDeleteExpenseItem
  );

  useEffect(() => {
    dispatch(transactionOperations.getExpensesData());
  }, [dispatch, isAddExpenseItem, isDeleteExpenseItem]);

  return (
    <>
      {tabletMediaQuery && (
        <>
          <ul className={s.expListHeader}>
            <li className={s.expListHeaderItem} key={'Дата'}>
              Дата
            </li>
            <li className={s.expListHeaderItem} key={'Описание'}>
              Описание
            </li>
            <li className={s.expListHeaderItem} key={'Категория'}>
              Категория
            </li>
            <li className={s.expListHeaderItem} key={'Сумма'}>
              Сумма
            </li>
          </ul>
          <div className={s.expListBox}>
            <ul className={s.expListItemBox}>
              {expensesList &&
                expensesList.map(expense => (
                  <ExpensesListItem key={expense._id} {...expense} />
                ))}
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default ExpensesList;
